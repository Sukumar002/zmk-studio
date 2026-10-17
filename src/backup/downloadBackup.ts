import { invoke } from "@tauri-apps/api/core";

import type { BackupV1 } from "./backupFormat";

export type BackupDownloadResult =
  | { kind: "web"; filename: string }
  | { kind: "desktop"; filename: string; path: string }
  | { kind: "cancelled"; filename: string };

function backupFilename(backup: BackupV1) {
  const deviceSlug =
    backup.device.name.replace(/[^a-zA-Z0-9_-]+/g, "_") || "device";
  // exportedAt is ISO UTC; squash to YYYYMMDD-HHMMSS for the filename.
  const stamp = backup.exportedAt
    .replace(/[-:]/g, "")
    .replace("T", "-")
    .slice(0, 15);

  return `zmk-backup-${deviceSlug}-${stamp}.json`;
}

/**
 * Export a backup using the native desktop save flow under Tauri and the
 * browser's download manager on the web.
 *
 * Browsers own their download destination and notification UI, so the web path
 * intentionally keeps using an <a download>. Desktop webviews do not have that
 * browser download surface, so the Tauri path asks the OS for a destination and
 * returns the exact saved path for the app's own completion notification.
 */
export async function downloadBackup(
  backup: BackupV1
): Promise<BackupDownloadResult> {
  const filename = backupFilename(backup);
  const contents = JSON.stringify(backup, null, 2);

  if (window.__TAURI_INTERNALS__) {
    const path = await invoke<string | null>("save_backup_file", {
      filename,
      contents,
    });

    return path
      ? { kind: "desktop", filename, path }
      : { kind: "cancelled", filename };
  }

  const blob = new Blob([contents], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);

  return { kind: "web", filename };
}

export async function revealBackupInFolder(path: string): Promise<void> {
  if (!window.__TAURI_INTERNALS__) {
    return;
  }

  await invoke("reveal_backup_in_folder", { path });
}

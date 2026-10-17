import { CheckCircle2, FolderOpen, X } from "lucide-react";

import { Button } from "../misc/Button";

export interface BackupExportToastProps {
  path: string;
  onReveal: () => void | Promise<void>;
  onClose: () => void;
}

export function BackupExportToast({
  path,
  onReveal,
  onClose,
}: BackupExportToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[100] w-[min(28rem,calc(100vw-2rem))] rounded-lg border border-base-line bg-base-100 p-4 shadow-xl"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="font-medium">Backup exported</p>
          <p className="mt-1 break-all text-xs text-base-content/60">{path}</p>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              icon={<FolderOpen aria-hidden />}
              onPress={onReveal}
            >
              Show in folder
            </Button>
            <Button variant="ghost" size="sm" onPress={onClose}>
              Dismiss
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          icon={<X aria-hidden />}
          aria-label="Dismiss export notification"
          onPress={onClose}
        />
      </div>
    </div>
  );
}

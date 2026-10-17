// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;

use futures::lock::Mutex;
use tauri_plugin_dialog::DialogExt;

mod transport;
use transport::commands::{transport_close, transport_send_data, ActiveConnection};

use transport::gatt::{gatt_connect, gatt_list_devices};
use transport::serial::{serial_connect, serial_list_devices};


#[tauri::command]
async fn save_backup_file(
    app: tauri::AppHandle,
    filename: String,
    contents: String,
) -> Result<Option<String>, String> {
    let selected = app
        .dialog()
        .file()
        .set_title("Export ZMK Studio Backup")
        .set_file_name(filename)
        .add_filter("JSON backup", &["json"])
        .blocking_save_file();

    let Some(selected) = selected else {
        return Ok(None);
    };

    let path = selected
        .into_path()
        .map_err(|e| format!("Invalid export path: {e}"))?;

    std::fs::write(&path, contents)
        .map_err(|e| format!("Failed to write backup: {e}"))?;

    Ok(Some(path.to_string_lossy().into_owned()))
}

#[tauri::command]
async fn reveal_backup_in_folder(path: String) -> Result<(), String> {
    tauri_plugin_opener::reveal_item_in_dir(path)
        .map_err(|e| format!("Failed to reveal backup: {e}"))
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_cli::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .manage(ActiveConnection {
            conn: Mutex::new(None),
        })
        .invoke_handler(tauri::generate_handler![
            transport_send_data,
            transport_close,
            gatt_list_devices,
            gatt_connect,
            serial_list_devices,
            serial_connect,
            save_backup_file,
            reveal_backup_in_folder,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
import ipcs from './ipcs.js';

function createWindow() {
  const appPath = app.getAppPath();
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(appPath, 'electron', 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:3000'); // 开发模式加载 Webpack Dev Server
  } else {
    win.loadFile(path.join(appPath, 'dist', 'index.html')); // 生产模式加载构建后的文件
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcs();



const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    getOsType: () => ipcRenderer.invoke('get-os-type'),
    getOsPlatform: () => ipcRenderer.invoke('get-os-platform'),
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),
    getAppName: () => ipcRenderer.invoke('get-app-name'),
    getAppLocale: () => ipcRenderer.invoke('get-app-locale'),
    getAppArch: () => ipcRenderer.invoke('get-app-arch'),
});


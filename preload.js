const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  getNode: () => process.versions.node,
  getChrome: () => process.versions.chrome,
  getElectron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
});

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
});

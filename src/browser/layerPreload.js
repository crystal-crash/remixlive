import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('remixlive', {
  openDevTools: () => ipcRenderer.send('devtools-overlay'),
  onState: (handler) => ipcRenderer.on('state', (ev, state) => handler(state)),
})

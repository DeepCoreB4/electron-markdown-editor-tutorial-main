import {useElectron} from '/@/use/electron' html, body { background-color:
transparent; height: 100%; } style=" background: transparent;" const
{readConfig} = useElectron()

const App = new BrowserWindow({
    transparent: true,
    frame: false,
    fullscreen: true,
})
mainWindow.setIgnoreMouseEvents(true)
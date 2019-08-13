const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);
const http = require('http');

http.createServer((req,res)=>{

})

function createWindow(){
    let win = new BrowserWindow({
        transparent: true,
        width: 280,
        height: 230,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
    })

    win.loadFile('index.html');

    //win.webContents.openDevTools();

    win.on('closed', () => win = null)
}

app.on('ready',createWindow);

app.on('window-all-closed', () => {
        if (process.platform !== 'darwin')
            app.quit()
})

app.on('activate', () =>{
    if(win == null){
        createWindow();
    }
})


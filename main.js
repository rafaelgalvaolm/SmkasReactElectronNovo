const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

const createLoginWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'Login',
    width: 1020,
    height: 1080
  })

  const startUrl = url.format({
    pathname: path.join(__dirname, '/pages/login.html'),
    protocol: 'file:',
    slashes: true
  })
  mainWindow.loadURL(startUrl)
}


// const createMainWindow = () => {
//   const win = new BrowserWindow({
//     width: 1920,
//     height: 1080,
//   })

//   win.loadFile('index.html')
// }

app.whenReady().then(() => {
  createLoginWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const dependency of ['chrome', 'node', 'electron']) {
//     replaceText(`${dependency}-version`, process.versions[dependency])
//   }
// })

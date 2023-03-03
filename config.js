import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['573157305913', 'sebastian', true],
  ['5217714698245'], 
  [''] 
] //Numeros de owner 

global.mods = ['5217714698245'] 
global.prems = ['5217714698245', '573157305913', '']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'TX BOT' 
global.author = '@sebaastian_88' 
global.fgig = ' Sígueme en Instagram\nhttps://www.instagram.com/sebaastian_88\n' 
global.dygp = 'https://chat.whatsapp.com/IeoXPsj6H6m1WWAyjrfXoy'
global.fgsc = '' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = '' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})


let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["aaron"])}.mp3`

conn.sendButton(m.chat, `Hola *${name}* \n \nNecesitas ayuda? \n`, fgig, null, [
      [' Menu', '/help'],
      [' alquilar', '/alquilar'],
      [' Grupos', '/gptx']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

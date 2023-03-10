
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${usedPrefix + command}* CHORRITO PA LAS ANIMAS,FEID`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `
	 *TX MUSIC*

  *Título* : ${title}
  *Publicado:* ${ago}
  *Duración:* ${timestamp}
  *Vistas:* ${views}
`
 await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}txmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}txmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler

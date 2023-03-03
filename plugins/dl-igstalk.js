
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Ingrese el Username de Instagram\n\n📌Ejemplo: ${usedPrefix + command} sebaastian_88` 
    let res = await fg.igStalk(args[0])
    let te = `
 *STALKING* 
 *Nombre:* ${res.name} 
 *Username:* ${res.username}
 *Seguidores:* ${res.followersH}
 *Siguiendo:* ${res.followingH}
 *Bio:* ${res.description}
 *Posts:* ${res.postsH}

 *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler

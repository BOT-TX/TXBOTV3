
let handler = async(m, { conn, usedPrefix, command }) => {

    let donat = `
    *DESEAS ALQUILAR EL BOT?*
        




    *COSTO*

*5 MES: 5 DLS*

 
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, donat,'Haga click en boton si quiere CONTACTAR a mi creador para realizar la compra', img, [['CONTACTAR', `${usedPrefix}owner`]],m)
}

handler.help = ['alquilar']
handler.tags = ['main']
handler.command = ['buypremium', 'buyprem', 'alquilar', 'comprar'] 

export default handler

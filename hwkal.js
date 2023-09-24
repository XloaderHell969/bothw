// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Hans


const fs = require('fs')
const chalk = require('chalk')



global.gr = 'https://chat.whatsapp.com/uehfwfuehfwhehfwhoehfohw'
global.ig = '@apaya' // ubah aja
global.email = 'velinreal99@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '*VelinXd*' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6288294029936','6285774523785'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'BOT BUG' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'BOT BUG' // ubah aja ini nama sticker
global.author = 'VelinXD' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

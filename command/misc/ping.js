const { calculatePing } = require('../../utils')

module.exports = {
    name: 'ping',
    category: 'misc',
    desc: 'Bot response in second.',
    async exec(msg, sock) {
        await msg.reply(`*_${"🚀Nge-Ping Bos😁?\n" + calculatePing(msg.messageTimestamp, Date.now())} detik_*`)
    }
}
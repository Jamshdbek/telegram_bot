const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => ctx.reply('Salom border hush kelobsiz!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

bot.on('text', (ctx) => {
    // Explicit usage
    ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
  
    // Using context shortcut
    ctx.reply(`Hello ${ctx.state.role}`)
  })

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))



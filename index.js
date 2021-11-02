const TelegramApi = require('node-telegram-bot-api')

const {brusko, sell} = require('./options')

const token = '791193985:AAHvXkjQ7NpkZwhkokioQkAR_We17EUUcHg'

const bot = new TelegramApi(token, {polling: true})

const chats = {}

var dt;

function count(data, id){
    br[id] = br[id] - data;
    if (br[id] < 0){
        br[id] = 0;
    }
    if (br[id] == 0){
        return "0. Товар полностью продан"
    }
    return br[id];
}

const menu = {
    reply_markup: JSON.stringify({
        keyboard:[
            [{text: 'Brusko', callback_data: '/brusko'}, {text: 'MAD', callback_data: '/mad'}, {text: 'RedNeck', callback_data: '/redneck'}],
            [{text: 'Info', callback_data: '/info'}],
        ]
    })
}
const br = {
    "Малиновый лимонад": 6,
    "Ледяная клубника с земляникой": 6,
    'Энергетик с яблоком и киви': 6,
    "Энергетик с манго": 6,
    "Энергетик с вишней": 6,
    "Фруктовое драже(скитлс)": 6
}


const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Инфа'}
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        // console.log(msg)
        if (text === '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/833/3af/8333afc9-e992-42b3-a63b-24a257a17608/1.webp')
            return bot.sendMessage(chatId, msg.from.first_name + ", hello", menu);
        }
        if (text === 'Brusko'){
            return bot.sendMessage(chatId, 'Brusko (30ml SALT HARD):', brusko)

        }
        if (text === '1' || text === '2' || text === '3' || text === '4' || text === '5' || text === '6' || text === '0'){
            let x = count(text, dt)
            return bot.sendMessage(chatId, 'Осталось продать ' + x, menu)
        }


        return bot.sendMessage(chatId, 'I dont now')
    })
    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        console.log(msg)
        if(data === Object.keys(br)[0] || data === Object.keys(br)[1] || data === Object.keys(br)[2] || data === Object.keys(br)[3] || data === Object.keys(br)[4] || data === Object.keys(br)[5]) {
            dt = data;
            bot.sendMessage(chatId, 'Сколько продал за этот раз?? ('+data+')', sell);
        }
    })
}

start()
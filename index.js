const TelegramApi = require('node-telegram-bot-api')

const {sell, ddote} = require('./options')

const db = require('./bd.json');
const fs = require('fs');
const {parse} = require("nodemon/lib/cli");

const token = '791193985:AAGHCqZNIKW3ANrkjUzCUGhDQ5nKQiUdrA0'

const bot = new TelegramApi(token, {polling: true})

const chats = {}
var file = JSON.parse(fs.readFileSync('./bd.json', 'utf-8'))

var dt, nums;
var x, buf;

const brusko = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Малиновый лимонад', callback_data: 'Малиновый лимонад'}],
            [{text: 'Ледяная клубника с земляникой', callback_data: 'Ледяная клубника с земляникой'}],
            [{text: 'Энергетик с яблоком и киви', callback_data: 'Энергетик с яблоком и киви'}],
            [{text: 'Энергетик с манго', callback_data: 'Энергетик с манго'}],
            [{text: 'Энергетик с вишней', callback_data: 'Энергетик с вишней'}],
            [{text: 'Фруктовое драже(скитлс)', callback_data: 'Фруктовое драже(скитлс)'}],
        ]
    })
}
const mad = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Ice Lychee', callback_data: 'Ice Lychee'}],
            [{text: 'Mix Tropic', callback_data: 'Mix Tropic'}],
            [{text: 'Apple Passion Fruit', callback_data: 'Apple Passion Fruit'}],
            [{text: 'Mix Wild Berries Red Bull', callback_data: 'Mix Wild Berries Red Bull'}],
            [{text: 'Lime Bubble Gum', callback_data: 'Lime Bubble Gum'}],
        ]
    })
}
const redneck = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Rought Wine', callback_data: 'Rought Wine'}],
            [{text: 'Drunk Harvest', callback_data: 'Drunk Harvest'}],
            [{text: 'Fresh Truck', callback_data: 'Fresh Truck'}],
        ]
    })
}
const menu = {
    reply_markup: JSON.stringify({
        keyboard:[
            [{text: 'Brusko', callback_data: '/brusko'}, {text: 'MAD', callback_data: '/mad'}, {text: 'RedNeck', callback_data: '/redneck'}],
            [{text: 'Info', callback_data: '/info'}],
        ]
    })
}
const stats = {
    reply_markup: JSON.stringify({
        keyboard:[
            [{text: 'Общаг🤑', callback_data: '/money'}],
            [{text: 'Наличие', callback_data: '/have'}],
            [{text: 'Выход🙈', callback_data: '/exit'}],
        ]
    })
}

const br = {
    "Малиновый лимонад": file.all["Малиновый лимонад"],
    "Ледяная клубника с земляникой": db.all["Ледяная клубника с земляникой"],
    'Энергетик с яблоком и киви': db.all["Энергетик с яблоком и киви"],
    "Энергетик с манго": db.all["Энергетик с манго"],
    "Энергетик с вишней": db.all["Энергетик с вишней"],
    "Фруктовое драже(скитлс)": db.all["Фруктовое драже(скитлс)"],
    "Ice Lychee": db.all["Ice Lychee"],
    "Mix Tropic": db.all["Mix Tropic"],
    "Apple Passion Fruit": db.all["Apple Passion Fruit"],
    "Mix Wild Berries Red Bull": db.all["Mix Wild Berries Red Bull"],
    "Lime Bubble Gum": db.all["Lime Bubble Gum"],
    "Rought Wine": db.all["Rought Wine"],
    "Drunk Harvest": db.all["Drunk Harvest"],
    "Fresh Truck": db.all["Fresh Truck"],
    "Count": db.all.Count
}

function count(data, id){
    br[id] = br[id] - data;
    if (br[id] < 0){
        br[id] = 0;
    }
    file.all[id] = br[id]
    fs.writeFileSync('./bd.json', JSON.stringify(file, null, 2));

    if (br[id] == 0){
        return "0. Товар полностью продан"
    }
    return br[id];
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
        if(text === 'Info' || text === '/info'){
            return bot.sendMessage(chatId, "Чё хочешь узнать?", stats);
        }
        if (text === 'Brusko'){
            buf = text;
            const brusko = {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: 'Малиновый лимонад ' + file.all["Малиновый лимонад"], callback_data: 'Малиновый лимонад'}],
                        [{text: 'Ледяная клубника с земляникой ' + file.all['Ледяная клубника с земляникой'], callback_data: 'Ледяная клубника с земляникой'}],
                        [{text: 'Энергетик с яблоком и киви ' + file.all['Энергетик с яблоком и киви'], callback_data: 'Энергетик с яблоком и киви'}],
                        [{text: 'Энергетик с манго ' + file.all['Энергетик с манго'], callback_data: 'Энергетик с манго'}],
                        [{text: 'Энергетик с вишней ' + file.all['Энергетик с вишней'], callback_data: 'Энергетик с вишней'}],
                        [{text: 'Фруктовое драже(скитлс) ' + file.all['Фруктовое драже(скитлс)'], callback_data: 'Фруктовое драже(скитлс)'}],
                    ]
                })
            }

            return bot.sendMessage(chatId, 'Brusko (30ml SALT HARD):', brusko)


        }
        if (text === 'MAD'){
            buf = text;
            const mad = {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: 'Ice Lychee ' + file.all['Ice Lychee'], callback_data: 'Ice Lychee'}],
                        [{text: 'Mix Tropic ' + file.all['Mix Tropic'], callback_data: 'Mix Tropic'}],
                        [{text: 'Apple Passion Fruit ' + file.all['Apple Passion Fruit'], callback_data: 'Apple Passion Fruit'}],
                        [{text: 'Mix Wild Berries Red Bull '  + file.all['Mix Wild Berries Red Bull'], callback_data: 'Mix Wild Berries Red Bull'}],
                        [{text: 'Lime Bubble Gum ' + file.all['Lime Bubble Gum'], callback_data: 'Lime Bubble Gum'}],
                    ]
                })
            }
            return bot.sendMessage(chatId, 'MAD (30ml SALT HARD):', mad)
        }
        if (text === 'RedNeck'){
            buf = text;
            const redneck = {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: 'Rought Wine ' + file.all['Rought Wine'], callback_data: 'Rought Wine'}],
                        [{text: 'Drunk Harvest ' + file.all['Drunk Harvest'], callback_data: 'Drunk Harvest'}],
                        [{text: 'Fresh Truck ' + file.all['Fresh Truck'], callback_data: 'Fresh Truck'}],
                    ]
                })
            }
            return bot.sendMessage(chatId, 'RedNeck (30ml SALT) - Premium:', redneck)
        }
        if (text === '1' || text === '2' || text === '3' || text === '4' || text === '5' || text === '6' || text === '0'){
            var faketext = text;
            if(parseInt(faketext) > file.all[dt]){
                faketext = file.all[dt];
                bot.sendMessage(chatId, 'Ты выбрал '+ text +'. Данного вкуса всего ' + file.all[dt] + ' банок, я автоматические подставил '+ file.all[dt]);
            }
            x = count(text, dt);
            nums = faketext;
            if(text === '0'){
                return bot.sendMessage(chatId, 'Хуёво🤬', menu)
            }
            return bot.sendMessage(chatId, 'За сколько продал?😁', ddote)
        }
        if (text === '13' || text === '14' || text === '15' || text === '16' || text === '17' || text === '18'){
            file.Count += parseInt(nums) * parseInt(text)
            fs.writeFileSync('./bd.json', JSON.stringify(file, null, 2));
            return bot.sendMessage(chatId, 'Работай лучше, щегол. Таких вкусов осталось продать ' + x + '😎', menu)

        }
        if (text === 'Общаг🤑'){
            return bot.sendMessage(chatId, 'В общаге ' + file.Count + '$')
        }
        if (text === "Наличие"){
            return bot.sendMessage(chatId, 'Что сюда вставить можно, наличие каждой банки показывается при нажатии на жижу?')
        }
        if (text === 'Выход🙈'){
            return bot.sendMessage(chatId, 'Menu', menu)
        }
        return
    })
    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if(data === Object.keys(br)[0] || data === Object.keys(br)[1] || data === Object.keys(br)[2] || data === Object.keys(br)[3] || data === Object.keys(br)[4] || data === Object.keys(br)[5] || data === Object.keys(br)[6] || data === Object.keys(br)[7] || data === Object.keys(br)[8] || data === Object.keys(br)[9] || data === Object.keys(br)[10] || data === Object.keys(br)[11] || data === Object.keys(br)[12] || data === Object.keys(br)[13]) {

            dt = data;
            bot.sendMessage(chatId, 'Сколько продал за этот раз?? ('+data+')😋', sell);
        }
    })
}

start()
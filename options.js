module.exports = {
    brusko:{
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
    },

    sell:{
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
                [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
                [{text: '0', callback_data: '0'}],
            ]
        })
    }
}
module.exports = {
    ddote:{
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: '13', callback_data: '13'}, {text: '14', callback_data: '14'}, {text: '15', callback_data: '15'}],
                [{text: '16', callback_data: '16'}, {text: '17', callback_data: '17'}, {text: '18', callback_data: '18'}],
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
/**
 * Created at 03/06/2018
 * By Adrien
 */

module.exports = {
    requestSyncMsg: function(msg) {
        /**
         * We return synchronously the message processed.
         */
        return processMsg(msg);
    },

    requestAsyncMsg: function(msg, callback) {
        /**
         * We use setTimeout in order to simulate an synchronously processing.
         */
        setTimeout(() => {
            const result = processMsg(msg);
            /**
             * We return asynchronously the message processed.
             */
            if (result instanceof Error) {
                return callback(result);
            } else {
                return callback(null, result);
            }
        }, 1000 + Math.random() * 3000);
    }
};


/**
 * Processing message
 */
function processMsg(msg) {
    switch (msg) {
        case 'error': return new Error('This is an error.');
        case 'hello':
        case 'Hello': return 'Hello there !';
        case 'ciao':
        case 'Ciao':return 'pepito';
        default:
            switch (Math.round(Math.random() * 10)) {
                case 0: return 'Check presence !';
                case 1: return 'On dit "pain au chocolat".';
                case 2: return 'Champion !';
                case 3: return 'Retourne bosser !';
                case 4: return 'Elle est où la petite Julie pendant le bonbardement ?';
                case 5: return 'Hoooooooooooooooooooooooo !';
                case 6: return 'Je crois que dans la saison 8, Winterfell et les Stark...';
                case 7: return 'De toute façon, ils ne peuvent pas faire redoubler toute une promo !';
                case 8: return 'Ca va être tout noir !';
                case 9: return 'J\'ai pas envie de te parler.';
                default: return 'Hasta la vista, Baby.';
            }
    }
}
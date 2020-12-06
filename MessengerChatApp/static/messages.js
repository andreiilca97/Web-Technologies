//const appendMessageSent = require('./script');
function formatMessage(username, text){
    return {
        username,
        text
    };
}

module.exports = formatMessage;
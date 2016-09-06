module.exports = function (bot, db, data) {

    var maxValue = 6;

    var input = data.params.join(' ').trim();

    if (input.length > 0) {
        maxValue = parseInt(input.replace(/\D/g, ""));
    }

    if (maxValue > 0 && maxValue < 99999) {
        var roll = Math.floor(Math.random() * maxValue) + 1;
        bot.sendChat('@' + data.user.username + ', you rolled a ' + roll + '!');
    }
    else {
        bot.sendChat('https://media.giphy.com/media/4R71Engp5NgHK/giphy.gif');
    }

};
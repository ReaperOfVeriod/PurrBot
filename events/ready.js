const config = require("./../config.json");
module.exports = (client, ready) => {
    
    var interval = setInterval(function () {
        const watchArray = config.game;
        var watch = watchArray[Math.floor(Math.random() * watchArray.length)];
    
        
        client.user.setActivity(watch, {type: config.activityType} );
    }, 1 * 100000);
};
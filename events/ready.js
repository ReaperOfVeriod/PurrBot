const config = require("./../config.json");
module.exports = (client, ready) => {
    client.user.setActivity(config.game, {type: config.activityType} );
};
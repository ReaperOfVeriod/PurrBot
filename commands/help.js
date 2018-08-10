const command = require("./help.json");
const config = require("./../config.json");
exports.run = (client, message, args) => {
    message.channel.send(`These commands are available:` + `\n` +
    `${config.prefix}help: ${command.help}` + `\n` +
    `${config.prefix}reload: ${command.reload}` + `\n` +
    `${config.prefix}prefix: ${command.prefix}` + `\n` +
    `${config.prefix}purr: ${command.purr}`).catch(console.error);
}
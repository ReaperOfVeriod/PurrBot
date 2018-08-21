exports.run = (client, message, args) => {
    const YTDL = require("ytdl-core");

    function play(connection,message){
        var server = servers[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0],{filter: "audioonly"}));

        server.queue.shift();
        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });
    }

    var servers = {};
    
    if (!args[0]) {
        message.channel.send("please provide a link.");
        return;
    }

    if (!message.member.voiceChannel) {
        message.channel.send("you must be in a voice channel.");
        return;
    }

    if (!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }

    var server = servers[message.guild.id];

    server.queue.push(args[0]);

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    });
};
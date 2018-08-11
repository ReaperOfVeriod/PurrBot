exports.run = (client, message, args) => {
    const path = "./images/cat/";
    const fs = require("fs");
    
    const nekoImage = fs.readdirSync(path)
  
    var neko = nekoImage[Math.floor(Math.random() * nekoImage.length)];
    var randomNeko = path + neko;
    message.channel.send({
      files: [{
        attachment: randomNeko,
        name: "neko.gif"
      }]
    });
  
  }
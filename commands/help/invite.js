const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE YOUR MOM",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY AUF(SAPPHIRE)`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('1281026224604581909')
    .setType('STREAMING')
    .setState('vOXLET - Best Bot')
    .setName('.gg/Uj86PMEcWj')
    .setDetails('I am SIGMA!')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/avatars/1281026224604581909/ec72b11633494d4df0c8770febcfd22d.png?size=2048')
    .setAssetsLargeText('vOXLET')
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login("MTI3OTUxMjk3Mjk4ODc3NjQ5OQ.GRkj7g.GGELVvXzV2PuMhmXtUPjspPUtVUZ1lm-LyfjkU")
const Discord = require("discord.js");
const clent = new Discord.Client();
const config = require("./config.json");


client.on("ready", () =>{
    console.log(`Bot iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, ${client.guids.size} servidores.`);
    client.user.setGame(`Eu estou em ${client.guids.size} servidores`);
})

client.on("guidCreate",guild =>{
    console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros`);
    client.user.setActivity(`Estou em ${client.guids.size} servidores`);
})

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message =>{


});

client.login(config.token);
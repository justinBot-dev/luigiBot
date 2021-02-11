const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () =>{
    console.log('Hail Luigi!!! >:)')
    client.user.setActivity('luigi is peace')
});

client.on("message", (m) => {
    
    if(m.content != "luigi"){
        if(!m.member.roles.cache.some(r => r.name === "luigi bypass")){
            if(m.channel.name === "speak-the-answer"){
                m.author.send('You need to hail luigi, luigi is peace. https://discord.gg/YpgXeFZGQU').catch(err => console.log(`Couldnt send message to ${m.author.username}`))
                m.delete().catch(err => console.log('Couldnt delete message'));
                m.member.kick().catch(err => console.log('Can not kick member'));
            }
        }
    }
});


client.login("Special Bot Token Here");

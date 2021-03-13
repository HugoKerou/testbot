const {MessageEmbed, MessageAttachment, MessageMentions, Emoji, MessageReaction, Message} = require("discord.js");

module.exports =  {
  name: 'hermann',
  description: 'Envoie les différents Arbres de Talents de YSG',

async execute (client, message, args)  {
      message.author.send(`**- Hey c'est toi ${message.author.toString()} le noob ?**`);
        const embed = new MessageEmbed()
          .setColor("#7a2f8f")
          .setTitle("On m'a dit que tu avais besoin d'aide pour le commandant : ```Hermann``` \nVoyons voir ce que j'ai dans mes archives :face_with_monocle: ");
      message.author.send(embed);
        
        const embed4 = new MessageEmbed()
          .setColor("#7a2f8f")
          .setDescription("**Voici donc le fameux livre que tu cherchais ! :book:\nClique sur l'émoji qui t'intéresse :**")
          .addField(":bow_and_arrow: ```: Talent OpenField Archer```\n:shield: ```: Talent Garnison```\n:crystal_ball: ```: Talent OpenField Skills```", "**-**")

  const go = await message.author.send(embed4)
      await go.react('🏹');
      await go.react('🛡️');
      await go.react('🔮');
  
  message.reply("Regarde tes dm");


  let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
  let reaction = (await go.awaitReactions(reactionFilter, { max: 1 })).first()
  
  const embed1 = new MessageEmbed()
    .setColor("#7a2f8f")
    .setTitle("Voci les duos conseillés :")
    .setImage('https://zupimages.net/up/21/10/u876.png');

      if (reaction.emoji.name === '🏹') {
        const embed7= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : OpenField Archer de ```Hermann``` ")
        .addField("Civilisations conseillées :", "```Royaume-Uni :``` +5% d'attaque d'archerie\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque\n```Corée :``` +5% de défense d'archerie\n```Empire Ottoman :``` +5% de vie d'archerie + 5% de vitesse de déplacement + 5% de dégats de compétence")
        .setImage('https://zupimages.net/up/21/10/7kzs.jpg');
          message.author.send(embed7);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🛡️') {
        const embed9= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : Garnison de ```Hermann``` ")
        .addField("Civilisation conseillées :", "```Royaume-Uni :``` +5% d'attaque d'archerie\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque\n```Corée :``` +5% de défense d'archerie\n```Empire Ottoman :``` +5% de vie d'archerie + 5% de vitesse de déplacement + 5% de dégats de compétence")
        .setImage('https://zupimages.net/up/21/10/wgdk.jpg');
          message.author.send(embed9);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🔮') {
        const embed9= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : OpenField Skills de ```Hermann``` ")
        .addField("Civilisation conseillées :", "```Royaume-Uni :``` +5% d'attaque d'archerie\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque\n```Corée :``` +5% de défense d'archerie\n```Empire Ottoman :``` +5% de vie d'archerie + 5% de vitesse de déplacement + 5% de dégats de compétence")
        .setImage('https://zupimages.net/up/21/10/d623.jpg');
          message.author.send(embed9);
          message.author.send(embed1);
      }
  }
}
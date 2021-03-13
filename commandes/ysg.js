const {MessageEmbed, MessageAttachment, MessageMentions, Emoji, MessageReaction, Message} = require("discord.js");

module.exports =  {
  name: 'ysg',
  description: 'Envoie les différents Arbres de Talents de YSG',

async execute (client, message, args)  {
      message.author.send(`**- Hey c'est toi ${message.author.toString()} le noob ?**`);
        const embed = new MessageEmbed()
          .setColor("#cc7900")
          .setTitle("On m'a dit que tu avais besoin d'aide pour le commandant : ```Yi Seong-Gye``` \nVoyons voir ce que j'ai dans mes archives :face_with_monocle: ");
      message.author.send(embed);
        
        const embed4 = new MessageEmbed()
          .setColor("#cc7900")
          .setDescription("**Voici donc le fameux livre que tu cherchais ! :book:\nClique sur l'émoji qui t'intéresse :**")
          .addField(":bow_and_arrow: ```: Talent OpenField```\n:shield: ```: Talent Garnison```", "**-**")

  const go = await message.author.send(embed4)
      await go.react('🏹');
      await go.react('🛡️');
  
  message.reply("Regarde tes dm");


  let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
  let reaction = (await go.awaitReactions(reactionFilter, { max: 1 })).first()
  
  const embed1 = new MessageEmbed()
    .setColor("#cc7900")
    .setTitle("Voci les duos conseillés :")
    .setImage('https://zupimages.net/up/21/10/4oii.png');

      if (reaction.emoji.name === '🏹') {
        const embed7= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : OpenField de ```Yi Seong-Gye``` ")
        .addField("Civilisations conseillées :", "```Royaume-Uni :``` +5% d'attaque d'archerie\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque\n```Corée :``` +5% de défense d'archerie\n```Empire Ottoman :``` +5% de vie d'archerie + 5% de vitesse de déplacement + 5% de dégats de compétence")
        .setImage('https://zupimages.net/up/21/10/e2kw.jpg');
          message.author.send(embed7);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🛡️') {
        const embed9= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : Garnison de ```Yi Seong-Gye``` ")
        .addField("Civilisation conseillées :", "```Royaume-Uni :``` +5% d'attaque d'archerie\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque\n```Corée :``` +5% de défense d'archerie\n```Empire Ottoman :``` +5% de vie d'archerie + 5% de vitesse de déplacement + 5% de dégats de compétence")
        .setImage('https://zupimages.net/up/21/10/nb50.jpg');
          message.author.send(embed9);
          message.author.send(embed1);
      }
  }
}
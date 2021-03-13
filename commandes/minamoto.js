const {MessageEmbed, MessageAttachment, MessageMentions, Emoji, MessageReaction, Message} = require("discord.js");

module.exports =  {
  name: 'minamoto',
  description: 'Envoie les différents Arbres de Talents de Minamoto',

async execute (client, message, args)  {
      message.author.send(`**- Hey c'est toi ${message.author.toString()} le noob ?**`);
        const embed = new MessageEmbed()
          .setColor("#cc7900")
          .setTitle("On m'a dit que tu avais besoin d'aide pour le commandant : ```Minamoto``` \nVoyons voir ce que j'ai dans mes archives :face_with_monocle: ");
      message.author.send(embed);
        
        const embed4 = new MessageEmbed()
          .setColor("#cc7900")
          .setDescription("**Voici donc le fameux livre que tu cherchais ! :book:\nClique sur l'émoji qui t'intéresse :**")
          .addField(":dagger: ```: Talent PVE```\n:crossed_swords: ```: Talent OpenField Classique```\n:crystal_ball: ```: Talent OpenField Skills```", "**-**");

  const go = await message.author.send(embed4)
      await go.react('🗡️');
      await go.react('⚔️');
      await go.react('🔮');
  
  message.reply("Regarde tes dm");

  let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
  let reaction = (await go.awaitReactions(reactionFilter, { max: 1 })).first()
  
  const embed1 = new MessageEmbed()
    .setColor("#cc7900")
    .setTitle("Voci les duos conseillés :")
    .setImage('https://zupimages.net/up/21/08/lv37.png');

      if (reaction.emoji.name === '🗡️') {
        const embed7= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : PVE de ```Minamoto``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% de vitesse de marche\n```Allemagne :``` +5% d'attaque cavalerie\n```Espagne :``` +5% defense  cavalerie\n```Arabie :``` +5% d'attaque cavalerie\n```Byzance :``` +5% de santé cavalerie")
        .setImage('https://zupimages.net/up/21/08/n0t3.jpg');
          message.author.send(embed7);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '⚔️') {
        const embed8= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : OpenField Classique de ```Minamoto``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% de vitesse de marche\n```Allemagne :``` +5% d'attaque cavalerie\n```Espagne :``` +5% defense  cavalerie\n```Arabie :``` +5% d'attaque cavalerie\n```Byzance :``` +5% de santé cavalerie")
        .setImage('https://zupimages.net/up/21/08/wyaw.jpg');
        message.author.send(embed8);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🔮') {
        const embed9= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : OpenField Skills de ```Minamoto``` ")
        .addField("Civilisation conseillées :", "```Rome :``` +5% de vitesse de marche\n```Allemagne :``` +5% d'attaque cavalerie\n```Espagne :``` +5% defense  cavalerie\n```Arabie :``` +5% d'attaque cavalerie\n```Byzance :``` +5% de santé cavalerie")
        .setImage('https://zupimages.net/up/21/08/tpu5.jpg');
          message.author.send(embed9);
          message.author.send(embed1);
      }
  }
}
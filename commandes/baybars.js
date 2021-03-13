const {MessageEmbed, MessageAttachment, MessageMentions, Emoji, MessageReaction, Message} = require("discord.js");

module.exports =  {
  name: 'baybars',
  description: 'Envoie les différents Arbres de Talents de Baybars',

async execute (client, message, args)  {
      message.author.send(`**- Hey c'est toi ${message.author.toString()} le noob ?**`);
        const embed = new MessageEmbed()
          .setColor("#7a2f8f")
          .setTitle("On m'a dit que tu avais besoin d'aide pour le commandant : ```Baybars``` \nVoyons voir ce que j'ai dans mes archives :face_with_monocle: ");
      message.author.send(embed);
        
        const embed4 = new MessageEmbed()
          .setColor("#7a2f8f")
          .setDescription("**Voici donc le fameux livre que tu cherchais ! :book:\nClique sur l'émoji qui t'intéresse :**")
          .addField(":horse_racing: ```: Talent OpenField Vitesse```\n:crossed_swords: ```: Talent OpenField Classique```\n:fire: ```: Talent Conquête```", "**-**");

  const go = await message.author.send(embed4)
      await go.react('🏇');
      await go.react('⚔️');
      await go.react('🔥');
  
  message.reply("Regarde tes dm");

  let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
  let reaction = (await go.awaitReactions(reactionFilter, { max: 1 })).first()
  
  const embed1 = new MessageEmbed()
    .setColor("#7a2f8f")
    .setTitle("Voci les duos conseillés :")
    .setImage('https://zupimages.net/up/21/08/ntph.png');

      if (reaction.emoji.name === '🏇') {
        const embed7= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : OpenField Vitesse de ```Baybars``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% de vitesse de marche\n```Allemagne :``` +5% d'attaque cavalerie\n```Espagne :``` +5% defense  cavalerie\n```Arabie :``` +5% d'attaque cavalerie\n```Byzance :``` +5% de santé cavalerie")
        .setImage('https://zupimages.net/up/21/08/7h9e.jpg');
          message.author.send(embed7);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '⚔️') {
        const embed8= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : OpenField Classique de ```Baybars``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% de vitesse de marche\n```Allemagne :``` +5% d'attaque cavalerie\n```Espagne :``` +5% defense  cavalerie\n```Arabie :``` +5% d'attaque cavalerie\n```Byzance :``` +5% de santé cavalerie")
        .setImage('https://zupimages.net/up/21/08/w6dq.jpg');
        message.author.send(embed8);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🔥') {
        const embed9= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : Conquête de ```Baybars``` ")
        .addField("Civilisation conseillées :", "```Rome :``` +5% de vitesse de marche\n```Allemagne :``` +5% d'attaque cavalerie\n```Espagne :``` +5% defense  cavalerie\n```Arabie :``` +5% d'attaque cavalerie\n```Byzance :``` +5% de santé cavalerie")
        .setImage('https://zupimages.net/up/21/08/3f95.png');
          message.author.send(embed9);
          message.author.send(embed1);
      }
  }
}
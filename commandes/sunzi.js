const {MessageEmbed, MessageAttachment, MessageMentions, Emoji, MessageReaction, Message} = require("discord.js");

module.exports =  {
  name: 'sunzi',
  description: 'Envoie les différents Arbres de Talents de Sunzi',

async execute (client, message, args)  {
      message.author.send(`**- Hey c'est toi ${message.author.toString()} le noob ?**`);
        const embed = new MessageEmbed()
          .setColor("#7a2f8f")
          .setTitle("On m'a dit que tu avais besoin d'aide pour le commandant : ```Sunzi``` \nVoyons voir ce que j'ai dans mes archives :face_with_monocle: ");
      message.author.send(embed);
        
        const embed4 = new MessageEmbed()
          .setColor("#7a2f8f")
          .setDescription("**Voici donc le fameux livre que tu cherchais ! :book:\nClique sur l'émoji qui t'intéresse :**")
          .addField(":shield: ```: Talent Garnison```\n:crossed_swords: ```: Talent OpenField```", "**-**");

  const go = await message.author.send(embed4)
      await go.react('🛡️');
      await go.react('⚔️');
  
  message.reply("Regarde tes dm");

  let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
  let reaction = (await go.awaitReactions(reactionFilter, { max: 1 })).first()
  
  const embed1 = new MessageEmbed()
    .setColor("#7a2f8f")
    .setTitle("Voci les duos conseillés :")
    .setImage('https://zupimages.net/up/21/08/bcqj.png');

      if (reaction.emoji.name === '🛡️') {
        const embed7= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : Garnison de ```Sunzi``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% de defense infanterie & +5% de vitesse de marche\n```France :``` +3% de santé\n```Chine :``` +3% de defense\n```Japon :``` +3% d'attaque")
        .setImage('https://zupimages.net/up/21/08/ofdo.jpg');
          message.author.send(embed7);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '⚔️') {
        const embed8= new MessageEmbed()
        .setColor("#7a2f8f")
        .setTitle("Voici l'arbre de Talent : OpenField de ```Sunzi``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% de defense infanterie & +5% de vitesse de marche\n```France :``` +3% de santé\n```Chine :``` +3% de defense\n```Japon :``` +3% d'attaque")
        .setImage('https://zupimages.net/up/21/08/t00y.jpg');
        message.author.send(embed8);
          message.author.send(embed1);
      } 
  }
}
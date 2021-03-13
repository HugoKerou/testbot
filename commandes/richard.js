const {MessageEmbed, MessageAttachment, MessageMentions, Emoji, MessageReaction, Message} = require("discord.js");

module.exports =  {
  name: 'richard',
  description: 'Envoie les différents Arbres de Talents de Richard',

async execute (client, message, args)  {
      message.author.send(`**- Hey c'est toi ${message.author.toString()} le noob ?**`);
        const embed = new MessageEmbed()
          .setColor("#cc7900")
          .setTitle("On m'a dit que tu avais besoin d'aide pour le commandant : ```Richard``` \nVoyons voir ce que j'ai dans mes archives :face_with_monocle: ");
      message.author.send(embed);
        
        const embed4 = new MessageEmbed()
          .setColor("#cc7900")
          .setDescription("**Voici donc le fameux livre que tu cherchais ! :book:\nClique sur l'émoji qui t'intéresse :**")
          .addField(":horse: ```: Talent Anti-Cavalerie```\n:triangular_flag_on_post: ```: Talent Défense de Flag```\n:shield: ```: Talent Immortel```", "**-**")
          .setThumbnail('https://zupimages.net/up/21/08/dvb9.jpg');

  const go = await message.author.send(embed4)
      await go.react('🐴');
      await go.react('🚩');
      await go.react('🛡️');
  
  message.reply("Regarde tes dm");


  let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
  let reaction = (await go.awaitReactions(reactionFilter, { max: 1 })).first()
  
  const embed1 = new MessageEmbed()
    .setColor("#cc7900")
    .setTitle("Voci les duos conseillés :")
    .setImage('https://zupimages.net/up/21/08/b1y8.png');

      if (reaction.emoji.name === '🐴') {
        const embed7= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : Anti-Cavalerie de ```Richard``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% défense de l'infanterie & +5% de vitesse de marche\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque")
        .setImage('https://zupimages.net/up/21/08/tutf.jpg');
          message.author.send(embed7);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🚩') {
        const embed8= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : Défense de Flag de ```Richard``` ")
        .addField("Civilisations conseillées :", "```Rome :``` +5% défense de l'infanterie & +5% de vitesse de marche\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque")
        .setImage('https://zupimages.net/up/21/08/m0zi.jpg');
        message.author.send(embed8);
          message.author.send(embed1);
      } else if (reaction.emoji.name === '🛡️') {
        const embed9= new MessageEmbed()
        .setColor("#cc7900")
        .setTitle("Voici l'arbre de Talent : Immortelle de ```Richard``` ")
        .addField("Civilisation conseillées :", "```Rome :``` +5% défense de l'infanterie & +5% de vitesse de marche\n```France :``` +3% de vie\n```Chine :``` +3% de défense\n```Japon :``` +3% d'attaque")
        .setImage('https://zupimages.net/up/21/08/o8d1.jpg');
          message.author.send(embed9);
          message.author.send(embed1);
      }
  }
}
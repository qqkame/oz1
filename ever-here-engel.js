const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  if (!args[0]) {  
  const narcos = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}ever-here-engel aç/kapat**`)
  .setColor("RED")
  .setFooter("Narcos Code")
  return message.channel.send(narcos)
  }
  if (args[0] == 'aç') {  
  db.set(`hereengel_${message.guild.id}`, 'acik')
  const narcos = new Discord.MessageEmbed() 
  .addField("İşlem Başarılı",`Ever-Here Engel Başarılı Bir Şekilde Aktif Edildi`)
  .setColor("GREEN")
  .setFooter("Narcos Code")
  return message.channel.send(narcos)
  }
  if (args[0] == 'kapat') {
  db.set(`hereengel_${message.guild.id}`, 'kapali')
  const narcos = new Discord.MessageEmbed() 
  .addField("İşlem Başarılı",`Ever-Here Engel Başarılı Bir Şekilde Kapatıldı`)
  .setColor("GREEN")
  .setFooter("Narcos Code")
  return message.channel.send(narcos)
  } 
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ever-here-engel','everhere-engel','ever-hereengel'],
  permLevel: 3
};

exports.help = {
  name: 'everhereengel',
  description: '@everyone ve @here Etiketlerini Engeller',
  usage: 'everhereengel'
};
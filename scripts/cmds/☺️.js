 module.exports = {
 config: {
	 name: "🥰",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "☺️") {
 return message.reply({
 body: "     「︵❝།།🌻-\_________\n❥◎⃝ -𝐬𝐢𝐫༊!◎⃝\n༅༎আপনার༅༎নিখোঁজ༎ডায়েরীর༅\n⑅⃝»❥শেষ༅༎পৃষ্ঠায়✿࿐°\nღ﹏আমি তিয়াশ༅༎ একাংশ༅༎কাব‍্য༅\n_____ღ᭄︵❝།།💚\n🫠🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙___❼❷⓿⸙𓅓 ;* 3:) ;P ㅤ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/5enmTAK.mp4")
 });
 }
 }
}

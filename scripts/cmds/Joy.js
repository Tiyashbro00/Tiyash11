 module.exports = {
 config: {
	 name: "@❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙___❼❷⓿⸙𓅓 ;* 3:) ;P",
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
 if (event.body && event.body.toLowerCase() === "@❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙___❼❷⓿⸙𓅓 ;* 3:) ;P") {
 return message.reply({
 body: "তিয়াশ বস কাজে বিজি আছেন","//

____❝নু'নুতে তিল নিয়েও আমি তিয়াশ এখনো সিঙ্গেল-!!😒💦💔🥺✍️"
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/XXANp1W.jpeg")
 });
 }
 }
}

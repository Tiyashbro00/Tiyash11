 module.exports = {
 config: {
	 name: "😥",
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
 if (event.body && event.body.toLowerCase() === "😥") {
 return message.reply({
 body: " 「 ࿐❛❛আঁগঁলে্ঁ ❛রাঁখঁতে্ঁ❜❜\n❛❛শিখো্ঁ ❛প্রি্ঁয়্ঁ❜❜-🥀😍࿐\n࿐❛❛😌কাঁরঁন্ঁ❜❛হাঁরিঁয়েঁ ❛ফেঁলাঁ ❛সঁহঁজঁ❜❜🥀😇࿐\n࿐❛❛😤কিঁন্তু্ঁ ❛ ফিঁরেঁ পাঁওঁয়াঁ ❜❜\n❛❛খুঁবঁইঁ ❛ কঁঠিঁন্ঁ❜❜🥀😘\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙___❼❷⓿⸙𓅓 ;* 3:) ;P ㅤ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/UWtND17.mp4")
 });
 }
 }
}

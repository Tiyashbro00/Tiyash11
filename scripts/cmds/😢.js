 module.exports = {
 config: {
	 name: "😢",
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
 if (event.body && event.body.toLowerCase() === "😢") {
 return message.reply({
 body: "「❥━ღ༎💚🌺\nস্বপ্ন তাকে নিয়েই দেখা উচিতヅ🖤༊-যে শুধু স্বপ্ন!!\nদেখাবে না༺স্বপ্নগুলো বাস্তবও করবেll༻\n༊━ღ━༎🌼🦋\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n❨𝐂𝐄𝐎❩তি্ঁয়া্ঁশ্ঁ❩⸙___❼❷⓿⸙𓅓 ;* 3:) ;P ㅤ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/m5dklA8.mp4")
 });
 }
 }
}

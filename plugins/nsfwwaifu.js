let fetch = require("node-fetch");
let handler = async (m, { conn }) => {
  //if (!db.data.settings.nsfw) throw "Mode NSFW tidak aktif";
  let res = await fetch(global.API("https://api.waifu.pics/", "/nsfw/waifu"));
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.url)
    await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Jangan sagne bwank, mau lagi?=limit', watermark, 'Get Again -limit', '/nsfwwaifu', m);
    //conn.sendFile(
      //m.chat,
      //json.url,
      //"bokepkartun",
      //"sange kok sama kartun, stress...",
      //m
    //);
  else throw json;
};
handler.help = ["nsfwwaifu"];
handler.tags = ["fun", "anime"];

handler.command = /^(nsfwwaifu|waifunsfw)$/i;

handler.limit = true;

module.exports = handler;

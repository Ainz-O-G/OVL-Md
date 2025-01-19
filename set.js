const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PREFIXE: process.env.PREFIXE || "®",
  NOM_OWNER: process.env.NOM_OWNER || "jordan",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "24107164732",
  MODE: process.env.MODE || "private",
  MENU: process.env.MENU || "https://files.catbox.moe/k5nseu.jpg",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_ECR7uQTw_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "Wa-sticker",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "jordan_ff",
  DATABASE: process.env.DATABASE || "postgresql://postgres.qnjvgxwyncnsbpfxwrbq:ovlmdmdpasse@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
  ANTIDELETE: process.env.ANTIDELETE || "non",
  RENDER_API_KEY: process.env.RENDER_API_KEY,
  SERVICE_ID: process.env.SERVICE_ID
};

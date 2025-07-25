import BotController from './controllers/BotController.js';
import { loadPrivateKeys } from './models/Utils.js';
import { banner } from './views/Banner.js';

async function main() {
  banner();
  const keys = loadPrivateKeys();
  const bot = new BotController(keys);
  await bot.startLoop();
}

main();

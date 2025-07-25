import WalletManager from '../models/WalletManager.js';
import LiquidityManager from '../models/LiquidityManager.js';
import SwapManager from '../models/SwapManager.js';
import Logger from '../views/Logger.js';

export default class BotController {
  constructor(privateKeys) {
    this.privateKeys = privateKeys;
  }

  async startLoop() {
    while (true) {
      for (const key of this.privateKeys) {
        try {
          const walletManager = new WalletManager(key);
          await walletManager.init();

          const liquidity = new LiquidityManager(walletManager);
          await liquidity.addInitialLiquidity();

          const swap = new SwapManager(walletManager);
          for (let i = 0; i < 10; i++) {
            await swap.performSwap();
          }

          await liquidity.removeLiquidity();
          Logger.success(`✅ Completed cycle for ${walletManager.address}`);
        } catch (err) {
          Logger.error(`Wallet failed: ${err.message}`);
        }
      }

      Logger.info('Sleeping for 24 hours before next loop...');
      await new Promise(r => setTimeout(r, 86400000));
    }
  }
}

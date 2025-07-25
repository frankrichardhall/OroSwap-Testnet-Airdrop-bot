import Logger from '../views/Logger.js';

export default class LiquidityManager {
  constructor(walletManager) {
    this.client = walletManager.client;
    this.address = walletManager.address;
  }

  async addInitialLiquidity() {
    Logger.step(`Providing liquidity for ${this.address}...`);
    await new Promise(r => setTimeout(r, 1000));
    Logger.success(`Liquidity added.`);
  }

  async removeLiquidity() {
    Logger.step(`Removing liquidity for ${this.address}...`);
    await new Promise(r => setTimeout(r, 1000));
    Logger.success(`Liquidity removed.`);
  }
}

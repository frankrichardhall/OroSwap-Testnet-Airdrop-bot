import { DirectSecp256k1HdWallet, DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { GAS_PRICE, RPC_URL } from './Config.js';

export default class WalletManager {
  constructor(privateKey) {
    this.privateKey = privateKey;
  }

  async init() {
    const isMnemonic = this.privateKey.trim().split(' ').length > 10;
    this.wallet = isMnemonic
      ? await DirectSecp256k1HdWallet.fromMnemonic(this.privateKey, { prefix: 'zig' })
      : await DirectSecp256k1Wallet.fromKey(Buffer.from(this.privateKey.replace(/^0x/, ''), 'hex'), 'zig');

    const [account] = await this.wallet.getAccounts();
    this.address = account.address;

    this.client = await SigningCosmWasmClient.connectWithSigner(RPC_URL, this.wallet, {
      gasPrice: GAS_PRICE,
    });
  }
}

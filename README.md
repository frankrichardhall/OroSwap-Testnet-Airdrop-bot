# OroSwap Testnet Airdrop bot
An automated CLI bot designed for interacting with OroSwap on the Zig Testnet.
This bot performs regular swap actions on-chain to help qualify for potential airdrop rewards in future mainnet launches or retroactive campaigns.

## Requirements

- Node.js
- Private keys for the wallets you intend to use (stored in `privateKeys.json`).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/frankrichardhall/OroSwap-Testnet-Airdrop-bot.git
   cd OroSwap-Testnet-Airdrop-bot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create `privateKeys.json`**:
   Create a file named `privateKeys.json` in the root directory with the following format:

   ```json
   [
     "your_private_key_1",
     "your_private_key_2"
   ]
   ```

4. **Run the Bot**:

   ```bash
   npm start
   ```

## Usage

- Use `npm start` to check the menu options available.
- Choose the appropriate command based on the network you want to use.
- The bot will automatically execute the transactions, handling any errors and retrying as needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
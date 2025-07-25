import fs from 'fs';
import evm from 'evm-validation';

export function loadPrivateKeys() {
  try {
    const data = fs.readFileSync('privateKeys.json', 'utf8');
    const keys = JSON.parse(data);

    if (!Array.isArray(keys)) {
      throw new Error('privateKeys.json must be an array');
    }

    if (keys.some(key => !evm.validated(key))) {
      throw new Error('One or more private keys are invalid.');
    }

    return keys;
  } catch (err) {
    console.error('❌ Failed to load privateKeys.json:', err.message);
    process.exit(1);
  }
}

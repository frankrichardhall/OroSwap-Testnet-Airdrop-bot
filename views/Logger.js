const color = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

export default {
  info: (msg) => console.log(`${color.yellow}[INFO] ${msg}${color.reset}`),
  step: (msg) => console.log(`${color.green}[STEP] ${msg}${color.reset}`),
  success: (msg) => console.log(`${color.green}[✓] ${msg}${color.reset}`),
  error: (msg) => console.log(`${color.red}[ERROR] ${msg}${color.reset}`)
};

import { createWriteStream } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
    //const filePath = './src/assets/info.txt'
    const filePath = path.join(__dirname, 'assets/big.file')
    const config = {
        encoding: 'utf8',
        flag: 'w'
    };
    const outputStream = createWriteStream(filePath, config);
    for (let i = 0; i <= 1e6; i++) {
        outputStream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
    }    
}
main()
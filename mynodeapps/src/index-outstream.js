import { createWriteStream } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
    //const filePath = './src/assets/info.txt'
    const filePath = path.join(__dirname, 'assets/grains.txt')
    const config = {
        encoding: 'utf8',
        flag: 'w'
    };
    const outputStream = createWriteStream(filePath, config);
    //data to be written
    const grains = ['wheat', 'rice', 'oats'];

    grains.forEach(grain => {
        outputStream.write(grain + " ");
        console.log("Wrote: %s", grain);
    });
    
    outputStream.close();
    
    outputStream.on('close', function () {
        console.log('file has been closed ')
    })
}
main()
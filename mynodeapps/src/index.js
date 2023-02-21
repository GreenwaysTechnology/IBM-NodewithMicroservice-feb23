import { createWriteStream, createReadStream } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
    const inputfileName = path.join(__dirname, 'assets/big.file');
    const outputfileName = path.join(__dirname, 'assets/bigcopy.file');
    const config = {
        encoding: 'utf8',
    };
    const readStream = createReadStream(inputfileName, config);
    const writeStream = createWriteStream(outputfileName, config);
    //back-pressure using "pipe method"
    readStream.pipe(writeStream);
   
}
main()
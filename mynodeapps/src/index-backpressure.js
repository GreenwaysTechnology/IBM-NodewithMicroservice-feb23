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

    readStream.on('data', function (chunk) {
        console.log(`Received ${chunk.length} bytes of data.`);
        let buffer_good = writeStream.write(chunk);
        //handling backpressure: close the inputstream if buffer is full
        if (!buffer_good) readStream.pause();
    });
    writeStream.on('drain', function () {
        console.log('buffer drained!');
        //if buffer is empty starts reading
        readStream.resume();
    });
    readStream.on('end', function () {
        //console.log(data);
    });
    
    readStream.on('error', function (err) {
        console.log(err.stack);
    });
}
main()
import { createReadStream } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
    //const filePath = './src/assets/info.txt'
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    const inputStream = createReadStream(filePath, options)
    //attach events
    let data = ''
    inputStream.on('data', chunk => {
        data += chunk
    })
    inputStream.on('end', () => {
        console.log('end event is called')
        console.log(data)
    })
    inputStream.on('close', () => {
        console.log('close event is called')
    })
    inputStream.on('error', (err) => {
        console.log('error event', err)
    })
}
main()
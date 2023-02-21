import { readFile } from 'node:fs'
import  path  from 'node:path'
//only for es 6 module pattern
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
    //const filePath = './src/assets/info.txt'
    const filePath = path.join(__dirname,'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    readFile(filePath, options, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
}
main()
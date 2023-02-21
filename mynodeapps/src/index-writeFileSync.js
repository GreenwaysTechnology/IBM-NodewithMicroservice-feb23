import { writeFileSync } from 'node:fs'

function blockMe(message) {
    console.log(message)
}

function main() {
    const filePath = './src/assets/into-copy-1.txt'
    const options = {
        encoding: 'UTF-8'
    }
    const data = 'How are you?'
    blockMe('start')
    writeFileSync(filePath, data, options)
    blockMe('end')
}
main()
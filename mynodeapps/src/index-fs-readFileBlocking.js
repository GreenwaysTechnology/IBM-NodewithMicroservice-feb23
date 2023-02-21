import { readFileSync } from 'node:fs'

function blockMe(message) {
    console.log(message)
}

function main() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    blockMe('start')
    //blocking api which blocks the current thread and move on.
    const data = readFileSync(filePath, options)
    console.log(data)
    blockMe('end')
}
main()
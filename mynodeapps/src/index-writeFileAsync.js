import { writeFile } from 'node:fs'

function blockMe(message) {
    console.log(message)
}

function main() {
    const filePath = './src/assets/into-copy.txt'
    const options = {
        encoding: 'UTF-8'
    }
    const data = 'How are you?'
    blockMe('start')
    writeFile(filePath, data, options, err => {
        if (err) {
            console.log(err)
        }
        console.log(`${data.length} Bytes written`)
    })
    blockMe('end')
}
main()
//get information about operating system
import  os  from 'node:os'
console.log(`Arch ${os.arch()}`)
console.log(os.cpus())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.totalmem())
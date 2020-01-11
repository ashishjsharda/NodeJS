const os=require('os')
console.log(os.arch())
//Information about logical CPU core
console.log(os.cpus())
//Amount of free memory available
console.log(os.freemem())
//Hostname
console.log(os.hostname())
//Home Dir
console.log(os.homedir())
//Identiy Platform
console.log(os.platform())
//Identify Signals
console.log(os.constants.signals)

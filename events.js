var events=require('events');
var eventEmitter=new events.EventEmitter();
var myeventHandler=function(){
    console.log('scream');
}
eventEmitter.on('Scream',myeventHandler);
eventEmitter.emit('Scream');

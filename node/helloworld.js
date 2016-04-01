/**
 * Created by cljin on 2016/3/28.
 */
var fs=require('fs');
fs.readFile('input', function (err,data) {
    if(err)return console.log(err.toString());
    console.log(data.toString());
})


var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('e', function () {
    console.log('事件e触发');
});

function a(){
    eventEmitter.emit('e')
}
a();
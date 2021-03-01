 var buff=new Buffer(256)
var len=buff.write("life is way of see the world")
console.log(len);
buf = new Buffer(26);
//buf.toString(encoding,stsrt,end)
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',3,5));   // outputs: abcde
console.log( buf.toString('utf8',9,15));    // outputs: abcde
console.log( buf.toString(undefined,0,5));// defaultly it take utf8 so output is abcde
// the buffer is converted into the jason
// this method is used to letter into unicode value
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
for(i in json){
    console.log(json[i]);

}
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());
var buffer1 = new Buffer('ABCDe');
var buffer2 = new Buffer('ABCDE');
var result = buffer1.compare(buffer2);
console.log(result);// it return -1 if it is case sensitive it return 1

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}
// this is copy is used to copy one buffer into another buffer
var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,12);
console.log("buffer2 content: " + buffer2.toString());

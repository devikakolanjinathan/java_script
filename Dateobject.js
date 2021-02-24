var d=new Date();// d variable show current date and time
var d = new Date(2018, 11, 24, 10, 33, 30, 0);//it return day mon date year hour mintues seconds millisecondz
var d = new Date(2018, 11, 24, 10, 33, 30);//same as above omit miliseconds
var d = new Date(2018, 11, 24);//retrn only year month date
var d = new Date(99, 11, 24);// pass parameter two digit number it consider as century
var d = new Date(0);//pass millisecond only which year millisecond start is 1970
var d = new Date("2015-03-25");//it is iso standard format
var d = new Date("2015-03-25T12:00:00Z");//T is used to separate the date and time and Z denote UTC
var d = new Date("03/25/2015");//it is short time medhod
var d = new Date("Mar 25 2015");// it is long time method
var msec = Date.parse("March 21, 2012");//it convert yaer month date into millisec
var d = new Date(msec);//it conver millisec into date
//dateoject.getDay,getFullyear,getDtae,getTime,getMonth,getSeconds,getMillisecond,getMinutes,getHour
var d=new Date();       
console.log(d.getDay());// return 3
//set method as same as get method set particular data
var d1=new Date();
d1.setFullYear(2020)
console.log(d1);// it retrn setting year
d.setDate(d.getDate() + 50);// set date are add 50 in get date
console.log(d);
// check the given day is today
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);

var s="jack";
var l=s.length;//its is built-in property used to find length;
var s1="hai\"how are you\"";///"it is used to escape cahracter.
var s2=new String("jack");//it is a string object
//if we campare value of string and object it return ture
console.log(s==s2)//return true
//but string and object are different datatypes use === operatot for type checking return false
console.log(s===s2)//return false
//indexOf() it is used  to find the first occurence of string
var s3="wow! world is so beautiful ,hello world"
var inpos=s3.indexOf("world");//retrn 5
//lastIndexOf() it is used to find last ocurence of string
var la=s3.lastIndexOf("world");//return 34
var ser=s3.search("world");// it is used search the elements return 5
//slice is used to extract a specific string in strings with start and end position
var s4="sai,priya,anu,hari,mani";
var res=s4.slice(4,9);//it print priya
//sbstring is similar to slice
var res1=s4.substring(4,9);//it print priya if passes the single parameter pass remain variable will print
//substr is similar to zsubstr
var res2=s4.substr(10);//return an,har,mani
var res3=s3.replace("wow","Aww");//it replace wow to Aww
var s5= "hello   world";
var t=s5.trim();// it remove space
var t1=s.charAt(2);//return c;
var t2=s.charCodeAt(0);//return unicode of letter it print 106






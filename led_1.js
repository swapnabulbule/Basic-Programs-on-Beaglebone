re('bonescript');
var led = ["USR0","USR1","USR2","USR3"];

b.pinMode(led[0], 'out');
b.pinMode(led[1], 'out');
b.pinMode(led[2], 'out');
b.pinMode(led[3], 'out');



fun1=function() {

 b.digitalWrite(led[0],0);
 b.digitalWrite(led[1],1);
 setTimeout(fun2,1000);
};

fun4=function() {
 b.digitalWrite(led[3],0);
 b.digitalWrite(led[0],1);
 setTimeout(fun1,1000);
};

setTimeout(fun4,1000);

fun2=function() {
 b.digitalWrite(led[1],0);
 b.digitalWrite(led[2],1);
 setTimeout(fun3,1000);

};
fun3=function() {
 b.digitalWrite(led[2],0);
 b.digitalWrite(led[3],1);
 setTimeout(fun4,1000);
};

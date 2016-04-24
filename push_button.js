var b = require('bonescript');
b.pinMode('P8_16', b.INPUT);
b.pinMode('P8_7', b.OUTPUT);
setInterval(check,100);

function check(){
b.digitalRead('P8_16', checkButton);
}

function checkButton(x) {
  if(x.value == 1){
    b.digitalWrite('P8_7', b.HIGH);
    console.log("Button Pressd");
  }
  else{
    b.digitalWrite('P8_7', b.LOW);
  }
}


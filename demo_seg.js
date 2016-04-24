var b = require("bonescript");

//var empty = "0000000";
var number0 = "1111110";
var number1 = "0110000";
var number2 = "1101101";
var number3 = "1111001";
var number4 = "0110011";
var number5 = "1011011";
var number6 = "1011111";
var number7 = "1110000";
var number8 = "1111111";
var number9 = "1110011";

var segA = 'P8_9'; //#pin of beagle board
var segB = 'P8_7'; //#pin of beagle board
var segC = 'P8_8'; //#pin of beagle board
var segD = 'P8_12'; //#pin of beagle board
var segE = 'P8_14'; //#pin of beagle board
var segF = 'P8_11'; //#pin of beagle board
var segG = 'P8_13'; //#pin of beagle board

b.pinMode(segA, b.OUTPUT);
b.pinMode(segB, b.OUTPUT);
b.pinMode(segC, b.OUTPUT);
b.pinMode(segD, b.OUTPUT);
b.pinMode(segE, b.OUTPUT);
b.pinMode(segF, b.OUTPUT);
b.pinMode(segG, b.OUTPUT);

var numbers = function(pos){
    b.digitalWrite(segA, pos[0]);
    b.digitalWrite(segB, pos[1]);
    b.digitalWrite(segC, pos[2]);
    b.digitalWrite(segD, pos[3]);
    b.digitalWrite(segE, pos[4]);
    b.digitalWrite(segF, pos[5]);
    b.digitalWrite(segG, pos[6]);
}

var state = 0;

var stateMachine = function(){
    switch(state){
        case 0: 
            numbers(number0);
            break;
        case 1: 
            numbers(number1);
            break;
        case 2: 
            numbers(number2);
            break;
        case 3: 
            numbers(number3);
            break;
        case 4: 
            numbers(number4);
            break;
        case 5: 
            numbers(number5);
            break;
        case 6: 
            numbers(number6);
            break;
        case 7: 
            numbers(number7);
            break;
        case 8: 
            numbers(number8);
            break;
        case 9: 
            numbers(number9);
            break;
            
        default:
                state = -1;
            break;
    }
    
    state++;

}

setInterval(stateMachine, 1000 );


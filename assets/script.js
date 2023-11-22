let number=document.getElementsByClassName ("btn");
let number7=number[0];
let number8=number[1];
let number9=number[2];
let number0=number[3];
let number4=number[4];
let number5=number[5];
let number6=number[6];
let cls=number[7];
let number1=number[8];
let number2=number[9];
let number3=number[10];
let screen=document.getElementById ("screen");
let egal=number[11];
let plus=number[12];
let minus=number[13];
let fois=number[14];
let dision=number[15];

 number7.addEventListener("click", function (){
    screen.innerText=7;
})

number8.addEventListener("click", function (){
    screen.innerText=8;
})

number9.addEventListener("click", function (){
    screen.innerText=9
})

number6.addEventListener("click", function (){
    screen.innerText=6
})

number5.addEventListener("click", function (){
    screen.innerText=5
})
number4.addEventListener("click", function (){
    screen.innerText=4
})

number3.addEventListener("click", function (){
    screen.innerText=3
})
number2.addEventListener("click", function (){
    screen.innerText=2
})
number1.addEventListener("click", function (){
    screen.innerText=1
})
number0.addEventListener("click", function (){
    screen.innerText=0
})

/*function affichageChiffre (number){
    screen.innerText+=number;
    let number7=7;
    let number8=8;
    let number9=9;
    let number0=0;
    let number4=4;
    let number5=5;
    let number6=6;
    //let cls="clear";
    let number1=1;
    let number2=2;
    let number3=3;
    /*
    let egal="=";
    let plus="+";
    let minus="-";
    let fois="x";
    let dision="/";
}
*/

/*for(let i=0; i<10; i++){
    number[i].addEventListener("click",function(){
        screen.innerText+=i;
    }
    )}*/


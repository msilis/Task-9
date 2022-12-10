//Countdown from 20
console.log('Countdown from 20.')
for (i = 20; i >=0; i--){
    console.log(i);
}

//Display even numbers between 1 and 20

console.log('Print even numbers.')
for (i =1; i <=20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//Print stars

console.log('Print some asterisks')
let string = ''
for (i = 1; i<=5; i++){
    console.log(string += '*')
}
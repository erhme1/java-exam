//let favColors = ["black", "white", "gray", "red", "blue"];
//favColors[2] = "orange";
//console.log(favColors);
//2.
//let lvlComp = ["true", "false", "false", "true"];
//lvlComp.push(true);
//console.log(lvlComp);
//3
//let destinations = ["korea", "america", "australia", "china"];
//destinations.shift();
//console.log(destinations);
//destinations.unshift("new york");
//console.log(destinations);
//4.
//let ages = [18, 21, 22, 20, 23, 36, 79];
//for(let i = 0; i < ages.length; i++){
//    console.log(ages[i] + 5);           
//}
//5.
let numbers = [23, 26, 27, 25, 28, 41, 84, 18, 21, 22, 20, 23, 36, 79, 89];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
//5.1
let tomToo = numbers[0];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > tomToo) {
        tomToo = numbers[i];
    }
}
console.log(tomToo);

let jijigToo = numbers[0];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < jijigToo) {
        jijigToo = numbers[i];
    }
}
console.log(jijigToo);
numbers.unshift(1);
numbers.push(3);
console.log(numbers)
let sondgoi = 0,
tegsh = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        tegsh++;
    }else {
        sondgoi++;
    }
}
console.log(tegsh, sondgoi);
const num1 = 15;
if(num1 % 3 == 0 && num1 % 5 == 0){
    console.log("devided by both")
}else if(num1 % 5 == 0){
    console.log("divided by 5")
}else if(num1 % 3 == 0){
    console.log("divided by 3")
}
//1.
let a = 936
let b = 12
let c = 9
if(a / b / 9){
    console.log(a / b / 9)
}
//.3
let month =  "October";
if ((month = "January")){
    console.log(3, 31);
}else if((month = "February")){
    console.log(3, 28);
}else if ((month = "March")){
    console.log(3, 30);
}else if((month = "April")){
    console.log(3, 31);
}else if((month = "May")){
    console.log(3, 30);
}else if((month = "June")){
    console.log(3, 30);
}else if((month = "July")){
    console.log(3, 31);
}else if((month = "August")){
    console.log(3, 30);
}else if((month = "September")){
    console.log(3, 31);
}else if((month = "October")){
    console.log(3, 30);
}else if((month = "Nobember")){
    console.log(3, 30);
}else if((month = "December")){
    console.log(3, 31);
}
//2.
const score = 100;
if(score <= 60){
    console.log(2, "you got F")
}else if(score <= 80){
    console.log(2, "you got D")
}else if(score >= 80){
    console.log(2, "You Got C")
}
//4.
let too = 2
if(too % 2 == 0){
    console.log(4, "tegsh")
}else{
    console.log(4, "sondgoi")
}
//5.
const eyregsurug = 1
if(eyregsurug > -1){
    console.log("eyreg")
}else{
    console.log("surug")
}
//6.
let too1 = 82;
let too2 = 82;
let too3 = 95;
let too4 = 20;
let sum = 0
if(too1 >= 80){
    sum += too1;
}if (too2 >= 80){
    sum += too3;
}if(too4 >= 80){
    sum += too4;
}if(too3 >= 80){
    sum += too3;
}
console.log("6)", sum);
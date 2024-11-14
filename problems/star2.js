console.log("2------------");
const n = 5;
let star = "";
for(let k = 0; k < n; k++){
    let i = 0;
        while(i < k + 1) {
            star = star + "* ";
            i++;
        }
        star = star + "\n";
}

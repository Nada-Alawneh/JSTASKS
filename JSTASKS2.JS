// function 1:
function reverse (){
    let number= prompt("plz,insert 5 digit numbers");
    for(let i = number.length - 1; i >= 0; i--){
    console.log(number[i]);
    }
}reverse();

// function 2:
for(let j = 0; j<= 15 ; j++ ){
    if(j % 2 == 0){
        console.log(j + " is even");
    }

    else{
        console.log(j + " is odd");
    }
}

// function 3:
let num = prompt("Enter a number: (6 digits)"); 
let result = ""; 

for (let i = 0; i < num.length; i++) {
    
    result = result + num[i]; 
    
    
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
        result = result + "-"; 
    }   
}
console.log(result);


// function 4:
function Agechecker(){
    let age = prompt("plz,enter your age : ");
    if(age >= 18){
        console.log("The user is Adult");
    }
    else {
        console.log("The user is Minor");
    }
}Agechecker();
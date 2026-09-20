// Part 1 — Customer Information:
let name = prompt("Plz,Enter your name:");
let age = prompt("Plz,Enter your age:");
let gender = prompt("Plz,Enter your gender (Female/Male):");

let message;

if (gender == "male") {
  message = "Welcome Mr. " +name;
} else if (gender == "female") {
  message = "Welcome Ms. " +name;
} else {
  message = "Welcome "+name;
}
console.log(message);


// // Part 2 — Check Customer Eligibility
prompt("Now, we need to Check Customer Eligibility");
if(age<16){
    console.log("You are not eligible to place an order");
}
else if(age>=16){
    console.log("Continue with the order");
}


// Part 3 — Choose an Order
let orderStatus;
let order = prompt("Plz, choose one of the following :(Burger,Shawerma,Zinger)");
if (order === "burger" || order === "shawerma" || order === "zinger"){
    orderStatus = "valid";
    console.log("Your order is being prepared...");
}
else{
    orderStatus = "invalid";
    console.log("Invalid order. Please try again"); 
}

// Part 4 — Logical Operators
if (age >=18 && orderStatus=="valid"){
console.log("Order confirmed");
}
else if(age<18 || orderStatus =="invalid"){
console.log("Order requires verification");
}

//  customer's information:
console.log("customer's information: " + name + " " + age + " " + gender);

//  final order summary 
document.write("Customer Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("Gender: " + gender + "<br>");
document.write("Order: " + order + "<br>");
document.write("Order Status: " + orderStatus + "<br>");






// // Part 1 — Customer Information:
// let name = prompt("Plz,Enter your name:");
// let age = prompt("Plz,Enter your age:");
// let gender = prompt("Plz,Enter your gender (Female/Male):");

// let message;

// if (gender == "male") {
//   message = "Welcome Mr. " +name;
// } else if (gender == "female") {
//   message = "Welcome Ms. " +name;
// } else {
//   message = "Welcome "+name;
// }
// console.log(message);


// // // Part 2 — Check Customer Eligibility

// if(age<16){
//     console.log("You are not eligible to place an order");
// }
// else if(age>=16){
//     console.log("Continue with the order");
// }


// // Part 3 — Choose an Order
// let orderStatus;
// let order = prompt("Plz, choose one of the following :(Burger,Shawerma,Zinger)");
// if (order === "burger" || order === "shawerma" || order === "zinger"){
//     orderStatus = "valid";
//     console.log("Your order is being prepared...");
// }
// else{
//     orderStatus = "invalid";
//     console.log("Invalid order. Please try again"); 
// }

// // Part 4 — Logical Operators
// if (age >=18 && orderStatus=="valid"){
// console.log("Order confirmed");
// }
// else if(age<18 || orderStatus =="invalid"){
// console.log("Order requires verification");
// }

// //  customer's information:
// console.log("customer's information: " + name + " " + age + " " + gender);

// //  final order summary 
// document.write("Customer Name: " + name + "<br>");
// document.write("Age: " + age + "<br>");
// document.write("Gender: " + gender + "<br>");
// document.write("Order: " + order + "<br>");
// document.write("Order Status: " + orderStatus + "<br>");





// task continue 
// Menu:
let menu = [
  { name: "Burger", price: 6.5, category: "Main Course", available: true },
  { name: "Pizza", price: 9.0, category: "Main Course", available: false },
  { name: "Pasta", price: 7.5, category: "Main Course", available: true },
  { name: "Salad", price: 3.5, category: "Appetizer", available: true },
  { name: "Shawerma", price: 1.5, category: "Main Course", available: false }
];

// part 1:
  function showMenu() {
  console.log(" Restaurant Menu :");
  
  for (let i in menu) {
    console.log(menu[i].name)
  }
  }showMenu();


  // part 2/3:
while (true) {
        foodName = prompt("Enter food name: [Burger,Pizza,Pasta,Salad,Shawerma]");
        selectedFood = null;
        for (let i = 0; i < menu.length; i++) {

            if (menu[i].available === false) {
                continue;
            }

            if (menu[i].name.toLowerCase() == foodName.toLowerCase()) {

                selectedFood = menu[i];

                break;
            }
        }
        if (selectedFood !== null) {
            break;
        }
    }

    // part 4:
       for (let property in selectedFood) {
        console.log(
            property + ": " + selectedFood[property] 
        );
        }

       // bonus question :
        let quantity = prompt("Enter quantity:");
        let totalPrice = selectedFood.price * quantity;

        // part 5:
         document.writeln("<h2>Final Order</h2>");

         document.writeln("Food: " + selectedFood.name + "<br>");
         document.writeln("Price: $" + selectedFood.price + "<br>");
         document.writeln("Quantity: " + quantity + "<br>");
         document.writeln("Total Price: $" + totalPrice + "<br>");












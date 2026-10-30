

// for loop

// for (initial state variable, condition, incrememt/decrement){
//   // action to be done
// }

// for (let i=10; i >= 0; i--){
//   console.log("this is number: " + i)
// };

// let team = 11

// for (let t=1; t <= team;t++ ){
//   console.log("Introduction for player: " + t)
// }

// let numberOfCustometAcct = 1000;

// while (numberOfCustometAcct > 0){
//   console.log("Sending maintenance debit alert to customer: " + numberOfCustometAcct);
//   numberOfCustometAcct--;
// }


// let attendees = 1;

// do {
//   console.log("Sending reminder for the event to attendee: " + attendees);
//   attendees--;
// } while(attendees > 0);


// break and conitnue
let numberOfCustomerAcct = 100;
while (numberOfCustomerAcct > 0){
  console.log("Sending maintenance debit alert to customer: " + numberOfCustomerAcct);
  numberOfCustomerAcct--;

  if (numberOfCustomerAcct === 50){
    console.log("Maintenance debit alert sent to 50 customers, continuing the process");
    continue;
  }

}



// const productCard = (product) => {
//   let {name, price, description} = product;

//   return `
//   <div class="product-card">
//     <div class="product-image">
//       <img src="https://images.unsplash.com/photo-1682685794700-1f3c5e7d8b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Product Image">
//     </div>
//   </div>
//   `
// }

// const products = [
//   {
//     name: "Product 1",
//     price: 19.99,
//     description: "This is the description for Product 1."
//   },
//   {
//     name: "Product 2",
//     price: 29.99,
//     description: "This is the description for Product 2."
//   },
//   {
//     name: "Product 3",
//     price: 39.99,
//     description: "This is the description for Product 3."
//   }
// ];

// const productContainer = document.getElementById("product-container");

// // products.forEach((product) => {
// //   const productHTML = productCard(product);
// //   productContainer.innerHTML += productHTML;
// // }

// while (products.length > 0) {
//   const product = products.pop();
//   const productHTML = productCard(product);
//   productContainer.innerHTML += productHTML;
// }
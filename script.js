// Given an array of numbers, use the map() method to create a new array where each number is squared.
// const numbers = [1, 2, 3, 4, 5];
// // Expected Output: [1, 4, 9, 16, 25]
var map_arr = [1,2,3,4,5,6,7,8]

let res_map_arr = map_arr.map((Element,index,array)=>{
    return Element*Element
})
console.log(res_map_arr);


// You have an array of strings representing names. Use map() to transform each name to uppercase.

// const names = ["alice", "bob", "charlie"];
// Expected Output: ["ALICE", "BOB", "CHARLIE"]
const names = ["alice","bob","charlie"]
const res_map_names = names.map((ele,ind,arr)=>{
    return ele.toUpperCase();
})
console.log(res_map_names);


// Given an array of objects representing products, use filter() to return an array of their price which are greater than 500

// Expected Output: [1000, 700]

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 }
];
// const filter_products = products.filter((rate)=>{
//     // console.log(products);
//     console.log(rate.price);
//     if(rate.price > 500){
//         return rate.price
//     }
// })
const filtered_Prices = products
  .filter(product => product.price > 500).map(product => product.price); 
  console.log(filtered_Prices);
// console.log(filter_products);



// You have an array of objects representing purchases, each with a price and quantity. Use reduce() to calculate the total cost of all purchases.


const purchases = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
    { price: 8, quantity: 1 }
];

// Expected Output: 48

const total_purchases = purchases.reduce((acc,item)=>{
    return acc + (item.price * item.quantity)
},0);
console.log(total_purchases);
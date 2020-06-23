var faker = require('faker');

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();

console.log("Customer Info\n");
console.log(randomName + "\n");
console.log(randomEmail + "\n"); 

console.log("WELCOME TO MY SHOP\n");
for(var i=0; i<10; i++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
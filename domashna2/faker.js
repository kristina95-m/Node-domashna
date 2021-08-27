const faker = require('faker');

console.log(faker.name.firstName());
console.log(faker.name.lastName());
console.log(faker.address.streetAddress());
console.log(faker.helpers.createCard());
console.log(faker.finance.account());
console.log(faker.finance.accountName());
console.log(faker.finance.amount());
console.log(faker.finance.currencyCode());
console.log(faker.finance.iban());
console.log(faker.finance.transactionDescription());
console.log(faker.finance.transactionType());
console.log(faker.finance.creditCardNumber());
console.log(faker.finance.creditCardCVV());
console.log(faker.finance.bic());
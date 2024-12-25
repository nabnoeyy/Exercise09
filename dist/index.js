"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ex1_1 = require("./Ex1");
const Ex2_1 = require("./Ex2");
const author1 = new Ex1_1.Author("Nabnoeyy", "nabnoeyy@gmail.com");
console.log(author1.toString());
console.log("########################################");
const author2 = new Ex1_1.Author("BL", "boon1234@gmail.com");
console.log(author2.toString());
const book1 = new Ex1_1.Book("BasicSE", [author1, author2], 20, 300);
console.log(book1.toString());
console.log(book1.getAuthorsNames()); //ห้ามลืมใส่() ข้างหลังอีก!!!
console.log("##########################################");
const customer1 = new Ex2_1.Customer(151, "nabnoeyy", 27);
const invoice1 = new Ex2_1.Invoice(664259, customer1, 1000);
console.log(invoice1.toString());

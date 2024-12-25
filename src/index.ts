 import { Author, Book } from "./Ex1";
import { Customer, Invoice } from "./Ex2";


const author1 = new Author("Nabnoeyy","nabnoeyy@gmail.com");
console.log(author1.toString());
console.log("########################################");

const author2 = new Author ("BL","boon1234@gmail.com");
console.log(author2.toString());


const book1 = new Book("BasicSE",[author1,author2],20,300)

console.log(book1.toString())
console.log(book1.getAuthorsNames())//ห้ามลืมใส่() ข้างหลังอีก!!!

console.log("##########################################")



const customer1 = new Customer (151,"nabnoeyy",27)


const invoice1 = new Invoice (664259,customer1,1000)
console.log(invoice1.toString());
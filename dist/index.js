"use strict";
// //  import { Author, Book } from "./Ex1";
// // import { Customer, Invoice } from "./Ex2";
// import {Person , Staff, Student} from "./Ex3";
const { Shape, Circle, Rectangle, Square } = require("./Ex4");
const { Customer, DiscountRate, Visit } = require("./Ex5");
// import {Customer , DiscountRate , Visit} from "./Ex5";
// // const author1 = new Author("Nabnoeyy","nabnoeyy@gmail.com");
// // console.log(author1.toString());
// // console.log("########################################");
// // const author2 = new Author ("BL","boon1234@gmail.com");
// // console.log(author2.toString());
// // const book1 = new Book("BasicSE",[author1,author2],20,300)
// // console.log(book1.toString())
// // console.log(book1.getAuthorsNames())//ห้ามลืมใส่() ข้างหลังอีก!!!
// // console.log("##########################################")
// // const customer1 = new Customer (151,"nabnoeyy",27)
// // const invoice1 = new Invoice (664259,customer1,1000)
// // console.log(invoice1.toString());
// const student1 = new Student("Nabnoeyy","12/1 ทัพหลวง อ.เมือง 73000", "Software Engineer", 2, 11400);
// console.log(student1.toString());
// console.log("##################################")
// const staff1= new Staff ("Yoyu","15/5 ต.พระปฐมเจดีย์ อ.เมือง","NPRU",5000)
// console.log(staff1.toString());
// console.log("##################################")
// const circle1 = new Circle("red",true,1)
// console.log(circle1.toString())
// console.log("getArea:", circle1.getArea())
// console.log("getPerimeter:", circle1.getPerimeter())
// console.log("##################################")
// const rectangle1 = new Rectangle ("red",true,5,5)
// console.log(rectangle1.toString())
// console.log("getArea:"+rectangle1.getArea())
// console.log("getPerimeter:"+rectangle1.getPerimeter())
// console.log("##################################")
// const square1 = new Square (5,"red",true)
// console.log(square1.toString())
// const visit = new Visit (customer.getName(), new Date());
// visit.setServiceExpense(1000); // ค่าใช้จ่ายบริการ
// visit.setProductExpense(500);
// console.log(visit.toString());
// console.log("Total Expense: " + visit.getTotalExpense());
// const customer =new Customer("nabnoey",false,"Gold")
// console.log(customer.toString())
// console.log("##################################")
const customer = new Customer("Nabnoeyy", true, "premium");
console.log(customer.toString());
const visit = new Visit(customer, new Date(), 459, 325);
const premiumServiceDiscount = DiscountRate.getServiceDiscountRate("premium");
console.log("Premium Service Discount:", premiumServiceDiscount);
const goldProductDiscount = DiscountRate.getProductDiscountRate("gold");
console.log("Gold Product Discount:", goldProductDiscount);
const serviceDiscount = DiscountRate.getServiceDiscountRate(customer.getMemberType()) * visit.getServiceExpense();
const productDiscount = DiscountRate.getProductDiscountRate(customer.getMemberType()) * visit.getProductExpense();
const discountedServiceExpense = visit.getServiceExpense() - serviceDiscount;
const discountedProductExpense = visit.getProductExpense() - productDiscount;
const totalExpenseAfterDiscount = discountedServiceExpense + discountedProductExpense;
console.log("Service Discount:", serviceDiscount.toFixed(2));
console.log("Product Discount:", productDiscount.toFixed(2));
console.log("Service Expense After Discount:", discountedServiceExpense.toFixed(2));
console.log("Product Expense After Discount:", discountedProductExpense.toFixed(2));
console.log("Total Expense After Discount:", totalExpenseAfterDiscount.toFixed(2));

// //  import { Author, Book } from "./Ex1";
// // import { Customer, Invoice } from "./Ex2";
import { Staff, Student} from "./Ex3";
// const { Customer, Invoice } = require ("./Ex2")
const { Shape, Circle, Rectangle, Square } = require("./Ex4")
const {Customer , DiscountRate , Visit} = require("./Ex5")


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



// const customer1 = new Customer (151,"nabnoeyy",27)


// const invoice1 = new Invoice (664259,customer1,1000)
// console.log(invoice1.toString());

const student1 = new Student("Nabnoeyy","12/1 ทัพหลวง อ.เมือง 73000", "Software Engineer", 2, 11400);
console.log(student1.toString());

// console.log("##################################")

const staff1= new Staff ("Yoyu","15/5 ต.พระปฐมเจดีย์ อ.เมือง","NPRU",5000)
console.log(staff1.toString());

// console.log("##################################")



console.log("############# Ex4 ###############")

const cicle = new Circle("red",true,9)
console.log(cicle.toString())

const rectangle = new Rectangle("red",true,5,10)
console.log(rectangle.toString())

const shape = new Shape("red",true)
console.log(shape.toString())

const square = new Square("red",true,5)
console.log(square.toString())
square.setSide();





// สร้าง Customer และ Visit พร้อมทดสอบ
const customer1 = new Customer("nabnoey", false, "Gold");
console.log(customer1.toString());
console.log("##################################");

const customer2 = new Customer("Nabnoeyy", true, "Premium");
console.log(customer2.toString());
console.log("##################################");

// สร้าง Visit ที่เกี่ยวข้องกับ customer2
const visit1 = new Visit(customer2, new Date(), 459, 325);
console.log(visit1.toString());

// ทดสอบส่วนลดสำหรับบริการและสินค้า
const premiumServiceDiscount = DiscountRate.getServiceDiscountRate("premium");
console.log("Premium Service Discount:", premiumServiceDiscount);

const goldProductDiscount = DiscountRate.getProductDiscountRate("gold");
console.log("Gold Product Discount:", goldProductDiscount);

// คำนวณส่วนลดและค่าใช้จ่ายหลังส่วนลดสำหรับ visit1
const serviceDiscount = DiscountRate.getServiceDiscountRate(customer2.getMemberType()) * visit1.getServiceExpense();
const productDiscount = DiscountRate.getProductDiscountRate(customer2.getMemberType()) * visit1.getProductExpense();

const discountedServiceExpense = visit1.getServiceExpense() - serviceDiscount;
const discountedProductExpense = visit1.getProductExpense() - productDiscount;

const totalExpenseAfterDiscount = discountedServiceExpense + discountedProductExpense;

// แสดงผลการคำนวณส่วนลดและค่าใช้จ่ายหลังส่วนลด
console.log("Service Discount:", serviceDiscount.toFixed(2));
console.log("Product Discount:", productDiscount.toFixed(2));
console.log("Service Expense After Discount:", discountedServiceExpense.toFixed(2));
console.log("Product Expense After Discount:", discountedProductExpense.toFixed(2));
console.log("Total Expense After Discount:", totalExpenseAfterDiscount.toFixed(2));
console.log("##################################");

// ทดสอบ Visit อื่น
const visit2 = new Visit(customer1, new Date(), 1000, 500);
visit2.setServiceExpense(1000); // ค่าใช้จ่ายบริการ
visit2.setProductExpense(500);

console.log(visit2.toString());
console.log("Total Expense:", visit2.getTotalExpense().toFixed(2));

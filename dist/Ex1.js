"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Author = void 0;
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    Author(name, email) {
        return "name:" + this.name + "email" + this.email;
    }
    getName() {
        return this.name;
    }
    Email() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return "Author [name:" + this.name + "Email:" + this.email + "]";
    }
}
exports.Author = Author;
class Book {
    constructor(name, authors, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let details = "Book[name" + this.name + "authors={";
        for (let i = 0; i < this.authors.length; i++) {
            details += this.authors[i].toString();
            if (i < this.authors.length - 1)
                details += ", "; // แยกผู้เขียนด้วยคอมม่า
        }
        details += `}, price: ${this.price}, qty: ${this.qty}, totalPrice: ${this.qty * this.price}]`; // คำนวณราคาทั้งหมดnn
        return details;
    }
    getmoney() {
        const money = (this.qty * this.price);
        return money;
    }
    getAuthorsNames() {
        let authorsNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorsNames += this.authors[i].getName() + ",";
        }
        return authorsNames;
    }
}
exports.Book = Book;

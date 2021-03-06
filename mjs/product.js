"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get image() {
        return this._image;
    }
    set image(v) {
        this._image = v;
    }
    get sumary() {
        return this._sumary;
    }
    set sumary(v) {
        this._sumary = v;
    }
    get price() {
        return this._price;
    }
    set price(v) {
        this._price = v;
    }
    get canBuy() {
        return this._canBuy;
    }
    set canBuy(v) {
        this._canBuy = v;
    }
}
exports.Product = Product;

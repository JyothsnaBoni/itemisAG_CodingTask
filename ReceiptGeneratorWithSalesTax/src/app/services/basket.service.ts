import { Injectable } from '@angular/core';
import { Item, Receipt } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  items: Item[] = [];
  receipt: Receipt = {
    id: '',
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    items: [],
  };

  addToBasket(item: Item) {
      this.items.push(this.calculateTax(item));
      this.addToTotal(item);
  }

  deleteFromBasket(item: Item) {
    const index =  this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.deleteFromTotal(item);
  }

  addToTotal(item: Item) {

    this.receipt.count =  Number(this.receipt.count) + Number(item.count);
    this.receipt.salesTax =  Number(this.receipt.salesTax) + Number(item.salesTax);
    this.receipt.importTax =  Number(this.receipt.importTax) + Number(item.importTax);
    this.receipt.price =  Number(this.receipt.price) + Number(item.price);
    this.receipt.totalPrice =  Number(this.receipt.totalPrice) + Number(item.totalPrice);
    this.receipt.items = this.items;

  }

  deleteFromTotal(item: Item) {

    this.receipt.count =  Number(this.receipt.count) - Number(item.count);
    this.receipt.salesTax =   Number(this.receipt.salesTax) -  Number(item.salesTax);
    this.receipt.importTax =   Number(this.receipt.importTax) -  Number(item.importTax);
    this.receipt.price =   Number(this.receipt.price) -  Number(item.price);
    this.receipt.totalPrice =   Number(this.receipt.totalPrice) -  Number(item.totalPrice);
    this.receipt.items = this.items;

  }

  getItems() {
    return this.items;
  }

  getItemId(){
    return Date.now();
  }

  generateReceiptId(){
    this.receipt.id = String(Date.now());
    return this.receipt.id;
  }

  getReceiptId(){
    return this.receipt.id;
  }

  getTotalItems(){
    return this.receipt;
  }

  clearBasket() {
    this.items = [];
    return this.items;
  }

  clearReceipt(){
    this.receipt = {
      id: '',
      name: '',
      price: 0,
      count: 0,
      salesTax: 0,
      importTax: 0,
      totalPrice: 0,
      items: []
    }
  }

  calculateTax(item: Item){
    if(item.count < 0 || item.price < 0 || item.type == 'Select Item Type'){
        throw new Error("Invalid Inputs. Something is terribly wrong in the program.");
    } else {   
      let importTax = 0;
      let salesTax = 0;
      let totalPrice = item.count * item.price;
  
      item.type === 'others' ? salesTax = (totalPrice/100)*10 : salesTax = 0; 
      item.name.includes('imported') ? importTax = (totalPrice/100)*5 : importTax = 0;
  
      item.importTax = importTax;
      item.salesTax = salesTax;
      item.totalPrice = totalPrice + salesTax + importTax;
      return item; 
    }
  }

}

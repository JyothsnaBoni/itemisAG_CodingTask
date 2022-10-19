import { Injectable } from '@angular/core';
import { Item, Receipt, taxCategories } from '../models/item';

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
    if(!Number.isInteger(item.count) || item.count < 0 || item.price < 0 || !(Object.values(taxCategories) as unknown as String).includes(item.type) ){
        throw new Error("Invalid Inputs.");
    } else {   
      let importTax = 0;
      let salesTax = 0;
      let totalPrice = item.count * item.price;
      let totalTaxPercentage = 0;
      if(item.type === taxCategories.others) {
        salesTax = Number(((totalPrice/100)*10).toFixed(2));
        totalTaxPercentage = totalTaxPercentage + 10;
      }else{
        salesTax = 0; 
      } 
      if(item.name.includes('imported')){
        importTax = Number(((totalPrice/100)*5).toFixed(2));
        totalTaxPercentage = totalTaxPercentage + 5;
      }else{
        importTax = 0;
      }
  
      item.importTax = importTax;
      item.salesTax = salesTax;
      item.totalPrice = Number((totalPrice + (totalPrice/100)*totalTaxPercentage).toFixed(2));
      console.log("object with tax : " + JSON.stringify(item));
      return item; 
    }
  }
}

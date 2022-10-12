import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  items: Item[] = [];
  totalItems: Item = {
    id: 0,
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: ''
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

    this.totalItems.count =  Number(this.totalItems.count) + Number(item.count);
    this.totalItems.salesTax =  Number(this.totalItems.salesTax) + Number(item.salesTax);
    this.totalItems.importTax =  Number(this.totalItems.importTax) + Number(item.importTax);
    this.totalItems.price =  Number(this.totalItems.price) + Number(item.price);
    this.totalItems.totalPrice =  Number(this.totalItems.totalPrice) + Number(item.totalPrice);

  }

  deleteFromTotal(item: Item) {

    this.totalItems.count =  Number(this.totalItems.count) - Number(item.count);
    this.totalItems.salesTax =   Number(this.totalItems.salesTax) -  Number(item.salesTax);
    this.totalItems.importTax =   Number(this.totalItems.importTax) -  Number(item.importTax);
    this.totalItems.price =   Number(this.totalItems.price) -  Number(item.price);
    this.totalItems.totalPrice =   Number(this.totalItems.totalPrice) -  Number(item.totalPrice);

  }

  getItems() {
    return this.items;
  }

  getTotalItems(){
    return this.totalItems;
  }

  clearBasket() {
    this.items = [];
    return this.items;
  }

  calculateTax(item: Item){
    let importTax = 0;
    let salesTax = 0;
    let totalPrice = item.count * item.price;

    item.type === 'others' ? salesTax = (totalPrice/100)*10 : salesTax = 0; 
    console.log("Item type " + item.type);
    item.name.includes('imported') ? importTax = (totalPrice/100)*5 : importTax = 0;

    item.importTax = importTax;
    item.salesTax = salesTax;
    item.totalPrice = totalPrice + salesTax + importTax;

    return item;
  }
  
}

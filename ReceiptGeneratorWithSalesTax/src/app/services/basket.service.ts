import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  items: Item[] = [];

  addToBasket(item: Item) {
    this.items.push(this.calculateTax(item));
  }

  deleteFromBasket(item: Item){
    const index =  this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
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

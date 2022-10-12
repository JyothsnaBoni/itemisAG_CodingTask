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
    (item.name.includes('imported')) ? item.importTax = ((item.price*item.count)/100)*5 : item.importTax = 0;
    item.salesTax = 0
    console.log("item price " +  item.price)
    console.log("item sales tax " +  item.salesTax)
    console.log("item import tax " +  item.importTax)
    item.totalPrice = item.count * (Number(item.price) + Number(item.salesTax) + Number(item.importTax));
    console.log("item totalPrice" + item.totalPrice )

    return item;
  }
  
}

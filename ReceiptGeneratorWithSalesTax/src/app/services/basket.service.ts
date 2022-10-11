import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  items: Item[] = [];

  addToBasket(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearBasket() {
    this.items = [];
    return this.items;
  }
  
}

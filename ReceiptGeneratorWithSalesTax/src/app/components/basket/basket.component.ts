import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'
import { FormBuilder } from '@angular/forms';
import { BasketService } from 'src/app/services/basket.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
  ) { }
  basketItems = this.basketService.getItems();
  
  itemForm = this.formBuilder.group({
    id: '',
    name: '',
    price: '',
    count: '',
  });

  onSubmit(): void {
    // Process checkout data here
    this.basketService.addToBasket(this.itemForm.value)    
    this.basketItems = this.basketService.getItems();
    console.warn('Your order has been submitted', this.itemForm.value);
    this.itemForm.reset();
  }

  ngOnInit(): void {
  }

  saveItem(){

  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item'
import { FormBuilder } from '@angular/forms';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
  ) { }

  basketItems = this.basketService.getItems();
  selected = 'Select Item Type';
  itemsTotal = this.basketService.getTotalItems();
  receiptId = this.basketService.generateReceiptId();
  
  itemForm = this.formBuilder.group({
    id: '',
    name: '',
    price: '',
    count: '',
    type: '',
  });

  onSubmit(): void {
    // add the selected type to the item
    this.itemForm.value.type = this.selected;
    this.itemForm.value.id = this.basketService.getItemId();
    this.basketService.addToBasket(this.itemForm.value); 
    
    //this.basketItems = this.basketService.getItems();
    this.itemForm.reset();
  }

  // delete items from the basket
  deleteItem(item: Item): void {
    this.basketService.deleteFromBasket(item);
  }

  // to print the receipt
  showPreview(){
    
  }

  clearBasket(){
    this.basketService.clearBasket();
    this.basketService.clearReceipt();
    this.basketItems = []; 
    this.itemsTotal = this.basketService.getTotalItems();
  }

  validateInputs(){
    if (this.itemForm.value.name === '' || this.itemForm.value.count === '' || this.itemForm.value.price === '') { return true; }
    else  { return false ; } 
  }

}

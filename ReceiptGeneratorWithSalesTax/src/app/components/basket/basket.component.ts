import { Component, OnInit, ViewChild } from '@angular/core';
import { Item, Receipt } from '../../models/item'
import { FormBuilder } from '@angular/forms';
import { BasketService } from 'src/app/services/basket.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  postId: any;
  errorMessage: any;
  totalAngularPackages: any;

  ngOnInit(): void {
  }

  baseURL: string = "http://localhost:3000/receipts";

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  basketItems = this.basketService.getItems();
  selected = 'Select Item Type';
  receipt = this.basketService.getTotalItems();
  receiptId = this.basketService.generateReceiptId();
  
  itemForm = this.formBuilder.group({
    id: '',
    name: '',
    price: '',
    count: '',
    type: '',
  });

  saveReceipt() {
    this.http.post<any>(this.baseURL, this.receipt).subscribe({
      next: data => {
          this.postId = data.id;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });
    this.getReceipts();
  }

  getReceipts(){
    this.http.get(this.baseURL).subscribe(responseData => console.log(responseData));
  }

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
    this.receipt = this.basketService.getTotalItems();
    this.basketItems = this.basketService.getItems();
    this.receiptId = this.basketService.generateReceiptId();
  }

  validateInputs(){
    if (this.itemForm.value.name === '' || this.itemForm.value.count === '' || this.itemForm.value.price === '') { return true; }
    else  { return false ; } 
  }

}

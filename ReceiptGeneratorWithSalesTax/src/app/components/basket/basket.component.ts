import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item'
import * as err from '../../models/errors'

import { FormBuilder, Validators } from '@angular/forms';
import { BasketService } from 'src/app/services/basket.service';
import { HttpClient } from '@angular/common/http';

const selectItemType: string = 'Select Item Type';
const baseURL: string = "http://localhost:3000/receipts";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements OnInit {
  postId: any;
  saveReceiptError: String = '';
  serverRespose: String = '';
  emptyBasketError: String = '';
  addItemError: String = '';

  totalAngularPackages: any;
  formErrors: String[] = [];
  
  isShowReceiptGenerator = true;
  isShowHistory = false;
  isShowSettings = false;
  isShowPrintPreview = true;

  ngOnInit(): void {
  }

  showSettings(){
    this.isShowHistory = false;
    this.isShowPrintPreview = false;
    this.isShowSettings = true;
    this.isShowReceiptGenerator = false;
  }

  // Show generate recipt page
  showHome(){
    this.isShowHistory = false;
    this.isShowPrintPreview = true;
    this.isShowSettings = false;
    this.isShowReceiptGenerator = true;
  }

  showHistory(){
    this.isShowHistory = true;
    this.isShowPrintPreview = false;
    this.isShowSettings = false;
    this.isShowReceiptGenerator = false;
  }

  // show receipt preview
  showPreview(){
    this.isShowHistory = false;
    this.isShowPrintPreview = true;
    this.isShowSettings = false;
    this.isShowReceiptGenerator = false;
  }

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  basketItems = this.basketService.getItems();
  selected = selectItemType;
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

    // clear the error messages
    this.saveReceiptError = '';
    this.serverRespose = '';
    this.emptyBasketError = '';

    // create new receipt number
    this.receipt.name = "Receipt-" + this.receipt.id;

      if(this.basketItems.length != 0){
          // post the data to the server to save receipt
        this.http.post<any>(baseURL, this.receipt).subscribe({
          next: data => {
              this.postId = data.id;
              this.clearBasket();
          },
          error: error => {
              this.saveReceiptError = err.SERVER.SERVER_ERROR;
              this.serverRespose = error.message;
          }
        });
      }else{
        this.emptyBasketError = err.RECEIPT.EMPTY_BASKET_ERROR;
      }

  }

  // checks if the form is valid
  validForm(){

    // clear form errors
    this.formErrors = [];
    let isValidForm: Boolean = false;

    if(this.itemForm.value.price < 0 ){
      this.formErrors.push(err.ITEM.PRICE_LT_ZERO);
    }

    if(this.itemForm.value.count < 0 ){
      this.formErrors.push(err.ITEM.COUNT_LT_ZERO);
    }

    if(this.selected == "Select Item Type"){
      this.formErrors.push(err.ITEM.SELECT_ITEM_TYPE);
    }

    // check if no errors exist in the form
    if(this.formErrors.length == 0) {
      isValidForm = true;
    }

    return isValidForm;
  }

  // generate item ID and add Item to basket
  onSubmit() {
      this.addItemError = '';
      // add the selected type to the item
      this.itemForm.value.type = this.selected;
      this.itemForm.value.id = this.basketService.getItemId();

      let item: Item = {
        id: this.itemForm.value.id,
        name: this.itemForm.value.name,
        price: this.itemForm.value.price,
        count: this.itemForm.value.count,
        salesTax: 0,
        importTax: 0,
        totalTax: 0,
        totalPrice: 0,
        type: this.itemForm.value.type,
        receiptId: this.receiptId
      }

      try{
        this.basketService.addToBasket(item); 
        // clear the form after adding item to basket if there are not errors
        this.itemForm.reset();
        this.emptyBasketError = "";
      }catch(e){
        this.addItemError = err.ITEM.ADD_ITEM_ERROR;
      }

      return item;
  }

  // delete items from the basket
  deleteItem(item: Item): void {
    this.basketService.deleteFromBasket(item);
  }

  clearBasket(){
    this.basketService.clearBasket();
    this.basketService.clearReceipt();
    this.receipt = this.basketService.getTotalItems();
    this.basketItems = this.basketService.getItems();
    this.receiptId = this.basketService.generateReceiptId();
  }

}

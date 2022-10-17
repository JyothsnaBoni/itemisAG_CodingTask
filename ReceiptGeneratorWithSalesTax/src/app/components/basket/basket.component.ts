import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item'
import { FormBuilder, Validators } from '@angular/forms';
import { BasketService } from 'src/app/services/basket.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  postId: any;
  errorMessage: any;
  totalAngularPackages: any;
  form_errors: String[] = [];

  ngOnInit(): void {
  }

  baseURL: string = "http://localhost:3000/receipts";
  isShowReceiptGenerator = true;
  isShowHistory = false;
  isShowSettings = false;
  isShowPrintPreview = true;

  showSettings(){
    this.isShowHistory = false;
    this.isShowPrintPreview = false;
    this.isShowSettings = true;
    this.isShowReceiptGenerator = false;
  }

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
    this.receipt.name = "Receipt-" + this.receipt.id;
    this.http.post<any>(this.baseURL, this.receipt).subscribe({
      next: data => {
          this.postId = data.id;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });
    this.clearBasket();
  }

  validForm(){
    this.form_errors = [];
    let isValidForm: Boolean = false;

    if(this.itemForm.value.price < 0 ){
      this.form_errors.push("* Price should be greater than 0");
    }

    if(this.itemForm.value.count < 0 ){
      this.form_errors.push("* Count should be greater than 0");
    }

    if(this.selected == "Select Item Type"){
      this.form_errors.push("* Select Item type.");
    }

    if(this.form_errors.length == 0) {
      isValidForm = true;
    }
    return isValidForm;
  }

  onSubmit(): void {

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
        totalPrice: 0,
        type: this.itemForm.value.type,
        receiptId: this.receiptId
      }

      this.basketService.addToBasket(item); 
      
      //this.basketItems = this.basketService.getItems();
      this.itemForm.reset();

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

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from 'src/app/models/item';
import * as err from '../../models/errors'

const baseURL: string = "http://localhost:3000/receipts";

@Component({
  selector: 'app-receipts-history',
  templateUrl: './receipts-history.component.html',
  styleUrls: ['./receipts-history.component.css']
})

export class ReceiptsHistoryComponent implements OnInit {

  receipts: Receipt[] = [];
  serverError: String = '';
  getReceiptsError: String = '';

  constructor(private http: HttpClient) { 
    this.getReceipts();
  }

  ngOnInit(): void {
  }

  getReceipts(){
    this.serverError = '';
    this.http.get(baseURL).subscribe({
      next: responseData => {
        this.processResponse(responseData);
      },
      error: error => {
          this.getReceiptsError = err.RECEIPT.GET_RECEIPTS_ERROR;
          this.serverError = error.message;
      }
    });
  }
  
  // Converts the receied data from the http get request into receipts array
  processResponse(data: any){
    for (let entry of data) {
      let eachReceipt: Receipt = {
        id: '',
        name: '',
        price: 0,
        count: 0,
        salesTax: 0,
        importTax: 0,
        totalTax: 0,
        totalPrice: 0,
        items: []
      };

      eachReceipt.id = entry.id;
      eachReceipt.name = entry.name;
      eachReceipt.count = entry.count;
      eachReceipt.salesTax = entry.salesTax;
      eachReceipt.importTax = entry.importTax;
      eachReceipt.totalTax = entry.totalTax;
      eachReceipt.totalPrice = entry.totalPrice;
      eachReceipt.items = entry.items;

      this.receipts.push(eachReceipt)
    }
  }

}

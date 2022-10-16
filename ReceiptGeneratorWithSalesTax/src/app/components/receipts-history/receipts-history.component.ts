import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from 'src/app/models/item';

@Component({
  selector: 'app-receipts-history',
  templateUrl: './receipts-history.component.html',
  styleUrls: ['./receipts-history.component.css']
})
export class ReceiptsHistoryComponent implements OnInit {

  receipts: Receipt[] = [];
  baseURL: string = "http://localhost:3000/receipts";

  constructor(private http: HttpClient) { 
    this.getReceipts();
  }

  ngOnInit(): void {
  }

  getReceipts(){
    this.http.get(this.baseURL).subscribe(responseData => this.processResponse(responseData));
  }
  
  processResponse(data: any){
    for (let entry of data) {
      let eachReceipt: Receipt = {
        id: '',
        name: '',
        price: 0,
        count: 0,
        salesTax: 0,
        importTax: 0,
        totalPrice: 0,
        items: []
      };

      eachReceipt.id = entry.id;
      eachReceipt.name = entry.name;
      eachReceipt.count = entry.count;
      eachReceipt.salesTax = entry.salesTax;
      eachReceipt.importTax = entry.importTax;
      eachReceipt.totalPrice = entry.totalPrice;
      eachReceipt.items = entry.items;

      this.receipts.push(eachReceipt)
    }
  }

}

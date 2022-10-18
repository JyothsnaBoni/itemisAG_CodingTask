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
  serverError: String = '';
  getReceiptsError: String = '';

  constructor(private http: HttpClient) { 
    this.getReceipts();
  }

  ngOnInit(): void {
  }

  getReceipts(){
    this.serverError = '';
    // try{
    //   this.http.get(this.baseURL).subscribe(responseData => this.processResponse(responseData));
    // }catch(error: any){
    //   this.serverError = error.message + "Unable to load data.There was something wrong with the server"
    //   console.log(error.message);
    // }

    this.http.get(this.baseURL).subscribe({
      next: responseData => {
        this.processResponse(responseData);
      },
      error: error => {
          this.getReceiptsError = '503 Server Unavailable : There was an error retreiving receipt data.';
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

import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { Item, Receipt } from 'src/app/models/item';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  @Input() basketItems: Item[] = [];
  @Input() itemsTotal: Receipt = {
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
  @Input() receiptId : string = '';
  
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
  }
  
}

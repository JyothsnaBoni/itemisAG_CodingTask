import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  @Input() basketItems: Item[] = [];
  @Input() selected : string = '';
  @Input() itemsTotal: Item = {
    id: 0,
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  };
  @Input() receiptId : string = '';
  
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
  }
  
}

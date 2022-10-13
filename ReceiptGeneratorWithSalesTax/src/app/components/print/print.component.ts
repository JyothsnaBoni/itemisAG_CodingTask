import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
  }

  basketItems = this.basketService.getItems();
  itemsTotal = this.basketService.getTotalItems();
  
}

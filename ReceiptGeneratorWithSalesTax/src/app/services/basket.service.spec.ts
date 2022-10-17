import { isNgTemplate } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';
import { Item, Receipt } from '../models/item';

describe('BasketService', () => {
  let service: BasketService;
  let item1: Item = {
    id: '',
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  };
  let receipt: Receipt;
  // const parameters = [
  //   { description: "should pass with pos", }
  // ]

  // 1. All passing inputs, positive values, 
  // 2. negative price
  // 3. negative count
  // 4. special charecters
  // 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test weather the `generateReceiptId` method returns only a single value
  it('#getItemId should return string value', () => {
    let generatedReceiptId = service.generateReceiptId;
    expect(typeof generatedReceiptId).toBe(typeof String);
  });

   // Test weather the `` method returns only a single value
  it('#generateReceiptId should return string value', () => {
    let itemId = service.getItemId;
    expect(typeof itemId).toBe(typeof String);
  });

  // Test calculate tax with all possible inputs and outputs
  // Parametarised test
 

});

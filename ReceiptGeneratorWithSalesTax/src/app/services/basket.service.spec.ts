import { isNgTemplate } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';
import { Item, Receipt } from '../models/item';

describe('BasketService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  let service: BasketService;

  let itemValid: Item = {
    id: '1666049651466',
    name: 'chocolate',
    price: 100,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 100,
    type: 'food',
    receiptId: '1666049636852'
  };
  let itemValidResult: Item = {
    id: '1666049651466',
    name: 'chocolate',
    price: 100,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 100,
    type: 'food',
    receiptId: '1666049636852'
  };

  let itemNegativePrice: Item = {
    id: String(Date.now()),
    name: "name:" + String(Date.now),
    price: -(Math.random()),
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  };
  let itemNegativePriceResult: Item = {
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

  let itemNegativeCount: Item = {
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
  let itemNegativeCountResult: Item = {
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

  let itemInvalidPrice: Item = {
    id: '',
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  }
  let itemInvalidPriceResult: Item = {
    id: '',
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  }

  let itemInvalidCount: Item = {
    id: '',
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  }
  let itemInvalidCountResult: Item = {
    id: '',
    name: '',
    price: 0,
    count: 0,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: '',
    receiptId: ''
  }

  let inputParametersForCalculateTax = [
    {name: "#CalculateTax: Valid Input", input: itemValid, result: itemValidResult},
    {name: "#CalculateTax: Input Item with negative price", input: itemNegativePrice, result: itemNegativePriceResult},
    {name: "#CalculateTax: Input Item with negative count", input: itemNegativeCount, result: itemNegativeCountResult},
    {name: "#CalculateTax: Input Item with non number price", input: itemInvalidPrice, result: itemInvalidPriceResult},
    {name: "#CalculateTax: Input Item with non number price", input: itemInvalidCount, result: itemInvalidCountResult}
  ]

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
    inputParametersForCalculateTax.forEach(element => {
      it(element.name, () => {
        expect(service.calculateTax(element.input)).toEqual(element.result);
      });
    });

});

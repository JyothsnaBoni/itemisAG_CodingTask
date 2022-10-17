import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;

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

  

});

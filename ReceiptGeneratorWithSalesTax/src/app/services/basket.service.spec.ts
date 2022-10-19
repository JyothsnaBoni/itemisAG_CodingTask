import { isNgTemplate } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';
import * as seedData from './basket.service.test.seed'

describe('BasketService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  let service: BasketService;

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
  seedData.validInputParametersForCalculateTax.forEach(param => {
    it(param.name, () => {
      expect(service.calculateTax(param.input)).toEqual(param.result);
    });
  });

});

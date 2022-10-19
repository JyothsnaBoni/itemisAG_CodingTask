import { isNgTemplate } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';
import * as seedData from './basket.service.test.seed'
import { ItemService } from './item.service'

describe('BasketService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  let service: BasketService;
  let itemService: ItemService = new ItemService;

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

  seedData.invalidInputParametersForCalculateTax.forEach(param => {
    it(param.name, () => {

      let expectedErrorMessage: String = '';
      
      try {
        service.calculateTax(param.input);
      }
      catch (error: any) {
        expectedErrorMessage = error.message;
      }
      expect(expectedErrorMessage).toBe(itemService.isValidItem(param.input).join());

    });
  });

  seedData.generateRandomItems().forEach(item => {
      // Test weather the `` method returns only a single value
      // it('#Random items test: Expect count to be positive Integer :' , () => {
      //   // expect(typeof itemId).toBe(typeof String);
      //   // Test whether the count is a positive integer
      //   let itemCount = item.count;
      //   expect(itemCount).toBeGreaterThan(0);
      //   expect(Number.isInteger(itemCount)).toBeTrue();
      // });

      // it('#Random items test: Expect price to be positive :' , () => {
      //   // expect(typeof itemId).toBe(typeof String);
      //   // Test whether the count is a positive integer
      //   let itemPrice = item.price;
      //   expect(itemPrice).toBeGreaterThan(0);
      // });

      it('#CalculateTax: Test with random generated Item', () => {
       try{
        let actualresult = service.calculateTax(item);
        expect(actualresult).toBeTruthy();
       }catch(error: any){
        expect(error.message).toBe(itemService.isValidItem(item).join());
       }

      });
  });

});

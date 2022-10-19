import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import * as seedData from './basket.service.test.seed'

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  seedData.validInputParametersForCalculateTax.forEach(param => {
    it("Validate Item : Pass", () => {
      expect(service.isValidItem(param.input).length).toBe(0);
    });
  });

  seedData.invalidInputParametersForCalculateTax.forEach(param => {
    it("Validate Item : Fail", () => {
      expect(service.isValidItem(param.input).length).toBeGreaterThan(0);
    });
  });
});

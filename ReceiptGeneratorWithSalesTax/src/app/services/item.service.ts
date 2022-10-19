import { Injectable } from '@angular/core';
import { Item , taxCategories} from '../models/item';
import * as errorcode from '../models/errors';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  isValidItem(item: Item){

    let itemErrors : String[] =  [];

    if(item.count < 0 || Number.isInteger(item.count)){
      itemErrors.push(errorcode.ITEM.COUNT_LT_ZERO)
    }

    if(item.price < 0){
      itemErrors.push(errorcode.ITEM.PRICE_LT_ZERO)
    }

    if(item.salesTax < 0){
      itemErrors.push(errorcode.ITEM.SALES_TAX_LT_ZERO)
    }

    if(item.importTax < 0){
      itemErrors.push(errorcode.ITEM.IMPORT_TAX_LT_ZERO)
    }

    if(item.totalPrice < 0){
      itemErrors.push(errorcode.ITEM.TOTAL_PRICE_LT_ZERO)
    }

    if(!(Object.values(taxCategories) as unknown as String).includes(item.type)){
      itemErrors.push(errorcode.ITEM.INVALID_TYPE)
    }

    // return (itemErrors.length != 0) ? false : true;
    return itemErrors;

  }
  
}

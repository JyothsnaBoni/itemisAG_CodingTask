export interface Item {
    id: string;
    name: string;
    price: number;
    count: number;
    salesTax: number;
    importTax: number;
    totalPrice: number;
    type: string;
    receiptId: string;
  }

export enum taxCategories {
  food = "food",
  medicine = "medicine",
  books = "books",
  others = "others",
}

export interface Receipt {
  id: string;
  name: string;
  price: number;
  count: number;
  salesTax: number;
  importTax: number;
  totalPrice: number;
  items: Item[];
}


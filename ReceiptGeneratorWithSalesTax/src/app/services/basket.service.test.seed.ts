import { Item , taxCategories} from "../models/item";

// passing test input
let input_1_book: Item = {
    id: '1666049651466',
    name: 'book',
    price: 12.49,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'books',
    receiptId: '1666049636852'
};

let input_1_book_result: Item = {
    id: '1666049651466',
    name: 'book',
    price: 12.49,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 12.49,
    type: 'books',
    receiptId: '1666049636852'
};

let input_1_music_CD: Item = {
    id: '1666049651467',
    name: 'music CD',
    price: 14.99,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'others',
    receiptId: '1666049636853'
};

let input_1_music_CD_result: Item = {
    id: '1666049651467',
    name: 'music CD',
    price: 14.99,
    count: 1,
    salesTax: 1.50,
    importTax: 0,
    totalPrice: 16.49,
    type: 'others',
    receiptId: '1666049636853'
};

let input_1_chocolate_bar: Item = {
    id: '1666049651477',
    name: 'chocolate bar',
    price: 0.85,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'food',
    receiptId: '1666049636833'
};

let input_1_chocolate_bar_result: Item = {
    id: '1666049651477',
    name: 'chocolate bar',
    price: 0.85,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0.85,
    type: 'food',
    receiptId: '1666049636833'
};

let input_2_imported_box_of_chocolates: Item = {
    id: '1666049651478',
    name: 'imported box of chocolates',
    price: 10.00,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'food',
    receiptId: '1666049636834'
}

let input_2_imported_box_of_chocolates_result: Item = {
    id: '1666049651478',
    name: 'imported box of chocolates',
    price: 10.00,
    count: 1,
    salesTax: 0,
    importTax: 0.5,
    totalPrice: 10.50,
    type: 'food',
    receiptId: '1666049636834'
}

let input_2_imported_bottle_of_perfume: Item = {
    id: '1666049651479',
    name: 'imported bottle of perfume',
    price: 47.50,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'others',
    receiptId: '1666049636835'
}

let input_2_imported_bottle_of_perfume_result: Item = {
    id: '1666049651479',
    name: 'imported bottle of perfume',
    price: 47.50,
    count: 1,
    salesTax: 4.75,
    importTax: 2.38,
    totalPrice: 54.65,
    type: 'others',
    receiptId: '1666049636835'
}

// Input 3 from task sheet

let input_3_imported_bottle_of_perfume: Item = {
    id: '1666049651470',
    name: 'imported bottle of perfume',
    price: 27.99,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'others',
    receiptId: '1666049636830'
}

let input_3_imported_bottle_of_perfume_result: Item = {
    id: '1666049651470',
    name: 'imported bottle of perfume',
    price: 27.99,
    count: 1,
    salesTax: 2.80,
    importTax: 1.40,
    totalPrice: 32.19,
    type: 'others',
    receiptId: '1666049636830'
}

let input_3_bottle_of_perfume: Item = {
    id: '1666049651579',
    name: 'bottle of perfume',
    price: 18.99,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'others',
    receiptId: '1666049636735'
}

let input_3_bottle_of_perfume_result: Item = {
    id: '1666049651579',
    name: 'bottle of perfume',
    price: 18.99,
    count: 1,
    salesTax: 1.90,
    importTax: 0,
    totalPrice: 20.89,
    type: 'others',
    receiptId: '1666049636735'
}

let input_3_packet_of_headache_pills: Item = {
    id: '1566049651579',
    name: 'packet of headache pills',
    price: 9.75,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'medicine',
    receiptId: '1566049636735'
}

let input_3_packet_of_headache_pills_result: Item = {
    id: '1566049651579',
    name: 'packet of headache pills',
    price: 9.75,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 9.75,
    type: 'medicine',
    receiptId: '1566049636735'
}

let input_3_box_of_imported_chocolates: Item = {
    id: '1566049651679',
    name: 'box of imported chocolates',
    price: 11.25,
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'food',
    receiptId: '1566049636735'
}

let input_3_box_of_imported_chocolates_result: Item = {
    id: '1566049651679',
    name: 'box of imported chocolates',
    price: 11.25,
    count: 1,
    salesTax: 0,
    importTax: 0.56,
    totalPrice: 11.85,
    type: 'food',
    receiptId: '1566049636735'
}

export const validInputParametersForCalculateTax = [
    // Input 1 from task sheet
    {name: "#CalculateTax: Input_1: 1 book at 12.49", input: input_1_book, result: input_1_book_result},
    {name: "#CalculateTax: Input_1: 1 music CD at 14.99", input: input_1_music_CD, result: input_1_music_CD_result},
    {name: "#CalculateTax: Input_1: 1 chocolate bar at 0.85", input: input_1_chocolate_bar, result: input_1_chocolate_bar_result},

    // Input 2 from task sheet
    {name: "#CalculateTax: Input_2: 1 imported box of chocolates at 10.00", input: input_2_imported_box_of_chocolates, result: input_2_imported_box_of_chocolates_result},
    {name: "#CalculateTax: Input_2: 1 imported bottle of perfume at 47.50", input: input_2_imported_bottle_of_perfume, result: input_2_imported_bottle_of_perfume_result},


    // Input 3 from task sheet
    {name: "#CalculateTax: Input_3: 1 imported bottle of perfume at 27.99", input: input_3_imported_bottle_of_perfume, result: input_3_imported_bottle_of_perfume_result},
    {name: "#CalculateTax: Input_3: 1 bottle of perfume at 18.99", input: input_3_bottle_of_perfume, result: input_3_bottle_of_perfume_result},
    {name: "#CalculateTax: Input_3: 1 packet of headache pills at 9.75", input: input_3_packet_of_headache_pills, result: input_3_packet_of_headache_pills_result},
    {name: "#CalculateTax: Input_3: 1 box of imported chocolates at 11.25", input: input_3_box_of_imported_chocolates, result: input_3_box_of_imported_chocolates_result},
]

// failing test input
let itemNegativePrice: Item = {
    id: '1566049651679',
    name: 'book',
    price: -(Math.random()),
    count: 1,
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'books',
    receiptId: '1566049636735'
};

let itemNegativeCount: Item = {
    id: '1566049651679',
    name: 'book',
    price: 100,
    count:  -(Math.random()),
    salesTax: 0,
    importTax: 0,
    totalPrice: 0,
    type: 'books',
    receiptId: '1566049636735'
};

let invalidInputErrorMessage: String = "Invalid Inputs.Something is terribly wrong in the program.";

export const invalidInputParametersForCalculateTax = [
    {name: "#CalculateTax: Item Book with negative price", input: itemNegativePrice,result: invalidInputErrorMessage},
    {name: "#CalculateTax: Item Book with negative count", input: itemNegativeCount,result: invalidInputErrorMessage}
]

// Automated testing

// to generate random value from enum
function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(taxCategories)
      .map(n => Number.parseInt(n))
      .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
  }

// export const randomItems: Item[] = []
// Function to generate random Item objects
export function generateRandomItems(){
    // Item with random values
    let randomItems: Item[] = []
    for (let i = 0; i < 10; i++) {
        let random_item: Item = {
            id: String(Date.now()),
            name: (Math.random() + 1).toString(36).substring(7),
            price: Math.random(),
            count: Math.random(),
            salesTax: 0,
            importTax: 0,
            totalPrice: 0,
            type: randomEnum(taxCategories),
            receiptId: String(Date.now())
        };
        randomItems.push(random_item);
    }
    return randomItems;
}


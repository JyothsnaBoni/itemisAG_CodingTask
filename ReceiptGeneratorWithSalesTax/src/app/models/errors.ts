export enum ITEM {
    COUNT_LT_ZERO = "count should be a posititve integer.",
    PRICE_LT_ZERO = "price should be greater than 0.",
    SALES_TAX_LT_ZERO = "sales tax should be greater than 0.",
    IMPORT_TAX_LT_ZERO = "import tax should be greater than 0.",
    TOTAL_PRICE_LT_ZERO = "total price should be greater than 0.",
    INVALID_TYPE = "selected Item type is invalid.",
    SELECT_ITEM_TYPE = "please select an item type",
    ADD_ITEM_ERROR = "There was an error adding item to the basket."
  }

export enum RECEIPT {
    COUNT_LT_ZERO = "count should be a posititve integer.",
    PRICE_LT_ZERO = "price should be greater than 0.",
    SALES_TAX_LT_ZERO = "sales tax should be greater than 0.",
    IMPORT_TAX_LT_ZERO = "import tax should be greater than 0.",
    TOTAL_PRICE_LT_ZERO = "total price should be greater than 0.",
    INVALID_TYPE = "selected Item type is invalid.",
    SAVE_RECEIPT_ERROR = "There was an error saving the receipt.",
    EMPTY_BASKET_ERROR = "The basket is empty. Please minimum of one item to save the receipt",
    GET_RECEIPTS_ERROR = "There was an error while retrieving the receipt information."
  }
export enum SERVER {
    SERVER_NOT_FOUND = "404 Not Found: Requested service is not available",
    SERVER_NOT_AVAILABLE ="503 Service Unavailable: The server is not ready to handle the request.",
    SERVER_ERROR = "There was some error at the server side."
} 
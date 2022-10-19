export enum ITEM {
    COUNT_LT_ZERO = "count should be a posititve integer.",
    PRICE_LT_ZERO = "price should be greater than 0.",
    SALES_TAX_LT_ZERO = "sales tax should be greater than 0.",
    IMPORT_TAX_LT_ZERO = "import tax should be greater than 0.",
    TOTAL_PRICE_LT_ZERO = "total price should be greater than 0.",
    INVALID_TYPE = "selected Item type is invalid."
  }

export enum serverErrors {
    SERVER_NOT_FOUND = "404 Not Found: Requested service is not available",
} 
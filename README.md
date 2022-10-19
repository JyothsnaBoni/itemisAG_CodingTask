# itemisAG_CodingTask
This is a coding task given by  itemis AG Company, as a basic interview process. 

# Tech Stack Used

- Backend is a fake json server with `npm i json-server`. 
- The receipts data is stored in the `db.json` file under the `server` folder.

- The frontend(ReceiptGeneratorWithSalesTax) is developed using Angular. 

```
$ ng --version
Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.9
@angular-devkit/build-angular   13.3.9
@angular-devkit/core            13.3.9
@angular-devkit/schematics      13.3.9
@angular/cdk                    13.3.9
@angular/cli                    13.3.9
@angular/material               13.3.9
@schematics/angular             13.3.9
rxjs                            7.5.7
typescript                      4.6.4

```

# Usage

## Install dependencies
- Use the node package manager (npm) to install dependencies.
- Navigate to the folder `cd ReceiptGeneratorWithSalesTax`
- Run the followinf command.
```
$npm install

```

## Run the Server
- Navigate to the folder `cd ReceiptGeneratorWithSalesTax/server`
- Run the command ```json-server --watch db.json```
- open your browser on [localhost](http://localhost:3000)
- You can see the existing receipts in the browser under "Resources/receipts"
- or Navigate to [receipts](http://localhost:3000/receipts) to see the receipts json
- the server needs to be open for requests. 
- Make sure to leave the server running on the terminal.


## Run the client
- Navigate to the folder `cd ReceiptGeneratorWithSalesTax`
- Run the command ```ng serve```
- open your browser on [localhost](http://localhost:4200/)

## Application Usage
- You can click on the `settings` (second icon from left to right) icon on the top of the page to see how to use the app.
- The below instructions also help in the usage

### To create a receipt
- Enter the values for `name`, `price`, `count` and select the type of item. 
- click `Add Item` button.
- The item will be added to the basket and you can view it in the table below the `Receipt Generator` form.
- You can click on the `delete` icon to delete an item from the basket
- if you want to clear the complete basket, you can click `clear basket`
- Receipt preview is available below the shopping basket with the header `Tax Invoice/Bill`
- You can also view the preview of the invoice by clicking on the `Show Invoice Preview` button. Navigate back to the `receipt generator` by clicking on the `home` icon.
- On click `Print`, the receipt will be saved in the json db as well as you can see a preview of the print. If you want to proceed with print, you can click on print button in the preview page. After the `print` event, the `invoice` and the `Shopping Basket` will be cleared for new invoice.
- To check the receipt history, click on the `history` (third icon in order from left to right)icon on the top of the page.
- If you want to go back to the `Receipt Generator` click on the `home`(first icon from left) icon on the top of the page.
- In the receipt history window, you can print the receipt by clicking on the print icon button corresponding to each receipt in the table.

## TESTING:
- To run the tests go to the folder `cd ReceiptGeneratorWithSalesTax`
- execute the command `ng test`
- A new chrome browser window will be opened on `http://localhost:9876/`
- The executed test information can be found in the browser window.
- Check the test coverage summary using `ng test --no-watch --code-coverage`

````
=============================== Coverage summary ===============================
Statements   : 73.1% ( 174/238 )
Branches     : 68.96% ( 20/29 )
Functions    : 65.21% ( 30/46 )
Lines        : 72.17% ( 166/230 )
================================================================================
````
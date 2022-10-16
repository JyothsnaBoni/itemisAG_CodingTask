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
- On click `Print`, the receipt will be saved in the json db as well as you can see a preview of the print. If you want to proceed with print, you can click on print button in the preview page.
- To check the receipt history, click on the `history` (third icon in order from left to right)icon on the top of the page.
- If you want to go back to the `Receipt Generator` click on the `home`(first icon from left) icon on the top of the page.
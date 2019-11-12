# customer_MySql
Customer Mysql

App Overview:
Customer database is an back-end app that allows the user (customer) to browse the sales list and select an item which they may want. Once the unique ID has been entered, it will ask how many of the item you would like. Then it updates the stock on the database as well as sum up a total price.

User Experience:
The user enters their terminal and enters: "node mySql.js". This will then shoot out all of the products listed for sale. Two questions will be asked 1)"Do you see anything you like? Enter it's id" 2)"How many would you like?". Once the required information has been inputed. The list will update with the updated inventory stock of that item. If a quantity is entered and it's requesting more than what's in stock, a message is sent "Sorry, insufficient quantity. Try again.".

Issues:
Currently having issues getting my new stock inventory to update. Nice to haves will be to continue building this app and get to the more difficult scenarios such as accessing the app through a supervisors lens. 

Here you're greeted with the items available in-store...
<img width="1278" alt="Screen Shot 2019-11-11 at 8 58 21 PM" src="https://user-images.githubusercontent.com/54198484/68638344-da41c300-04c6-11ea-8a61-562fb99dc417.png">


Then you're asked which item you'd like to purchase:
<img width="1278" alt="Screen Shot 2019-11-11 at 8 58 38 PM" src="https://user-images.githubusercontent.com/54198484/68638345-dd3cb380-04c6-11ea-934d-20ce1d8a1dd3.png">


It will then ask how many of the item you would like to purchase & give you your total cost:
<img width="1278" alt="Screen Shot 2019-11-11 at 8 59 00 PM" src="https://user-images.githubusercontent.com/54198484/68638347-e037a400-04c6-11ea-954f-0485a71ccce5.png">


If you take a look at the item you bought, you will notice the quantity has now been updated  
<img width="1278" alt="Screen Shot 2019-11-11 at 8 59 11 PM" src="https://user-images.githubusercontent.com/54198484/68638353-e4fc5800-04c6-11ea-915c-6b561e358678.png">

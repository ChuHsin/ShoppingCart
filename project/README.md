# The Null Foods Market Shopping System

* Run with `npm install` and `npm start`

## Introduction
This is a shopping system, after login with your username, you can shop for lots of different products and have a checkout.

## Functionality

### Login
* Login with a username
    - only letter and number allowed
    - no password, but username "dog" is not allowed

### Shopping
* After login, get the shopping page
* left part for products or categories exhibition
* right part for cart exhibition
* A "Logout" button on the upper right conner for logout

### Products List
* You can check all products on the products list on left side of page
  * hover on a product can see price and stock of the product
  * click on "add to cart" button can choose quantity of product to add into your cart
    * after input quantity, click "add" button to add product into your cart
    * if product unit is "weight", you can input any number with decimal
    * if product unit is "number", you can only input integer, other input will be reject
    * if your input amount plus the amount of this product that already in your order exceed stock of this product, the input will be rejected
* You can choose three different ways to look for products
  * search by categories
    * after click, products list will show all categories stored on server
    * each product has its own categories, you can search specific product by choose a category
    * click a category to see all products under that category
  * search by keyword
    * after click, show a search bar, you can input a keyword and click "search" button to search for products that contain keyword in their name
  * search by pictures
    * show all products stored on server
  
### Cart
* You can see all products you have already added in cart section
* Products in your cart with their amount, unit price and total price of that product
* Total price of the whole order shows on the bottom
* A "Checkout" button shows on bottom of cart
  * after click it, current order will be cleaned,  will system will subtract amount of products on order from the stock of products on server
  * after checkout, render products again by searching with any method, you can see stock of product updated


## Reference

### Photos
Breads: <span>Photo by <a href="https://unsplash.com/@wesual?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Wesual Click</a> on <a href="https://unsplash.com/s/photos/bread?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Chips: <span>Photo by <a href="https://unsplash.com/@emilianovittoriosi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Emiliano Vittoriosi</a> on <a href="https://unsplash.com/s/photos/chips?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Pepsi:<span>Photo by <a href="https://unsplash.com/@morningbrew?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Morning Brew</a> on <a href="https://unsplash.com/s/photos/pepsi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Coke:<span>Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/s/photos/coke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Lotion:<span>Photo by <a href="https://unsplash.com/@deannaalys?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">deanna alys</a> on <a href="https://unsplash.com/s/photos/lotion?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Coffee:<span>Photo by <a href="https://unsplash.com/@asthetik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mike Kenneally</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Facial Cream:<span>Photo by <a href="https://unsplash.com/@ostshem?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anastasiia Ostapovych</a> on <a href="https://unsplash.com/s/photos/lotion?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Tooth Brush:<span>Photo by <a href="https://unsplash.com/@goby?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Goby</a> on <a href="https://unsplash.com/s/photos/toothbrush?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Towel:<span>Photo by <a href="https://unsplash.com/@candelarms?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">LumenSoft Technologies</a> on <a href="https://unsplash.com/s/photos/towel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
Paper Towel:<span>Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Erik Mclean</a> on <a href="https://unsplash.com/s/photos/paper-towel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

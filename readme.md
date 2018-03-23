working to create my own budget app with MEAN stack + interactive dashboard with d3 and dc.js


[] sketch out separate page views + user journeys
[] build out UI in express/node: build a static site (just a bunch of html screens)
[] design the data model and create the database
[] build a REST data api with Express and Node.js and hook the database into the application
[] embellish application with Angular



page views
============

1. dashboard with nav
    - buttons for entries: trans, balance, statement
    - buttons for setups: categories/goals, accounts
    - buttons for graphs: P&L, balance sheet, house
    - four summary graphs/tables/charts
2. transaction entry form - multi entry, cascading category field
3. account balance entry form - multi entry
4. account statement entry form - unpaid and paid
5. category + goal setup
6. account setup
7. P&L charts/tables/graphs interactive w/ commentary - immediate accounts
8. BS charts/tables/graphs interactive w/ commentary - immediate accounts
9. house charts/tables/graphs interactive w/ commentary
10. big picture - immediate + longterm accounts



components: transactions, accounts, categories?

accounts: list, details/edit, balance, statement??? --> could the balance page have a statement bool?
transactions: details/edit, list
categories: list, details/edit


You could use Node.js, Express, and MongoDB to build a fully functioning data-driven web application. And we’ll do just this as part of the book. But you can put some icing on the cake by adding Angular to the stack. The traditional way of doing things is to have all data processing and application logic on the server [SERVER SIDE], which then passes HTML to the browser. Angular enables you to move some or all of this processing and logic to the browser [CLIENT SIDE], often leaving the server just passing data from the database. We’ll take a look at this in a moment when we discuss data binding, but first we need to address the question of whether Angular is like jQuery, the leading front-end JavaScript library.

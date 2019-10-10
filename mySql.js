var mysql = require("mysql");
var inquirer = require("inquirer");
// var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "bamazon_db"
});

//Caused error:
// connection.connect();

// console.table(["product_name", "department_name", "price", "stock"], products);

connection.connect(function (err) {
    if (err) throw err;
    dispProd();
    // console.log(connection);
    // options();
});

function dispProd() {
    connection.query("SELECT * from products", function (error, results) {
        if (error) throw error;
        console.log(results);
        calTotal();
    });
}

function calTotal() {



    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Do you see anything you like? Enter it's id"
        },
        {
            type: "input",
            name: "quantity",
            message: "How many would you like?"
        }
    ]).then(function (ans) {
        // console.log(ans);
        var quantity = ans.quantity;
        connection.query(`SELECT * from products WHERE item_id = "${ans.id}"`, function (error, results) {
            if (error) throw error;
            // console.log(results[0].stock);
            if (results[0].stock > quantity) {
                console.log("You're in luck, you can buy! Your total is");
                var total = quantity * results[0].price;
                console.log(total);
                var newStock = results[0].stock - quantity;
                connection.query(
                    "UPDATE products SET stock = ? WHERE item_id = ?", [newStock, ans.id], function (error, results) {
                    if (error) throw error;
                    // console.log(results);
                    
                    console.log("All set, thank you and please come again!");

                })

                // connection.query("UPDATE products SET stock = " + newStock + "WHERE id = " + results[0].id, function (error, results) {
                //     if (error) throw error;
                //     console.log(results);

                //     console.log("All set, thank you and please come again!");

                // })

            }
            else {
                console.log("Sorry, insufficient quantity. Try again.");

            }
        });

    })

    //     .then(function(){
    //     var newStock = results[0].stock - quantity;

    // });
};
// .then(function(ans){
//     console.log(ans);
//     connection.query(`SELECT * from products where stock = "${ans.quantity}"`, function (error, results) {
//         if (error) throw error;
//         console.log(results);
//     });

// });


// function options() {
//     inquirer.prompt([
//         {
//             name: "sale",
//             message: "Proceed for Sale!"
//         }

//     ]).then(function (ans) {
//         console.log(ans);

//     })

// };

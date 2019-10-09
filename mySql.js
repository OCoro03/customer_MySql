var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "bamazon_db"
});

//Caused error:
// connection.connect();

connection.connect(function (err) {
    if (err) throw err;
    dispProd();
    // console.log(connection);
    // options();
});

function dispProd(){
    connection.query("SELECT * from products", function (error, results) {
        if (error) throw error;
        console.log(results);
        calTotal();
    });
}

function calTotal(){


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
]).then(function(ans){
    console.log(ans);
    connection.query(`SELECT * from products where item_id = "${ans.id}"`, function (error, results) {
        if (error) throw error;
        console.log(results[0].stock);
        if(results[0].stock > ans.quantity){
            console.log("you can buy");
            
        }
        else{
            console.log("insufficient quantity");
            
        }
    });
    
});
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

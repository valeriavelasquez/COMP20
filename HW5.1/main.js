function checkResponse(num_items, error_msg)
{
    if (Number.isInteger(Number(num_items)) && parseInt(num_items) >= 0)
        {
            num_items = parseInt(num_items);
        }
    if (parseInt(num_items) < 0 || !Number.isInteger(Number(num_items)))
        {
            num_items = prompt(error_msg);
        }
    else
        {
           num_items = parseInt(num_items);
        }
    return num_items;
}

var num_hotdogs = prompt("How many hotdogs?");
num_hotdogs = checkResponse(num_hotdogs, "Please enter a valid # of hotdogs");

var num_fries = prompt("How many fries?");
num_fries = checkResponse(num_fries, "Please enter a valid # of fries");

var num_soda = prompt("How many sodas?");
num_soda = checkResponse(num_soda, "Please enter a valid # of sodas");

var total = num_hotdogs * 3.25 + num_fries * 2.00 + num_soda * 1.50;

document.getElementById("hotdogs").innerHTML = "Hotdogs: " + num_hotdogs;
document.getElementById("fries").innerHTML = "French fries: " + num_fries;
document.getElementById("sodas").innerHTML = "Sodas: " + num_soda;

var display_sub = (total).toFixed(2);
var display_tax = (total * .0625).toFixed(2);
var display_total = (total * 1.0625).toFixed(2);
var display_discount = (display_total * .9).toFixed(2);

if (total >= 20)
    {
        document.write("<br><br> You are saving 10% off of your order! <br> New total: $" + display_discount);
        total = display_discount;
    }
                       
document.getElementById("subtotal").innerHTML = "Subtotal: $" + display_sub;
document.getElementById("tax").innerHTML = "Tax: $" + display_tax;
document.getElementById("total").innerHTML = "Total: $" + display_total;
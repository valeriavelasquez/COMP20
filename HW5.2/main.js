// Grabbing input
var win_pick = prompt("Enter 5 winning numbers separated by a space");
var lucky_pick = prompt("Enter lucky ball number");
var input = win_pick.trim().split(" ");

// Generating random numbers
var arr_numbers = [];

while (arr_numbers.length < 5)
{
    var randoms = Math.floor(Math.random() * 48) + 1;
    if (!arr_numbers.includes(randoms))
    {
        arr_numbers.push(randoms);
    }
}

var lucky_ball = Math.floor(Math.random() * 18) + 1;

// To count whether numbers match
var match_count, luck_count = 0;

for (var i = 0; i < arr_numbers.length; i++)
{
    if (input.includes(arr_numbers[i].toString()))
    {
        match_count++;
    }
}

if (lucky_pick == lucky_ball)
{
    luck_count++;
}

// Least to greatest sort
arr_numbers.sort(function(a, b){return a - b});

// Display
document.write("The winning numbers are: ");

for (i = 0; i < arr_numbers.length; i++)
{
    document.write(arr_numbers[i] + " ");
}

var displayed_nums = []; 

for (i = 0; i < input.length; i++)
{
    displayed_nums.push(parseInt(input[i]));
}

displayed_nums.sort(function(a, b){return a - b});

document.write("</br> The lucky ball number is: " + lucky_ball);

document.write("</br></br> Your quick pick numbers are: ");
for (i = 0; i < displayed_nums.length; i++)
{
    document.write(displayed_nums[i] + " ");
}

document.write("</br> Your lucky ball number is: " + lucky_pick + "</br></br>");

// Payout
function findPayout(match, lucky)
{
    if (match == 5 && lucky == 1)
        document.write("Congrats! You won $7000 a WEEK for LIFE!");
    else if (match == 5 && lucky == 0)
        document.write("Congrats! You won $25,000 a YEAR for LIFE!");
    else if (match == 4 && lucky == 1)
        document.write("Congrats! You won $5000");
    else if (match == 4 && lucky == 0)
        document.write("Congrats! You won $200");
    else if (match == 3 && lucky == 1)
        document.write("Congrats! You won $150");
    else if (match == 3 && lucky == 0)
        document.write("Congrats! You won $20");
    else if (match == 2 && lucky == 1)
        document.write("Congrats! You won $25");
    else if (match == 2 && lucky == 0)
        document.write("Congrats! You won $3");
    else if (match == 1 && lucky == 1)
        document.write("Congrats! You won $6");
    else if (match == 0 && lucky == 1)
        document.write("Congrats! You won $4");
    else
        document.write("Try again next time!");
}

findPayout(match_count, luck_count);
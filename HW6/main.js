function calc()
{
    var first = document.getElementById("num1").value;
    var sec = document.getElementById("num2").value;
    display(first, sec);
    isAmicable(first, sec);
    
    /* test isFactor()
    alert(isFactor(1, 0));
    alert(isFactor(10, 2));
    */

    /* test showArray()
    testNumbers = [1,2,3,4,5];
    showArray(testNumbers);
    */
    
    /* test addArray()
    testNumbers = [1, 2, 3, 4, 5];
    alert("Sum = " + addArray(testNumbers)); // expect: 15
    testNumbers2 = [10, 20, 30, 40];
    alert("Sum = " + addArray(testNumbers2)); // expect: 100
    */
    
    /* test getFactors()
    alert("Factors = " + getFactors(10)); // expect: 1,2,5
    alert("Factors = " + getFactors(8)); // expect: 1,2,4
    */

}

// reads and displays numbers in a div
function display(num1, num2)
{
    document.getElementById("displayer").innerHTML="<br/>numbers inputted: " + num1 + " and " + num2;
}

// isFactor() takes number and pos factor
// return true if amicable
function isFactor(num1, num2)
{
    if(num1 % num2 == 0)
        return true;
    return false;
}

// showArray() takes array in and displays items in div
function showArray(numArray)
{
  document.getElementById("displayer").innerHTML += "<br/>" + numArray;
}

// addArray() takes array in and returns sum of elements
function addArray(numArray)
{
    let sum = 0;
    for(i = 0; i < numArray.length; i++)
        sum += numArray[i];
    return sum;
}

// getFactors() takes num and returns array with all possible factors
function getFactors(num)
{
    const numArray = [];
    
    for (i = 1; i < num; i++)
        if (isFactor(num, i))
            numArray.push(i);
    return numArray;
}

// event handler to display if amicable.
function isAmicable(num1, num2)
{
    var first = getFactors(num1);
    var sec = getFactors(num2);
    
    document.getElementById("displayer").innerHTML += "<br/><br/>factors of " + num1 + ": " + first;
    document.getElementById("displayer").innerHTML += "<br/>factors of " + num2 + ": " + sec;

    var firstSums = addArray(first);
    var secSums = addArray(sec);
    
    document.getElementById("displayer").innerHTML += "<br/><br/>sum of factors of " + num1 + ": " + firstSums;
    document.getElementById("displayer").innerHTML += "<br/>sum of factors of " + num2 + ": " + secSums;

    if (firstSums == sec && secSums == first)
    {
        document.getElementById("displayer").innerHTML += "<br/><br/>" + num1 + " and " + num2 + " are amicable."
    } else {
        document.getElementById("displayer").innerHTML += "<br/><br/>" + num1 + " and " + num2 + " are not amicable."
    }
}

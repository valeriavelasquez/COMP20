function switchSide()
{
    var input, input2, onLeft;
    var direct = document.getElementById("button").value;

    if(direct == "-->")
    {
        input = document.getElementById("first").value;
        onLeft = true;
    }else{
        onLeft = false;
        input2 = document.getElementById("sec").value;
    }

    if(input.match(/\S/))
    {
        if(onLeft)
        {
            document.getElementById("sec").value = input;
            document.getElementById("button").value = "<--";
            document.getElementById("first").value = input2;   
        }else{
            document.getElementById("first").value = input2;
            document.getElementById("button").value = "-->";
            document.getElementById("sec").value = input;   
        }
    }
}
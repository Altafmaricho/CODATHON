<!DOCTYPE html>
<html> 
<head> 
    <title>My first script</title> 
<script src="intro.js"></script> 

</head>

<body> 
    <noscript> 
    <h2>This page requires JavaScript.</h2> 
    </noscript> 
    <h1> 
        <script> 
            function generateNumber() { 
                var columnLabel = new Array("B", "I", "N", "G", "O"); 
        var columnIndex = Math.floor(Math.random() * 5); 
        var newNum = Math.floor(Math.random() * 15) + 1 
        + (columnIndex * 15); 
    return new Array(columnLabel[columnIndex], newNum); 
} 
    return Math.floor(Math.random() * 75) + 1; 
} 
        function displayNumber() { 
        var number = generateNumber(); 
        document.getElementById("number").innerHTML = 
        "The next BINGO number is: " + number; 
        number[0] + " - " + number[1]; 
}  
            </script> 
            
    </h1> 
    </body> 
    </html> 
    
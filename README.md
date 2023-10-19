<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="calculator.css">
    <link rel="icon" href="calculator.svg">
    <link href="/dist/output.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Croissant+One&family=Handjet:wght@300&family=Kablammo&family=Open+Sans:wght@300&family=Poppins:wght@100&family=Roboto+Mono:wght@100&family=Ysabeau+Office:ital@1&display=swap" rel="stylesheet">
</head>

<body>





    <div class="grid-container">


        <img src="linkedin.svg" alt="LinkedIn">
        <p style="left: 65px; top: 2px;">Khalid_Oumima</p>



        <div class="screen">
            <input id="display" value="0" disabled="disabled">
        </div>

        <button onclick="clearDisplay()" class="grid-item0 reset" id="btn" style="background: coral;font-size: 20px;">RESET</button>
        <button onclick="deleteLastCharacter()" class="grid-item1 delete" id="btn" style="background: #ff4a4a;font-size: 20px;">DEL</button>
        <button onclick="appendToDisplay('/')" class="grid-item2 sign" id="btn" style="line-height: 1;">÷</button>
        <button onclick="appendToDisplay('*')" class="grid-item3 sign" id="btn" style="line-height: 1.8;">*</button>
        <button onclick="appendToDisplay('+')" class="grid-item4 sign">+</button>
        <button onclick="appendToDisplay('7')" class="grid-item5 numbers">7</button>
        <button onclick="appendToDisplay('8')" class="grid-item6 numbers">8</button>
        <button onclick="appendToDisplay('9')" class="grid-item7 numbers">9</button>
        <button onclick="appendToDisplay('4')" class="grid-item8 numbers">4</button>
        <button onclick="appendToDisplay('5')" class="grid-item9 numbers">5</button>
        <button onclick="appendToDisplay('6')" class="grid-item10 numbers">6</button>
        <button onclick="appendToDisplay('1')" class="grid-item11 numbers">1</button>
        <button onclick="appendToDisplay('2')" class="grid-item12 numbers">2</button>
        <button onclick="appendToDisplay('3')" class="grid-item13 numbers">3</button>
        <button onclick="appendToDisplay('0')" class="grid-item14 numbers" id="zero">0</button>
        <button onclick="appendToDisplay('.')" class="grid-item15 comma numbers">.</button>
        <button onclick="calculate()" class="grid-item16 equal" id="equal">=</button>
        <button onclick="appendToDisplay('-')" class="grid-item17 sign">-</button>

    </div>


    <script src="calculator.js"></script>
</body>

</html>

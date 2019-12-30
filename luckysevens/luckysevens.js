/*
File: luckysevens.js
Creator:  Christopher Aguirre
Date Created:  Dec. 27, 2019
Last Modified: December 30, 2019
*/


// Start of function verify

function verify() {
  clearErrors();

  var bet = document.getElementById("bet").value;

  if (bet == "" || isNaN(bet)) {
      alert("Please place dollar amount to begin betting.");
      document.getElementById("bet").className="error";
      document.getElementById("bet").focus();
      return;
  }

  // parseFloat takes input (type string) and turns into float.
  // toFixed returns string.
  // Convert back to float.
  bet = parseFloat(parseFloat(document.getElementById("bet").value).toFixed(2));


  if (bet<=0) {
    alert("Please place bet larger that $0.00, PUT SOME SKIN IN THE GAME!");
    document.getElementById("bet").className="error";
    document.getElementById("bet").focus();
    return;
  }

  play(bet);

// End of fucntion verify
}

function play(bet) {
  var money = bet;
  var maxMoney = money;
  var rolls = 0;
  var rollAtMax = 0;


// start of while Loop
  while (money > 0) {

    var diceRoll = rollDice();

    if (diceRoll == 7) {
      money = money + 4;
    } else {
      money = money - 1;
    }

    rolls++;

    if (money > maxMoney) {
      maxMoney = money;
      rollAtMax = rolls;
    }

    // end of while LooP (money > 0)

  }

  document.getElementById('resultBet').innerText = bet;
  document.getElementById('resultRollsBeforeBroke').innerText = rolls;
  document.getElementById('resultMaxMoney').innerText = maxMoney;
  document.getElementById('resultRollAtMax').innerText = rollAtMax;
  document.getElementById("results").style.display="block";
  document.getElementById("play").innerText="Play Again";
}

function rollDice() {
  return (roll6sided() + roll6sided());
}

function roll6sided() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}

function clearErrors() {
  document.getElementById("bet").className="";
}

function reset() {
  document.getElementById("results").style.display="none";
  document.getElementById("bet").value = "0.00";
  document.getElementById("play").innerText = "Play";
}

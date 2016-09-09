window.onload = function(){
  var main = document.getElementById('main');
  var roll = document.getElementById('roll');
  var add  = document.getElementById('add');
  var check = document.getElementById('checkForWin');
  var dice;

  add.addEventListener("click", function(){
    addDie();
  });
  roll.addEventListener("click", function(){
    rollDie();
  });
  check.addEventListener("click", function(){
    checkForWin();
  });

  function addDie(){
    var die  = document.createElement('div');
    die.setAttribute('class', 'die');
    die.innerHTML = random();
    main.appendChild(die)
  };

  function rollDie() {
    dice = document.getElementsByClassName('die');
    for (var i = 0; i < dice.length; i++) {
      dice[i].innerHTML = random();
    };
  };

  function random(){
    return Math.floor(Math.random() * (7));
  }

  function checkForWin(){
    dice = document.getElementsByClassName('die');
    for(var i = 1; i < dice.length; i++){
      var value = dice[0].innerHTML;
      var check = dice[i].innerHTML;
      if(check == value){
         var win  = document.createElement('div');
         win.setAttribute('class', 'winner');
         var winnerMessage = "You values are all the same you win!"
         win.innerHTML = winnerMessage
         main.appendChild(win)
        return true;
      } else {
         var lose  = document.createElement('div');
         lose.setAttribute('class', 'loser');
         var loserMessage = "You values are NOT all the same you lose."
         lose.innerHTML = loserMessage
         main.appendChild(lose)
        return false;
      };
    };
  };
};

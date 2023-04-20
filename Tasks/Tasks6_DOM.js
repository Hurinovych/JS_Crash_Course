//1
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').innerHTML = timeString;
}

setInterval(updateTime, 1000);

//2
function dealCards() {
    var player1Cards = [];
    var player2Cards = [];
    var suits = ['♥', '♦', '♣', '♠'];
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    
    for (var i = 0; i < 6; i++) {
      var suitIndex = Math.floor(Math.random() * suits.length);
      var valueIndex = Math.floor(Math.random() * values.length);
      var card = values[valueIndex] + suits[suitIndex];
      player1Cards.push(card);
      
      suitIndex = Math.floor(Math.random() * suits.length);
      valueIndex = Math.floor(Math.random() * values.length);
      card = values[valueIndex] + suits[suitIndex];
      player2Cards.push(card);
    }
    
    var player1CardsElem = document.getElementById('player1-cards');
    var player2CardsElem = document.getElementById('player2-cards');
    
    
    for (var i = 0; i < player1Cards.length; i++) {
        var cardElem = document.createElement('div');
        cardElem.textContent = player1Cards[i];
        cardElem.style.display = 'inline-block';
        cardElem.style.border = '1px solid black';
        cardElem.style.padding = '10px';
        cardElem.style.marginRight = '10px';
        
        if (player1Cards[i].includes('♥') || player1Cards[i].includes('♦')) {
          cardElem.style.color = 'red';
        } else {
          cardElem.style.color = 'black';
        }
        
        player1CardsElem.appendChild(cardElem);
      }
      
      for (var i = 0; i < player2Cards.length; i++) {
        var cardElem = document.createElement('div');
        cardElem.textContent = player2Cards[i];
        cardElem.style.display = 'inline-block';
        cardElem.style.border = '1px solid black';
        cardElem.style.padding = '10px';
        cardElem.style.marginRight = '10px';
        
        if (player2Cards[i].includes('♥') || player2Cards[i].includes('♦')) {
          cardElem.style.color = 'red';
        } else {
          cardElem.style.color = 'black';
        }
        
        player2CardsElem.appendChild(cardElem);
      }
}
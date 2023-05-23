const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('.start'),
    restart: document.querySelector('.restart'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const shuffle = array => {
    const clonedArray = [...array];

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        const original = clonedArray[index];

        clonedArray[index] = clonedArray[randomIndex];
        clonedArray[randomIndex] = original;
    }

    return clonedArray;
}

const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length);
        
        randomPicks.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }

    return randomPicks;
}

const generateGame = () => {
    const sizeSelect = document.getElementById('size');
    const selectedSize = sizeSelect.value;
    const [rows, columns] = selectedSize.split('x');
    if (rows * columns % 2 !== 0) {
        throw new Error("The size of the board must be an even number.");
    }

    const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🍭', '🥙', '🧃', '🥦', '🌶', '🧄', '🧅', '🍄'];
    const picks = pickRandom(emojis, (rows * columns) / 2);
    const items = shuffle([...picks, ...picks]);
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${columns}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `;
    
    const parser = new DOMParser().parseFromString(cards, 'text/html');

    selectors.board.innerHTML = ''; 
    selectors.board.appendChild(parser.querySelector('.board'));
}

const startGame = () => {
    if (state.loop) {
        clearInterval(state.loop);
        state.loop = null;
    }

    state.gameStarted = true;
    selectors.start.classList.add('disabled');
    selectors.restart.classList.remove('hidden');

    state.loop = setInterval(() => {
        state.totalTime++;

        selectors.moves.innerText = `${state.totalFlips} moves`;
        selectors.timer.innerText = `time: ${state.totalTime} sec`;
    }, 1000);

    generateGame(); 
    selectors.board.style.padding = '10px';
};

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    })

    state.flippedCards = 0;
}

const flipCard = card => {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || state.flippedCards === 2) {
        return;
    }

    state.flippedCards++;
    card.classList.add('flipped');

    if (!state.gameStarted) {
        startGame();
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards();
        }, 1000);

        state.totalFlips++;
    }

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');
            selectors.win.innerHTML = `
                <span class="win-text">
                    🎉You won!🎉<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `;

            clearInterval(state.loop);
        }, 1000);
    }
}

const restartGame = () => {
    clearInterval(state.loop);
    state.gameStarted = false;
    state.flippedCards = 0;
    state.totalFlips = 0;
    state.totalTime = 0;
    selectors.start.classList.remove('disabled');
    selectors.boardContainer.classList.remove('flipped');
    selectors.win.innerHTML = '';

    closeAllCards();

    setTimeout(() => {
        generateGame();
        attachEventListeners();
        shuffleCards(); 
    }, 200);
};

const shuffleCards = () => {
    const cards = document.querySelectorAll('.card');
    const shuffledCards = shuffle(Array.from(cards));
    
    shuffledCards.forEach((card, index) => {
        card.style.order = index;
    });
};

const closeAllCards = () => {
    const cards = document.querySelectorAll('.card');
    Array.from(cards).forEach(card => {
        card.classList.remove('flipped');
        card.classList.remove('matched');
    });
};

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        const eventParent = eventTarget.parentElement;

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent);
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame();
        }
    })
    selectors.restart.addEventListener('click', restartGame);
}

attachEventListeners();
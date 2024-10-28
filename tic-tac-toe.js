document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    
    squares.forEach(square => {
        square.classList.add('square');
    });
});

window.onload = function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';  

    squares.forEach(square => {
        square.addEventListener('click', function() {

            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
};

window.onload = function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; 

    squares.forEach(square => {
      
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseenter', function() {
            square.classList.add('hover');
        });

      
        square.addEventListener('mouseleave', function() {
            square.classList.remove('hover');
        });
    });
};

window.onload = function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';  
    let gameActive = true;  

    const winConditions = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ];

    
    function checkWinner() {
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (
                squares[a].textContent === currentPlayer &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                return true;
            }
        }
        return false;
    }


    squares.forEach(square => {
        square.addEventListener('click', function() {
            if (gameActive && square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

              
                if (checkWinner()) {
                    const status = document.getElementById('status');
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                    gameActive = false;  
                } else {
                    
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        square.addEventListener('mouseenter', function() {
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', function() {
            square.classList.remove('hover');
        });
    });
};

export function over(gameBlock) {
    let audio = new Audio("audio/scream.wav")
    audio.play()
    let over = document.createElement('div');
    let head = document.createElement('h2');
    let gameScore = document.createElement('p')
    head.textContent = "Game Over";
    over.classList.add('over');
    gameScore.textContent = "Score: " + document.getElementById('clock').textContent;
    gameBlock.appendChild(over);
    over.appendChild(head);
    over.appendChild(gameScore);
    over.id = 'over';
}
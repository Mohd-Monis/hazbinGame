import { over } from "../game_events/game_over.js";

export class Angel {

    constructor(y,gameBlock,angels,gameOver,speed = 8) {
        this.speed = speed
        this.game = gameOver;
        this.angel = document.createElement("img");
        this.angel.id = "angel"
        this.angels = angels;
        this.angel.src = "images/alastor.webp";
        this.angel.classList.add("Angel");
        this.angel.style.position = "absolute";
        this.killed = false;
        this.gameBlock = gameBlock;
        this.position = {
            x: 1300,
            y: Math.random()* 400 + 80
        }
        this.angel.style.left = String(this.position.x) + "px";
        this.angel.style.top = String(this.position.y) + "px";
        gameBlock.appendChild(this.angel);
        angels.push(this)
    }

    move = () => {
        if(this.game.over) return;
        this.position.x -= this.speed;
        this.angel.style.left = String(this.position.x) + "px";
        if(this.position.x < 250) {
            let score = document.getElementById("clock").textContent;
            over(this.gameBlock);
            this.game.over = true;
            return;
        }
        if(this.killed){
            // this.angel.style.display = "none";
            this.gameBlock.removeChild(this.angel)
            return;
        }
        setTimeout(this.move,1)
    }
};
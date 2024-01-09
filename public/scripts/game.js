import { timer } from "./game_events/timer.js";
import { fire } from "./game_events/fire.js"
import { Angel } from "./game_classes/angel.js";
import { Player } from "./game_classes/player.js";
import { attack } from "./game_events/angel_attack.js";
let angels = [];

let gameOver = {over: false};
const clock = document.getElementById("clock");
timer(clock,gameOver)
let gameBlock = document.getElementById("gameBlock");
fire.bind(angels)
fire.bind(gameOver)


attack(angels,gameOver)

let player = new Player(gameBlock,gameOver);
player.giveMovement()


document.addEventListener("keydown", function (event) {
    fire(event, angels, player,gameOver)
})
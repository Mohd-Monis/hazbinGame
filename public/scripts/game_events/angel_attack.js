import { Angel } from "../game_classes/angel.js";

export function attack(angels,game,lapse = 3000,speed = 2) {
    speed += (10 - speed)/20;
    let time = Math.random() * 1000 + lapse;
    if(lapse > 500) lapse-= 50;
    const a = new Angel(3, gameBlock, angels,game,speed);
    a.move()
    setTimeout( function(){
        if(!game.over)
        attack(angels,game,lapse,speed)
    }, time)

}
import { Fire } from "../game_classes/fire.js"
export function fire(event,angels,alastor,game){
    console.log("active")
    if(event.keyCode == 32 && !game.over)
    {
        let fire = new Fire(3,gameBlock,angels,alastor);
        fire.move()
    }
}




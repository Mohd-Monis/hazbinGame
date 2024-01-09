export function timer(myobj,game){
    myobj.textContent = parseInt(myobj.textContent) +  1;
    setTimeout(() => {
        if(!game.over)
        timer(myobj,game);
    },200);
}
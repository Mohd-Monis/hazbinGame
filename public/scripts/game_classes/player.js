export class Player {
    giveMovement() {
        let alastor = this.alastor
        let y = this.y;
        let t = this;
        let game = this.game;
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowUp" && !game.over) {
                if(t.y > 120)
                t.y -= 60;
                t.alastor.style.top = String(t.y) + "px";
            }
            else if (event.key == "ArrowDown" && !game.over){
                if(t.y < 500){
                    t.y += 60;
                }
                t.alastor.style.top = String(t.y) + "px";
            }
            else if (event.key == "ArrowRight" && !game.over){
                t.x+= 30;
                t.alastor.style.left = String(t.x) + "px";
            }
            else if (event.key == "ArrowLeft" && !game.over){
                t.x-= 30;
                t.alastor.style.left = String(t.x) + "px";
            }
        })
    }
    constructor(gameBlock,game) {
        let alastor = document.createElement("img");
        alastor.src = "images/alastor.webp";
        alastor.style.position = "absolute";
        alastor.style.top = "300px";
        alastor.style.left = "350px"
        alastor.id = "alastor"
        this.y = 300;
        this.x = 350;
        this.game = game;
        gameBlock.appendChild(alastor);
        console.log("GACE")
        console.log(this.game)
        console.log("GACE")
        this.alastor = alastor;
        
        this.giveMovement.bind(this);
    }


}
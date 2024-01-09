export class Fire {
    destroy(){
        console.log("destroyed")
    }
    constructor(y,gameBlock,angels,alastor) {
        let fireBall = document.createElement("img");

        this.fireBall = fireBall
        this.position = {
            x: alastor.x + 50,
            y: alastor.y
        }
        this.angels = angels;
        this.gameBlock = gameBlock;
        this.width = 100;
        this.height = 100;
        fireBall.src="../../images/fireball.jpg"
        fireBall.style.width = "100px";
        fireBall.style.height = "100px";
        fireBall.style.borderRadius = "50%"
        fireBall.style.position="absolute"
        fireBall.style.left = String(this.position.x) + "px"
        fireBall.style.top = String(alastor.y) + "px"
        gameBlock.appendChild(fireBall)
    }
    blast = () =>{
        if(this.width < 150){
            this.width += 1;
            this.height += 1;
            this.position.y -= 0.5;
            this.position.x -= 0.5;
            this.fireBall.style.width = String(this.width) + "px";
            this.fireBall.style.height = String(this.height) + "px";
            this.fireBall.style.top = String(this.position.y) + "px";
            this.fireBall.style.left = String(this.position.x) + "px";
            setTimeout(this.blast,2);
        }
        else{
            this.gameBlock.removeChild(this.fireBall)
            return;
        }
    }
    move = () => {
        this.position.x += 3;
        if(this.position.x > 1800){
            this.fireBall.style.display = "none"
            return;
        }
        this.fireBall.style.left = String(this.position.x) + "px";
        for(let j = 0; j < this.angels.length; j++){
            let i = this.angels[j];
            if(Math.abs(i.position.x - this.position.x ) < 60 && ((this.position.y - i.position.y < 160) && ((this.position.y - i.position.y) > -80))){
                i.killed = true;
                let audio = new Audio("audio/blast.wav");
                audio.play();
                this.angels.splice(j,1);
                this.fireBall.src = "../../images/image.jpg";
                this.blast()
                // this.gameBlock.removeChild(this.fireBall)
                return this.destroy();
            } 
        }
        setTimeout(this.move,1)
    }
};
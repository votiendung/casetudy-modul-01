let bg = function (game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    let self = this;
    this.x = 0;

    this.init = function () {

        this.loadImage();
    }
    this.loadImage = function () {
        this.image = new Image();
        this.image.onload = function () {
            self.loaded = true;
        }
        this.image.src = "assets/sprites/bg-night.png";
    }
    this.update = function () {
        if (this.game.gameOver) {
            return ;
        }
        this.x--;
        if (this.x == -288) {
            this.x = 0;
        }

    }
    this.draw = function () {
        // console.log('this.image');
        if (self.loaded == false) {
            return;
        }
        self.game.context.drawImage(this.image, this.x, 0);
        self.game.context.drawImage(this.image, this.x + 288, 0);
        // console.log('draw');
    }
    this.endBackGround = function (){
        this.image = "assets/sprites/gameover.png";
    }
}
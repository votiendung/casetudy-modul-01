let pipe = function (game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    let self = this;
    this.x = 300;
    this.y = 320;

    this.init = function () {
        this.loadImage();
    }
    this.loadImage = function () {
        this.image = new Image();
        this.image.onload = function () {
            self.loaded = true;
        }
        this.image.src = "assets/sprites/pipe-green.png";
    }
    this.update = function () {
        if (this.game.gameOver) {
            return ;
        }
        this.x -= 2;
        if (this.x == -54) {
            this.x = 300;
            this.y = Math.floor(200 + Math.random()*200 );
        }

    }
    this.draw = function () {
        // console.log('this.image');
        if (self.loaded == false) {
            return;
        }
        self.game.context.drawImage(this.image, this.x, this.y - 200 - 320);
        self.game.context.drawImage(this.image, this.x, this.y);
    }
}
let bg = function (game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    let self = this;

    this.init = function () {
        this.loadImage();
    }
    this.loadImage = function () {
        this.image = new Image();
        this.image.onload = function () {
            self.loaded = true;
            console.log('image loaded');
        }
        this.image.src = "assets/sprites/bg-night.png"
    }
    this.update = function () {

    }
    this.draw = function () {
        console.log('this.image');
        if (self.loaded==false) {
            return ;
        }
        console.log('draw');
        self.game.context.drawImage(this.image, 0, 0);
    }
}

function startGame() {
    let game = new myGameArea();
    game.start();
    let background = new Background(game.context);
}

const myGameArea = function() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 288;
    this.canvas.height = 512;
    this.context = this.canvas.getContext("2d");
    this.start = function () {
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

}

function Background(ctx) {
    let image = new Image();
    image.src = "./assets/sprites/background-night.png";
    image.addEventListener('load', function () {
        ctx.drawImage(image, 0, 0, 288, 512);
    }, false);
}

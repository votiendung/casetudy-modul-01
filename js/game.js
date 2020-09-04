let game = function () {
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height = 512;

    this.bird = null;
    this.bg = null;
    this.base = null;
    this.pipe = null;

    this.gameOver = false;

    let self = this;





    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        // document.body.insertBefore(this.canvas, document.body.childNodes[0])

        document.body.appendChild(this.canvas);

        this.bird = new bird(this);
        this.bird.init();

        this.bg = new bg(this);
        this.bg.init();

        this.base = new base(this);
        this.base.init();

        this.pipe = new pipe(this);
        this.pipe.init();


        this.listenMouse();

        this.loop();
    }

    this.listenMouse = function () {
        this.canvas.addEventListener('click', function (){
            self.bird.flap();
        });
    }

    this.loop = function () {
        self.update();
        self.draw();
        setTimeout(self.loop, 30);
    }

    this.update = function () {
        this.bird.update();
        this.bg.update();
        this.base.update();
        this.pipe.update();
    }
    this.draw = function () {
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
    }


}
function startGame() {
    let g = new game();
    g.init();

}
startGame();

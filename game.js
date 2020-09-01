let game = function () {
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height = 512;

    this.bird = null;
    this.bg = null;

    let self = this;
    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.insertBefore(this.canvas, document.body.childNodes[0])

        // document.body.appendChild(this.canvas);
        this.bird = new bird(this);
        this.bird.init();

        this.bg = new bg(this);
        this.bg.init();
        this.loop();
    }

    this.loop = function () {
        self.update();
        self.draw();
        setTimeout(self.loop, 30);
    }

    this.update = function () {
        this.bird.update();
        this.bg.update();
    }
    this.draw = function () {
        this.bird.draw();
        this.bg.draw();
    }


}

let g = new game();
g.init();
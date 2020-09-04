let bird = function (game) {
    this.game = game;
    this.images = [];
    this.loaded = false;
    this.img1loaded = false;
    this.img2loaded = false;
    this.img3loaded = false;

    this.currentImageIndex = 0;
    this.currentImage = null;
    this.currentFrame = 0;

    this.x = 70;
    this.y = 0;
    this.speedY = 0;
    this.acceleration = 1.5;
    this.direction = 'down';

    self = this;

    let score = 0;

    let point = new Audio();
    point.src = "./assets/audio/point.wav";
    let die = new Audio();
    die.src = "./assets/audio/die.wav";
    let wing = new Audio();
    wing.src = "./assets/audio/wing.wav";
    let hit = new Audio();
    hit.src = "./assets/audio/hit.wav";


    this.init = function () {
        this.loadImages();
    }
    this.loadImages = function () {
        let img1 = new Image();
        let img2 = new Image();
        let img3 = new Image();
        img1.onload = function () {
            self.img1loaded = true;
            self.currentImage = img1;
            self.images.push(img1);

        }
        img2.onload = function () {
            self.img2loaded = true;
            self.images.push(img2);

        }
        img3.onload = function () {
            self.img3loaded = true;
            self.images.push(img3);

        }

        img1.src = "assets/sprites/bird-down.png";
        img2.src = "assets/sprites/bird-mid.png";
        img3.src = "assets/sprites/bird-up.png";


    }
    this.update = function () {

        if (!self.img1loaded || !self.img2loaded || !self.img3loaded) {
            return;
        }

        self.currentFrame++;
        if (self.currentFrame % 3 == 0) {
            self.changeImage();
        }
        if (this.y <= 470) {
            if (this.direction = 'down') {
                this.speedY += this.acceleration;

            } else {
                this.speedY -= this.acceleration;
            }
            this.y += this.speedY;
        }
        if (this.y > 400) {
            this.y = 400;
        }

        if (this.y >= 400) {
            this.game.gameOver = true;
            alert('GAME OVER SCORE: ' + score);
            die.play();
            die.stop();

        }

        this.checkHitPipe();

    }


    this.checkHitPipe = function () {
        if (
            (
                this.x + 34 > this.game.pipe.x &&
                this.x < this.game.pipe.x + 52
            ) &&
            (
                (this.y < this.game.pipe.y - 200) ||
                (this.y + 24 > this.game.pipe.y)
            )
        ) {
            this.game.gameOver = true;
            hit.play();
            alert('GAME OVER SCORE: ' + score);
            hit.stop();

        }


        if (this.x == this.game.pipe.x + 52) {
            if (this.y < this.game.pipe.y + 200 - this.y) {
                score++;
                point.play();
                document.getElementById('score').innerHTML = "SCORE: " + score;
            }
        }
    }


    this.flap = function () {
        if (this.game.gameOver) {
            return;
        }
        this.speedY = -17;
        wing.play();

    }

    this.changeImage = function () {
        if (this.game.gameOver) {
            return;
        }
        if (this.currentImageIndex == 2) {
            this.currentImageIndex = 0;
        } else {
            this.currentImageIndex++;
        }
        this.currentImage = this.images[this.currentImageIndex];
    }

    this.draw = function () {
        if (self.img1loaded && self.img2loaded && self.img3loaded) {
            self.game.context.drawImage(self.currentImage, this.x, this.y);
        }
    }

}

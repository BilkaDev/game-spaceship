export class Spaceship {
    #modifier = 5;
    #leftArrow = false;
    #rightArrow = false;
    constructor(element) {
        this.element = element;
    }


    init() {
        this.#setPosition();
        this.#eventListener();
        this.#gameLoop();

    }


    #setPosition() {
        this.element.style.bottom = '0';
        this.element.style.left = `${window.innerWidth / 2 - this.#getPosition() }px`;
    }
    #getPosition() {
        return this.element.offsetLeft + this.element.offsetWidth / 2
    }

    #eventListener() {
        window.addEventListener('keydown',({keyCode}) => {
            switch (keyCode) {
                case 37:
                    this.#leftArrow = true;
                    break
                case 39:
                    this.#rightArrow = true;
                    break
            }
        })

        window.addEventListener('keyup',({keyCode}) => {
            switch (keyCode) {
                case 37:
                    this.#leftArrow = false;
                    break
                case 39:
                    this.#rightArrow = false;
                    break
            }
        })
    }

    #gameLoop = () => {
        this.#whatKey();

        requestAnimationFrame(this.#gameLoop);

    };

    #whatKey() {
        if(this.#leftArrow && this.#getPosition() > 0) {
            this.element.style.left = `${parseInt(this.element.style.left, 10) - this.#modifier}px`;
        }
        if (this.#rightArrow && this.#getPosition() < window.innerWidth){
            this.element.style.left = `${parseInt(this.element.style.left, 10) + this.#modifier}px`;

        }
    }
}
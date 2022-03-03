import {Spaceship} from './Spaceship.js';
import {Enemy} from './Enemy.js';

class Game {
    #htmlElements = {
        spaceship: document.querySelector('[data-spaceship]'),
        container: document.querySelector('[data-container]'),
    }
    #ship = new Spaceship(this.#htmlElements.spaceship, this.#htmlElements.container)
    #enemies = [];
    #enemiesInterval = null;
    #checkPositionInterval = null;
    #createEnemyInterval = null;

    init() {
        this.#ship.init();
        this.#newGame();
    }

    #newGame() {
        this.#enemiesInterval = 30;
        this.#createEnemyInterval = setInterval(() => this.#randomNewEnemy(), 1000)
        this.#checkPositionInterval = setInterval(() => this.#checkPosition(), 1);
    }

    #checkPosition() {
        this.#ship.missiles.forEach((missile, missileIndex, missileArray) => {
            const missilePosition = {
                top: missile.element.offsetTop,
                right: missile.element.offsetLeft + missile.element.offsetWidth,
                bottom: missile.element.offsetTop + missile.element.offsetHeight,
                left: missile.element.offsetLeft,
            }
            if (missilePosition.top < 0) {
                missile.remove();
                missileArray.splice(missileIndex, 1);
            }
        })

        this.#enemies.forEach((enemy, enemyIndex, enemyArray) => {
            const enemyPosition = {
                top: enemy.element.offsetTop,
                right: enemy.element.offsetLeft + enemy.element.offsetWidth,
                bottom: enemy.element.offsetTop + enemy.element.offsetHeight,
                left: enemy.element.offsetLeft,
            }
            if (enemyPosition.top > window.innerHeight) {
                enemy.remove();
                enemyArray.splice(enemyIndex, 1);
            }
        })

    }


    #createNewEnemy(...params) {
        const enemy = new Enemy(
            ...params
        );
        enemy.init();
        this.#enemies.push(enemy);

    }

    #randomNewEnemy() {
        const randomNumber = Math.floor(Math.random() * 5 + 1);
        randomNumber % 5 ? this.#createNewEnemy(
            this.#htmlElements.container,
            this.#enemiesInterval,
            'enemy'
        ) : this.#createNewEnemy(
            this.#htmlElements.container,
            this.#enemiesInterval * 2,
            'enemy--big',
            3)

    }
}


window.onload = function () {
    const game = new Game();
    game.init();
}
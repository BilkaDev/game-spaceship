import { Spaceship } from './components/Spaceship.js';
import { Enemy } from './components/Enemy.js';
import { getTopStats, getUserStats } from './api/stat.js';
import { Auth } from './view/Auth.js';
import { Start } from './view/Start.js';
import { Ranking } from './view/Ranking.js';
import { UserStats } from './view/UserStats.js';
import { EndGame } from './view/EndGame.js';

//console.log(getTopStats());
//console.log(getUserStats('4211ed4f-823c-11ee-a713-120c3c44454b').then((r) => console.log(r)));

class Game {
	#htmlElements = {
		spaceship: document.querySelector('[data-spaceship]'),
		container: document.querySelector('[data-container]'),
		score: document.querySelector('[data-score]'),
		lives: document.querySelector('[data-lives]'),
		scoreInfo: document.querySelector('[data-score-info]'),
	};
	#ship = new Spaceship(this.#htmlElements.spaceship, this.#htmlElements.container);
	#enemies = [];
	#lives = null;
	#score = null;

	#rankingModal = new Ranking();
	#userStatsModal = new UserStats();
	#endGameModal = new EndGame(() => this.#newGame());
	#startModal = new Start(() => this.init());
	#authModal = new Auth();

	#enemiesInterval = null;
	#checkPositionInterval = null;
	#createEnemyInterval = null;

	init() {
		this.#ship.init();
		this.#newGame();
		this.#rankingModal.setIsFirstGame();
		this.#userStatsModal.setIsFirstGame();
	}

	#newGame() {
		this.#endGameModal.hide();
		this.#enemiesInterval = 30;
		this.#lives = 3;
		this.#score = 0;
		this.#updateScoreText();
		this.#updateLivesText();
		this.#ship.element.style.left = '0px';
		this.#ship.setPosition();
		this.#createEnemyInterval = setInterval(() => this.#randomNewEnemy(), 1000);
		this.#checkPositionInterval = setInterval(() => this.#checkPosition(), 1);
	}
	#endGame() {
		this.#endGameModal.show();
		this.#htmlElements.scoreInfo.textContent = `You loose! Your score is ${this.#score}`;
		this.#enemies.forEach((enemy) => enemy.explode());
		this.#enemies.length = 0;
		clearInterval(this.#createEnemyInterval);
		clearInterval(this.#checkPositionInterval);
	}

	#checkPosition() {
		this.#enemies.forEach((enemy, enemyIndex, enemyArray) => {
			const enemyPosition = {
				top: enemy.element.offsetTop,
				right: enemy.element.offsetLeft + enemy.element.offsetWidth,
				bottom: enemy.element.offsetTop + enemy.element.offsetHeight,
				left: enemy.element.offsetLeft,
			};
			if (enemyPosition.top > window.innerHeight) {
				enemy.explode();
				enemyArray.splice(enemyIndex, 1);
				this.#updateLives();
			}

			this.#ship.missiles.forEach((missile, missileIndex, missileArray) => {
				const missilePosition = {
					top: missile.element.offsetTop,
					right: missile.element.offsetLeft + missile.element.offsetWidth,
					bottom: missile.element.offsetTop + missile.element.offsetHeight,
					left: missile.element.offsetLeft,
				};

				if (
					missilePosition.bottom >= enemyPosition.top &&
					missilePosition.top <= enemyPosition.bottom &&
					missilePosition.right >= enemyPosition.left &&
					missilePosition.left <= enemyPosition.right
				) {
					enemy.hit();
					if (!enemy.lives) {
						enemyArray.splice(enemyIndex, 1);
					}

					missile.remove();
					missileArray.splice(missileIndex, 1);
					this.#updateScore();
				}

				if (missilePosition.top < 0) {
					missile.remove();
					missileArray.splice(missileIndex, 1);
				}
			});
		});
	}

	#createNewEnemy(...params) {
		const enemy = new Enemy(...params);
		enemy.init();
		this.#enemies.push(enemy);
	}

	#randomNewEnemy() {
		const randomNumber = Math.floor(Math.random() * 5 + 1);
		randomNumber % 5
			? this.#createNewEnemy(this.#htmlElements.container, this.#enemiesInterval, 'enemy', 'explosion')
			: this.#createNewEnemy(
					this.#htmlElements.container,
					this.#enemiesInterval * 2,
					'enemy--big',
					'explosion--big',
					3
			  );
	}

	#updateScore() {
		this.#score++;
		if (!(this.#score % 5)) {
			this.#enemiesInterval--;
		}
		this.#updateScoreText();
	}

	#updateLives() {
		this.#lives--;
		this.#updateLivesText();
		this.#htmlElements.container.classList.add('hit');
		setTimeout(() => this.#htmlElements.container.classList.remove('hit'), 100);
		if (!this.#lives) {
			this.#endGame();
		}
	}

	#updateScoreText() {
		this.#htmlElements.score.textContent = `Score: ${this.#score}`;
	}

	#updateLivesText() {
		this.#htmlElements.lives.textContent = `Lives: ${this.#lives}`;
	}
}

window.onload = function () {
	const game = new Game();
};

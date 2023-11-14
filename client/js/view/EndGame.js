export class EndGame {
	#htmlElements = {
		container: document.querySelector('[data-modal]'),
		buttonNewGame: document.querySelector('[data-button-new-game]'),
		buttonRanking: document.querySelector('[data-button-ranking]'),
		buttonUserStats: document.querySelector('[data-button-stats]'),
	};
	constructor({ modalRanking, modalUserStats }, cb) {
		this.modalRanking = modalRanking;
		this.modalUserStats = modalUserStats;
		this.#htmlElements.buttonNewGame.addEventListener('click', () => cb());
		this.hide();

		this.#htmlElements.buttonRanking.addEventListener('click', (e) => {
			this.modalRanking.show();
			this.modalRanking.loadStats();
			this.hide();
		});

		this.#htmlElements.buttonUserStats.addEventListener('click', (e) => {
			this.modalUserStats.show();
			this.modalUserStats.loadStats();
			this.hide();
		});
	}

	hide() {
		this.#htmlElements.container.classList.add('hide');
	}
	show() {
		this.#htmlElements.container.classList.remove('hide');
	}
}

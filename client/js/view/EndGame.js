export class EndGame {
	#htmlElements = {
		container: document.querySelector('[data-modal]'),
		buttonNewGame: document.querySelector('[data-button-new-game]'),
		buttonRanking: document.querySelector('[data-button-ranking]'),
		buttonUserStats: document.querySelector('[data-button-stats]'),
		modalRanking: document.querySelector('[data-modal-ranking]'),
		modalUserStats: document.querySelector('[data-modal-user-stats]'),
	};
	constructor(cb) {
		this.#htmlElements.buttonNewGame.addEventListener('click', () => cb());
		this.hide();

		this.#htmlElements.buttonRanking.addEventListener('click', (e) => {
			this.#htmlElements.modalRanking.classList.remove('hide');
			this.hide();
		});

		this.#htmlElements.buttonUserStats.addEventListener('click', (e) => {
			this.#htmlElements.modalUserStats.classList.remove('hide');
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

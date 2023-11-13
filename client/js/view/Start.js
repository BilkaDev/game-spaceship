export class Start {
	#htmlElements = {
		container: document.querySelector('[data-modal-start-view]'),
		buttonStart: document.querySelector('[data-button-start-game]'),
		buttonRanking: document.querySelector('[data-button-start-ranking]'),
		buttonUserStats: document.querySelector('[data-button-start-user-stats]'),
	};
	constructor(init) {
		this.#htmlElements.buttonStart.addEventListener('click', () => {
			init();
			this.#hide();
		});

		this.#htmlElements.buttonRanking.addEventListener('click', (e) => {
			this.#hide();
		});
		this.#htmlElements.buttonUserStats.addEventListener('click', (e) => {
			this.#hide();
		});
	}

	#hide() {
		this.#htmlElements.container.classList.add('hide');
	}
}

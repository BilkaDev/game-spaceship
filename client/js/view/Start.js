export class Start {
	#htmlElements = {
		container: document.querySelector('[data-modal-start-view]'),
		buttonStart: document.querySelector('[data-button-start-game]'),
		buttonRanking: document.querySelector('[data-button-start-ranking]'),
		buttonUserStats: document.querySelector('[data-button-start-user-stats]'),
	};

	constructor({ modalRanking, modalUserStats }, init) {
		this.modalRanking = modalRanking;
		this.modalUserStats = modalUserStats;
		this.#htmlElements.buttonStart.addEventListener('click', () => {
			init();
			this.#hide();
		});

		this.#htmlElements.buttonRanking.addEventListener('click', (e) => {
			this.modalRanking.show();
			this.#hide();
		});
		this.#htmlElements.buttonUserStats.addEventListener('click', (e) => {
			this.modalUserStats.show();
			this.modalUserStats.loadStats();
			this.#hide();
		});
	}

	#hide() {
		this.#htmlElements.container.classList.add('hide');
	}
}

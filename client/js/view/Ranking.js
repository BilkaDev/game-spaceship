export class Ranking {
	#htmlElements = {
		container: document.querySelector('[data-modal-ranking]'),
		buttonBack: document.querySelector('[data-button-ranking-back]'),
		modalStart: document.querySelector('[data-modal-start-view]'),
		modalEndGame: document.querySelector('[data-modal]'),
	};
	#isFirstGame = true;
	constructor() {
		this.#htmlElements.buttonBack.addEventListener('click', () => {
			this.#isFirstGame
				? this.#htmlElements.modalStart.classList.remove('hide')
				: this.#htmlElements.modalEndGame.classList.remove('hide');
			this.hide();
		});
	}
	setIsFirstGame() {
		this.#isFirstGame = false;
	}
	hide() {
		this.#htmlElements.container.classList.add('hide');
	}
	show() {
		this.#htmlElements.container.classList.remove('hide');
	}
}

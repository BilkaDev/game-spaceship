import { ItemInTable } from '../components/ItemInTable.js';
import { getTopStats } from './../api/stat.js';

export class Ranking {
	#htmlElements = {
		container: document.querySelector('[data-modal-ranking]'),
		buttonBack: document.querySelector('[data-button-ranking-back]'),
		modalStart: document.querySelector('[data-modal-start-view]'),
		modalEndGame: document.querySelector('[data-modal]'),
		tbody: document.querySelector('[data-tbody-ranking]'),
		errorSpan: document.querySelector('[data-error-ranking]'),
	};
	#isFirstGame = true;
	#itemInTable = new ItemInTable(this.#htmlElements.tbody);

	constructor() {
		this.#htmlElements.buttonBack.addEventListener('click', () => {
			this.#isFirstGame
				? this.#htmlElements.modalStart.classList.remove('hide')
				: this.#htmlElements.modalEndGame.classList.remove('hide');
			this.hide();
		});
	}

	#clearTable() {
		this.#htmlElements.tbody.innerHTML = '';
	}

	#addError(message) {
		this.#htmlElements.errorSpan.classList.remove('hide');
		this.#htmlElements.errorSpan.textContent = message;
	}

	#clearError() {
		this.#htmlElements.errorSpan.textContent = '';
		this.#htmlElements.errorSpan.classList.add('hide');
	}

	loadStats() {
		this.#clearError();
		this.#clearTable();
		getTopStats()
			.then((res) => {
				res.data.forEach((item, id) => {
					this.#itemInTable.add({ rank: id + 1, username: item.user.name, score: item.score });
				});
			})
			.catch((e) => this.#addError('Something went wrong, Please try later.'));
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

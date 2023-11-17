import { ItemInTable } from '../components/ItemInTable.js';
import { getUserStats } from './../api/stat.js';

export class UserStats {
	#htmlElements = {
		container: document.querySelector('[data-modal-user-stats]'),
		buttonBack: document.querySelector('[data-button-user-stats-back]'),
		modalStart: document.querySelector('[data-modal-start-view]'),
		modalEndGame: document.querySelector('[data-modal]'),
		tbody: document.querySelector('[data-tbody-user-stats]'),
		errorSpan: document.querySelector('[data-error-user-stats]'),
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
	#itemInTable = new ItemInTable(this.#htmlElements.tbody);

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

		getUserStats()
			.then((res) => {
				res.data.forEach((item, id) => {
					this.#itemInTable.add({ rank: id + 1, username: item.user.name, score: item.score }, false);
				});
			})
			.catch((e) => {
				this.#addError('Something went wrong, Please try later.');
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

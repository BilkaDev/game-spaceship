import { ItemInTable } from '../components/ItemInTable.js';
import { getUserStats } from './../api/stat.js';
import { loadFromStorage } from './../storage.js';

export class Start {
	#htmlElements = {
		container: document.querySelector('[data-modal-start-view]'),
		buttonStart: document.querySelector('[data-button-start-game]'),
		buttonRanking: document.querySelector('[data-button-start-ranking]'),
		buttonUserStats: document.querySelector('[data-button-start-user-stats]'),
		modalRanking: document.querySelector('[data-modal-ranking]'),
		modalUserStats: document.querySelector('[data-modal-user-stats]'),
		tbody: document.querySelector('[data-tbody-user-stats]'),
		errorSpan: document.querySelector('[data-error-user-stats]'),
	};
	#itemInTable = new ItemInTable(this.#htmlElements.tbody);

	constructor(init) {
		this.loadStats();
		this.#htmlElements.buttonStart.addEventListener('click', () => {
			init();
			this.#hide();
		});

		this.#htmlElements.buttonRanking.addEventListener('click', (e) => {
			this.#htmlElements.modalRanking.classList.remove('hide');
			this.#hide();
		});
		this.#htmlElements.buttonUserStats.addEventListener('click', (e) => {
			this.#htmlElements.modalUserStats.classList.remove('hide');
			this.#hide();
		});
	}

	loadStats() {
		const user = loadFromStorage('user');
		this.#htmlElements.errorSpan.textContent = '';
		this.#htmlElements.errorSpan.classList.add('hide');

		getUserStats(user.id)
			.then((res) => {
				res.data.forEach((item, id) => {
					this.#itemInTable.add({ rank: id, username: item.username, score: item.score }, false);
				});
			})
			.catch((e) => {
				this.#htmlElements.errorSpan.classList.remove('hide');
				this.#htmlElements.errorSpan.textContent = 'Something went wrong, Please try later.';
			});
	}

	#hide() {
		this.#htmlElements.container.classList.add('hide');
	}
}

export class ItemInTable {
	constructor(container) {
		this.container = container;
	}

	add(data, isUser = true) {
		const trElement = this.container.appendChild(document.createElement('tr'));
		const tdElementRank = trElement.appendChild(document.createElement('td'));
		const tdElementScore = trElement.appendChild(document.createElement('td'));
		if (isUser) {
			const tdElementUsername = trElement.appendChild(document.createElement('td'));
			tdElementUsername.textContent = data.username;
		}
		tdElementRank.textContent = data.rank;
		tdElementScore.textContent = data.score;
	}
}

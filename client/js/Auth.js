export class Auth {
	#htmlElements = {
		container: document.querySelector('[data-modal-auth]'),
		buttonSubmit: document.querySelector('[data-button-submit]'),
		buttonSwitch: document.querySelector('[data-button-switch]'),
		startGameModal: document.querySelector('[data-modal-start-view]'),
	};
	#isLoginMode = true;

	constructor() {
		this.#htmlElements.buttonSwitch.addEventListener('click', (e) => this.#switchHandler(e));
		this.#htmlElements.buttonSubmit.addEventListener('click', (e) => this.#sumbitHandler(e));
	}
	#hide() {
		this.#htmlElements.container.classList.add('hide');
	}

	#showStartGame() {
		this.#htmlElements.startGameModal.classList.remove('hide');
	}

	#sumbitHandler(e) {
		e.preventDefault();
		this.#showStartGame();
		this.#hide();

		this.#htmlElements.buttonSubmit.removeEventListener('click', (e) => this.#sumbitHandler(e));
		this.#htmlElements.buttonSwitch.removeEventListener('click', (e) => this.#switchHandler(e));
	}

	#switchHandler() {
		this.#isLoginMode = !this.#isLoginMode;
		this.#isLoginMode
			? (this.#htmlElements.buttonSubmit.textContent = 'Login')
			: (this.#htmlElements.buttonSubmit.textContent = 'Register');
		this.#isLoginMode
			? (this.#htmlElements.buttonSwitch.textContent = 'Switch to login')
			: (this.#htmlElements.buttonSwitch.textContent = 'Switch to register');
	}
}

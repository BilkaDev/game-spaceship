import {regsiterUser, login} from './../api/auth.js';
import {saveToStorage} from './../storage.js';
import {getHealth} from "./../api/health.js";

export class Auth {
    #htmlElements = {
        container: document.querySelector('[data-modal-auth]'),
        buttonSubmit: document.querySelector('[data-button-submit]'),
        buttonSwitch: document.querySelector('[data-button-switch]'),
        startGameModal: document.querySelector('[data-modal-start-view]'),
        inputUsername: document.querySelector('[data-username-input]'),
        inputEmail: document.querySelector('[data-email-input]'),
        inputPassword: document.querySelector('[data-password-input]'),
        errorSpan: document.querySelector('[data-errors-auth]'),
        form: document.querySelector('[data-form-auth]'),
        runningText: document.querySelector('[data-text-running]'),
    };
    #isLoginMode = true;

    constructor() {
        this.#runServer();
        this.#htmlElements.buttonSwitch.addEventListener('click', (e) => this.#switchHandler(e));
        this.#htmlElements.form.addEventListener('submit', (e) => this.#sumbitHandler(e));
    }

    #runServer() {
        getHealth()
            .then((r) => {
                console.log(r.status)
                if (r.status === 200) {
                    this.#htmlElements.runningText.innerHTML = '';
                }
            })
            .catch(() => {
                setTimeout(() => this.#runServer(), 1000);
            });
    }

    #hide() {
        this.#htmlElements.container.classList.add('hide');
    }

    #showStartGame() {
        this.#htmlElements.startGameModal.classList.remove('hide');
    }

    #getInputValue(input) {
        return input.value;
    }

    #clearError() {
        this.#htmlElements.errorSpan.innerHTML = '';
        this.#htmlElements.errorSpan.classList.add('hide');
    }

    #addError() {
        this.#htmlElements.errorSpan.innerHTML = 'Something went wrong!, Please try again late';
    }

    #onSuccess(data) {
        this.#showStartGame();
        this.#hide();
        saveToStorage('user', data);
    }

    async #registerUser(payload) {
        try {
            const res = await regsiterUser({
                email: payload.email,
                password: payload.password,
                name: payload.username
            });
            this.#onSuccess(res.data);
        } catch (error) {
            this.#htmlElements.errorSpan.classList.remove('hide');
            if (!error.response || error.response.status === 500) {
                this.#addError();
                return;
            }
            for (const value of error.response.data.errors) {
                this.#htmlElements.errorSpan.innerHTML += `${value}</br>`;
            }
        }
    }

    async #loginUser(payload) {
        try {
            const res = await login(payload);
            this.#onSuccess(res.data);
        } catch (error) {
            this.#htmlElements.errorSpan.classList.remove('hide');
            if (!error.response || error.response.status === 500) {
                this.#htmlElements.errorSpan.innerHTML = 'Something went wrong!Please try again late';
                return;
            }
            for (const value of error.response.data.errors) {
                this.#htmlElements.errorSpan.innerHTML += `${value}</br>`;
            }
        }
    }

    async #sumbitHandler(e) {
        e.preventDefault();
        this.#clearError();

        const email = this.#getInputValue(this.#htmlElements.inputEmail);
        const password = this.#getInputValue(this.#htmlElements.inputPassword);
        const username = this.#getInputValue(this.#htmlElements.inputUsername);
        const userPayload = {
            email,
            password,
            username,
        };

        if (this.#isLoginMode) {
            this.#loginUser(userPayload);
        } else {
            this.#registerUser(userPayload);
        }

        this.#htmlElements.form.removeEventListener('submit', (e) => this.#sumbitHandler(e));
        this.#htmlElements.buttonSwitch.removeEventListener('click', (e) => this.#switchHandler(e));
    }

    #switchHandler() {
        this.#isLoginMode = !this.#isLoginMode;

        if (this.#isLoginMode) {
            this.#htmlElements.buttonSwitch.textContent = 'Switch to sign up';
            this.#htmlElements.inputUsername.classList.add('hide');
            this.#htmlElements.buttonSubmit.textContent = 'Login';
            this.#htmlElements.inputUsername.disabled = true;
        } else {
            this.#htmlElements.inputUsername.disabled = false;
            this.#htmlElements.inputUsername.classList.remove('hide');
            this.#htmlElements.buttonSwitch.textContent = 'Switch to login';
            this.#htmlElements.buttonSubmit.textContent = 'Register';
        }
    }
}

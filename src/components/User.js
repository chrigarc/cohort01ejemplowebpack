import { newButton } from "../utils/utils.js";

class User {
    constructor({ avatar, first_name, last_name, email }, selector) {
        this._avatar = avatar;
        this._first_name = first_name;
        this._last_name = last_name;
        this._email = email;
        this._selector = selector;
    }

    getTemplate() {
        const newNode = document.querySelector('.templates')
            .content.querySelector(`.${this._selector}`)
            .cloneNode(true);
        newNode.querySelector('.card__title').textContent = this._first_name;
        newNode.querySelector('.card__image').src = this._avatar;
        newNode.querySelector('.card__content').textContent = this._email;

        const b1 = newButton('Saludar');
        b1.addEventListener('click', () => {
            alert('Hola me llamo: ' + this._first_name);
        })

        newNode.querySelector('.card__actions').append(b1);

        return newNode;
    }

}

export default User;
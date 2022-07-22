export function getRandom10000() {
    return Math.round(Math.random() * 1000, 2);
}

export function newButton(texto) {
    const button = document.createElement('button');
    button.textContent = texto;
    return button;
}

export const getRandomUser = () => {
    return fetch('https://random-data-api.com/api/users/random_user').then(response => response.json());
}

export function getRandomShapeData() {
    const types = ['square', 'triangle', 'circle'];

    const random = Math.round(Math.random() * 3);

    const type = types[random];

    let shape = { shape: type };

    switch (type) {
        case 'circle':
            shape['radio'] = getRandom10000();
            break;
        case 'triangle':
            shape['base'] = getRandom10000();
            shape['height'] = getRandom10000();
            break;
        case 'square':
        default:
            shape['side'] = getRandom10000();
            break;
    }
    return shape;
}
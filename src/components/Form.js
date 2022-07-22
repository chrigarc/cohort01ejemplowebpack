import { getRandomUser, getRandomShapeData } from "../utils/utils.js";
import User from "./User.js";
import { Circle, Square, Triangle } from "./Shapes.js";

function init() {
    console.log('inicializando formulario');
    document.querySelector('.controls__forms').addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('se registro un evento');
        const type = event.target.querySelector('.controls__select').value;
        switch (type) {
            case 'user':
                addUser();
                break;
            case 'shape':
                addShape();
                break;
            default:
                alert('Opción invalida');
                break;
        }
    })
}


async function addUser() {
    const data = await getRandomUser();
    const newUser = new User(data, 'card_type_user');
    document.querySelector('.main__cards').append(newUser.getTemplate());
}

/*
function addUser(){
    getRandomUser().then(json => {
        console.log(json);
    });
}
*/



const addShape = () => {
    const data = getRandomShapeData();
    console.log(data);
    let shape = null;
    switch (data.shape) {
        case 'triangle':
            shape = new Triangle(data, 'card_type_shape');
            break;
        case 'circle':
            shape = new Circle(data, 'card_type_shape');
            break;
        case 'square':
        default:
            shape = new Square(data, 'card_type_shape');
            break;
    }
    document.querySelector('.main__cards').append(shape.getTemplate());
}


let algo = '';

export { init  };
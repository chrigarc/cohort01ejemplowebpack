class Shape {
    constructor(selector) {
        this._color = 'red';
        this._selector = selector;
        this._node = this.getTemplate();
    }
    animate(){
        this._node.querySelector('.shape').classList.add('shape_animation_rotate');
        setTimeout(() => {
            this._node.querySelector('.shape').classList.remove('shape_animation_rotate');
        }, 5000);
    }

    getTemplate(){
        if(!this._node){
            let newNode = document.querySelector('.templates').content.querySelector(`.${this._selector}`).cloneNode(true);
            newNode.querySelector('.shape').classList.add('shape_type_' + this.constructor.name.toString().toLowerCase());
            newNode.querySelector('.shape').classList.add('shape_color_'+this._color);
            this._setEventlistener(newNode);
            return newNode;
        }
        return this._node;
    }

    _setEventlistener(newNode){
        newNode.querySelector('.card__button_animate').addEventListener('click', () => {
            this.animate();
        });
        newNode.querySelector('.card__button_area').addEventListener('click', () => {
            alert('area2: ' + this.calculateArea());
        });
        newNode.querySelector('.card__button_perimeter').addEventListener('click', () => {
            alert('perimetro2: ' + this.calculatePerimeter());
        });

        newNode.querySelector('.card__button_delete').addEventListener('click', (event) => {
            event.target.parentElement.remove();
        })
    }

    calculateArea(){}
    calculatePerimeter(){}
}

class Square extends Shape {
    constructor({side}, selector) {
        super(selector);
        this._side = side;
    }

    calculateArea() {
        return this._side**2;
    }

    calculatePerimeter() {
        return this._side * 4;
    }
}

class Circle extends Shape {
    constructor({radio}, selector) {
        super(selector);
        this._radio = radio;
        this._node.querySelector('.shape__content').textContent = 'circle'
    }

    calculateArea() {
        return this._radio**2 * Math.PI;
    }

    calculatePerimeter() {
        return this._radio * 2 * Math.PI;
    }
}

class Triangle extends Shape {
    constructor({height, base}, selector) {
        super(selector);
        this._base = base;
        this._height = height;
    }

    calculateArea() {
        return (this._base * this._height) / 2;
    }

    calculatePerimeter() {
        return this._base * 3;
    }
}

export {Circle, Triangle, Square};

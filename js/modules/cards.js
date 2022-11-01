import {getResources} from '../services/services';

function cards() {
    class MenuCard {
        constructor(imgSrc, imgAlt, title, descr, price, parentSelector, ...classes) {
            this.imgSrc = imgSrc;
            this.imgAlt = imgAlt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 62;
            this.changeToRUB();
        }

        changeToRUB(){
            this.price = this.price * this.transfer;
        }

        render(){
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes)
            }else{
                this.classes.forEach(classList => element.classList.add(classList))
            }
            element.innerHTML = `
                <img src=${this.imgSrc} alt=${this.imgAlt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element)
        }
    }

    getResources('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            })
        })
}

export default cards;
// 1. Найти кнопку " Добавить в корзину"

let cartButtons = document.querySelectorAll('[data-cart]');

console.log(cartButtons);
// 2. Отследить клик на кнопке "Добавить в корзину"

cartButtons.forEach(function (item) {
    item.addEventListener("click", function () {
        console.log("click on cart");

        // 3. По клику определяем какой товар добавляется в корзину
        // Внутри какой карточки кликнули)
        let card = this.closest('.card');


        // 4. Собираем данные с этого товара
        let imgSrc = card.querySelector('.product-img').getAttribute('src');
        let title = card.querySelector('.item-title').innerText;
        let itemsInBox = card.querySelector('[data-items-in-box]').innerText;
        let price = card.querySelector('.price__currency').innerText;
        let weight = card.querySelector('.price__weight').innerText;
        let counter = card.querySelector('[data-counter]').innerText;

        // 5. Собранные данные подставим в шаблон для товара в корзине
        let cartItemHTML = `\t\t\t\t\t\t\t<div class="cart-item">
                            \t\t\t\t\t\t\t\t<div class="cart-item__top">
                            \t\t\t\t\t\t\t\t\t<div class="cart-item__img">
                            \t\t\t\t\t\t\t\t\t\t<img src="${imgSrc}" alt="">
                            \t\t\t\t\t\t\t\t\t</div>
                            \t\t\t\t\t\t\t\t\t<div class="cart-item__desc">
                            \t\t\t\t\t\t\t\t\t\t<div class="cart-item__title">${title}</div>
                            \t\t\t\t\t\t\t\t\t\t<div class="cart-item__weight">${itemsInBox} / ${weight}</div>
                            
                            \t\t\t\t\t\t\t\t\t\t<!-- cart-item__details -->
                            \t\t\t\t\t\t\t\t\t\t<div class="cart-item__details">
                            
                            \t\t\t\t\t\t\t\t\t\t\t<div class="items items--small counter-wrapper">
                            \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
                            \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter>${counter}</div>
                            \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
                            \t\t\t\t\t\t\t\t\t\t\t</div>
                            
                            \t\t\t\t\t\t\t\t\t\t\t<div class="price">
                            \t\t\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${price}</div>
                            \t\t\t\t\t\t\t\t\t\t\t</div>
                            
                            \t\t\t\t\t\t\t\t\t\t</div>
                            \t\t\t\t\t\t\t\t\t\t<!-- // cart-item__details -->
                            
                            \t\t\t\t\t\t\t\t\t</div>
                            \t\t\t\t\t\t\t\t</div>
                            \t\t\t\t\t\t\t</div>
                            `;

        let cartWrapper = document.querySelector('.cart-wrapper');
        cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);

        document.querySelector('[data-cart-empty]').classList.add('none');
    });
});








// 6. Отобразим товар в корзине
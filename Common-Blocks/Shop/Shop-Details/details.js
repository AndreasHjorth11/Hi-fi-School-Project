let url = window.location.search;
let params = new URLSearchParams(url);
let category = params.get("category")

let Details = document.querySelector("#details-main");
let itemCategory = document.querySelector("#item__category");
let product = document.querySelector("#item__product-title")

fetch('/Common-Blocks/Shop/shop.json')
.then(response => response.json())
.then(result => {
    result.shop.forEach(element =>{
        if(element.id == category){
            Details.innerHTML += `
            <section class="main__image-section">
            <img class="main__image" src="/Assets/Images/Products/${element.thumbnails}" alt="">
            </section>
        `;
        }
        if(element.id == category){
            Details.innerHTML += ` 
            <section class="main__description">
                <strong class="product__title-details">${element.productTitle}</strong>
                <div class="details__sub">
                <p class="details__subTitle">See other ${element.manufacture} products</p>
                <p class="details__price">${element.price}</p>
                </div>
                <p class="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate doloremque dolorem sapiente qui sequi inventore quaerat, delectus, corrupti, ea placeat iure eaque explicabo esse animi consequatur fugiat sit beatae!</p>
                <div class="details__description-buttons">
                    <button class="description__button">ASK A QUESTION</button>
                    <button class="description__button">PART EXCHANGE</button>
                    <button class="description__button">PAY BY FINANCE</button>
                    <button class="description__button">SEEN A BETTER PRICE?</button>
                </div>      

                <section class="details__purchase">
                <div class="purchase__requirement">
                    <p class="requirement__text-1">Finish</p>
                    <p class="requirement__text-2">* Required Fields</p>
                </div>
                <label class="checkbox__container">
                    <input class="checkbox" type="checkbox">
                    <p class="checkbox__text">Black</p>
                </label>
                <label class="checkbox__container">
                    <input class="checkbox" type="checkbox">
                    <p class="checkbox__text">Silver</p>
                </label>
                <div class="purchase__box">
                    <p class="purchase__amount">Qty:</p>
                    <input class="purchase__amount-box" type="number">
                    <button class="purchase__button">ADD TO CART</button>
                    <p class="purchase__text-2">-OR-</p>
                    <img class="purchase__paypal" src="/Assets/Images/Background/paypal.jpg" alt="paypal logo">
                </div>
                </section>

                <section class="item__information">
                    <p class="item__information-title">ADDITIONAL INFORMATION</p>
                    <div class="item__information-container">
                    <ul>
                        <li class="item__information-list">MANUFACTURER</li>
                        <li class="item__information-list">MANUFACTURER LINK</li>
                        <li class="item__information-list">FREE WARRANTY</li>
                        <li class="item__information-list">DELIVERY CHARGE</li>
                        <li class="item__information-list">DELIVERY TIME</li>
                        <li class="item__information-list">CARD SURCHARGES</li>
                    </ul>

                    <div class="item__information-container_2">
                    <ul>
                        <li class="item__information-list_2">${element.manufacture}</li>
                        <li class="item__information-list_2 link__placeholder">Placeholder</li>
                        <li class="item__information-list_2">${element.warranty}</li>
                        <li class="item__information-list_2">${element.deliveryCharge}</li>
                        <li class="item__information-list_2">${element.deliveryTime}</li>
                        <li class="item__information-list_2">${element.cardSurcharges}</li>
                    </ul>
                    </div>
                    </div>
                </section>
            </section>
            `;
        }

        if(element.id == category){
            itemCategory.innerHTML = `
            <strong class="category__amplifiers">${element.title}</strong>
            `;
        }

        if(element.id == category){
            product.innerHTML = `
            <strong class="product__category__title">${element.productTitle}</strong>
            `;
        }
        
    });
});
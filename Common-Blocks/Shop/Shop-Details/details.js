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
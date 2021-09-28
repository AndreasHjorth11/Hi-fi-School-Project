let url = window.location.search;
let params = new URLSearchParams(url);
let category = params.get("category")
console.log(category);

let widebarTitle = document.querySelector("#widebar__title");
let itemCategory = document.querySelector("#item__category");
let itemProduct = document.querySelector("#item__product");

fetch('/Common-Blocks/Shop/shop.json')
.then(response => response.json())
.then(result => {
    result.shop.forEach(element =>{
        if(element.id == category){
            widebarTitle.innerHTML = ` 
            <strong class="widebar__title">${element.title}</strong>
            
        `; 
        }
        
        if(element.id == category){
            itemCategory.innerHTML = `
            <strong class="category__amplifiers">${element.title}</strong>
            `;
        }

        if(element.id == category){
            itemProduct.innerHTML =
            `<div class="product__item-info">
            <span class="product__image-container">
                <img class="product__image" src="${element.thumbnails}">
            </span>
            <div class="product__specs">
                <p class="product__title">${element.product1}</p>
                <p class="product__price">${element.price}</p>
                <button class="product__buy-button">ADD TO CART</button>
            </div>
            </div>
        `;
        }
    });
});
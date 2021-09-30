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
     if(element.title == category){
            widebarTitle.innerHTML = ` 
            <strong class="widebar__title">${element.title}</strong>
        `; 
        }
        
        if(element.title == category){
            itemCategory.innerHTML = `
            <strong class="category__amplifiers">${element.title}</strong>
            `;
        }

        if(element.title == category){
            console.log("test")
            itemProduct.innerHTML += `
            <a href="/Common-Blocks/Shop/Shop-Details/details.html?category=${element.id}" style="text-decoration: none; color: black;">
                <div id="item__product" class="product__item-info">
                    <span class="product__image-container">
                        <img class="product__image" src="/Assets/Images/Products/${element.thumbnails}">
                    </span>
                    <div class="product__specs">
                        <p class="product__title">${element.productTitle}</p>
                        <p class="product__price">${element.price}</p>
                        <button class="product__buy-button">ADD TO CART</button>
                    </div>
                </div>
            </a>
        `;
        }
    });
});
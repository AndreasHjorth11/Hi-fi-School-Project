let url = window.location.search;
let params = new URLSearchParams(url);
let CategoryID = params.get("CategoryID");

let mainElement = document.querySelector('#shop__front');

 

fetch('/Common-Blocks/Shop/shop.json')
.then((response) => response.json())
.then((data) => {
    data.shop.forEach(element => {
        mainElement.innerHTML += `
        <a href="/Common-Blocks/Shop/Shop-Category-list/shop-category.html?Id=${element.id}">
        <section id="main__image-section" class="main__image-section">
        <img id="" class="main__image" src="${element.images}" alt="">
        <p class="image__text-1">${element.title}</p>
        </section>
        </a>
    `;
});
});

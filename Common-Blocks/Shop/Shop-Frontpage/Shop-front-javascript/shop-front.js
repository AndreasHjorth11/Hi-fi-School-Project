

let mainElement = document.querySelector('#shop__front');



fetch('/Common-Blocks/Shop/shop.json')
.then((response) => response.json())
.then((data) => {
    data.shop.forEach(element => {
        console.log("test");
        
        mainElement.innerHTML += `
        <a href="/Common-Blocks/Shop/Shop-Category-list/shop-category.html?category=${element.title}">
        <section id="main__image-section" class="main__image-section">
        <img id="" class="main__image" src="${element.images}" alt="">
        <p class="image__text-1">${element.title}</p>
        </section>
        </a>
    `;
});
});

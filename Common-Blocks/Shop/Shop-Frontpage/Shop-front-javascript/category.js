

let mainElement = document.querySelector('#shop__front');



fetch('/Common-Blocks/Shop/category.json')
.then((response) => response.json())
.then((data) => {
    data.categories.forEach(element => {
        console.log();
        mainElement.innerHTML += `
        <a href="/Common-Blocks/Shop/Shop-Category-list/shop-category.html?category=${element.category}">
        <section id="main__image-section" class="main__image-section">
        <img id="" class="main__image" src="/Assets/Images/category/${element.image}" alt="">
        <p class="image__text-1">${element.category}</p>
        </section>
        </a>
    `;
});
});

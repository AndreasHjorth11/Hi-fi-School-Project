

let link = document.querySelector("#link");

fetch('/Common-Blocks/Shop/category.json')
.then((response) => response.json())
.then((data) => {
    data.categories.forEach(element => {
        link.innerHTML += `
        <a href="/Common-Blocks/Shop/Shop-Category-list/shop-category.html?category=${element.category}">
        <ul id="sidebar__link" class="sidebar__ul">
            <li class="sidebar__li">
                <p class="sidebar__category-title" style="text-decoration: none;">${element.category}</p>
            </li>
    </ul>
    `;
});
});
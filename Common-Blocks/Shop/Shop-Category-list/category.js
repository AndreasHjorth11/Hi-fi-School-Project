
let widebarTitle = document.querySelector("#widebar__title");

fetch('/Common-Blocks/Shop/shop.json')
.then(response => response.json())
.then(result => {
    result.shop.forEach(element =>{
            widebarTitle.innerHTML = ` 
            <strong class="widebar__title">${element.title}</strong>
        ` 
    });
});
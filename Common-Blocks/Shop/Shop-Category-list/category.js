let url = window.location.search;
let params = new URLSearchParams(url);
let category = params.get("category")
console.log(category);

let widebarTitle = document.querySelector("#widebar__title");
let itemCategory = document.querySelector("#item__category");

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
    });
});
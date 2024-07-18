import cropinfo from '../Javascript/cropguide.js';
let cropguide=document.querySelector(".About")
let cropcardinfo=""
console.log(cropinfo)
cropinfo.forEach((crop)=>{
    cropcardinfo+=`<div class="card">
                <div class="card-image card${crop.id}">
                    <h2>${crop.name}</h2>
                    <p>${crop.info}</p>
                    <a href=${crop.link} target="_blank">READ MORE</a>
                </div>
            </div>`
})
cropguide.innerHTML=cropcardinfo
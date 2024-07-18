import products from "../Javascript/products.js";
// import { summaryhtml } from "./productdisplay.js";
const productHtml=document.querySelector(".js-box-container")
let searchProductName=document.querySelector(".js-search-product-name")
searchProductName.addEventListener("input", () => {
    let query=searchProductName.value.toLowerCase()
    let filteredproducts=products.filter((product)=>product.productname.toLowerCase().includes(query))
    console.log(filteredproducts);
    displayProducts(filteredproducts)
});
function displayProducts(products){
    let searchedproducts=''
    if (products.length>0){
        products.forEach((product)=>{
            searchedproducts+=`
                    <div class="box">
                        <img src="${product.image}" alt="" class="item-img">
                        <div class="content">
                            <h3>${product.productname}</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="price">Rs ${(product.productprice)} <span> Rs 1320</span></div>
                            <div class="quantity">
                                <span>Quantity : </span>
                                <input type="number" min="1" max="10" value="1" class="quantityNumber js-quantity-number">
                                <span>/kg</span>
                            </div>
                            <button class="btn js-add-to-cart" data-product-id="${product.id}"
                            data-product-image="${product.image}"
                            data-product-name="${product.productname}"
                            data-product-price="${product.productprice}">Add to Cart</button>
                        </div>
                    </div>
            `
        })
    }
    else{
        
    }
    productHtml.innerHTML=searchedproducts;
}

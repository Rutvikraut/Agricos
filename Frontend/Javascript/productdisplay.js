import products from "../Javascript/products.js"
const productHtml=document.querySelector(".js-box-container")
let summaryhtml=''
products.forEach((product)=>{
    summaryhtml+=`
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
productHtml.innerHTML=summaryhtml;

const buttons=document.querySelectorAll(".js-add-to-cart")

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const box = button.closest('.box');
        const quantity=box.querySelector('.js-quantity-number').value
        console.log(quantity)
        let productid=button.dataset.productId
        let productimage=button.dataset.productImage
        let productname=button.dataset.productName
        let productprice=button.dataset.productPrice
        addtocart(productid,parseInt(quantity),productimage,productname,productprice);
        updateCartQuantity()
    })
})

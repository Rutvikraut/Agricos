const products=[{
    id:1,
    image:"../images/product1.png",
    productname:"Spary",
    productprice:1050,
},
{
    id:2,
    image:"../images/product2.png",
    productname:"Insecticide Spary",
    productprice:2000,
},
{
    id:3,
    image:"../images/product3.png",
    productname:"Crop Cover",
    productprice:1000,
},
{
    id:4,
    image:"../images/product4.png",
    productname:"Herbicide",
    productprice:2050,
},
{
    id:5,
    image:"../images/product5.png",
    productname:"Weed Killer",
    productprice:1050,
},
]
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
                    <div class="price">$${(product.productprice/100).toFixed(2)} <span>$13.20</span></div>
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
        const quantity=document.querySelector('.js-quantity-number').value
        let productid=button.dataset.productId
        let productimage=button.dataset.productImage
        let productname=button.dataset.productName
        let productprice=button.dataset.productPrice
        addtocart(productid,parseInt(quantity),productimage,productname,productprice);
        updateCartQuantity()

    })
    
})
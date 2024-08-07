let cart=JSON.parse(localStorage.getItem('cart'))

function savestorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
function addtocart(productid,quantity,productimage,productname,productprice){
    let matchingItem;
    if(cart){
        cart.forEach((cartitem)=>{
            if (productid===cartitem.productid){
                matchingItem=cartitem
            }
        })
    }
    if (matchingItem){
            matchingItem.quantity+=quantity
    }else{
        cart.push({productid:productid,quantity:quantity,productimage:productimage,productname:productname,productprice:productprice})
    }
    savestorage()
}

function updateCartQuantity(){
    let cartQuantity=0;
    if(!cart){
        cart=[]
    }
    if (cart.length!=0){
        cart.forEach((cartitem)=>{
            cartQuantity+=cartitem.quantity
        })
    }
    const cartQuantityElement = document.querySelector("#cart-quantity");
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    }
    const productquantity=document.querySelector("#productquantity")
    if (productquantity){
        productquantity.innerHTML=cartQuantity
    }
    
}

function removefromcart(productid){
    const newcart=[]
    cart.forEach((cartitem)=>{
        if(cartitem.productid!=productid){
            newcart.push(cartitem)
        }
    })
    cart=newcart;
    savestorage()
    updateCartQuantity()
    
}
document.addEventListener('DOMContentLoaded',updateCartQuantity())

const showcart= document.querySelector('.js-addtocart-product-container');
let showcarthtml='';
if (showcart){if (cart.length!=0){
    cart.forEach((cartitem)=>{
        showcarthtml+=`
            <div class="cart-item js-item-container-${cartitem.productid}">
                <div class="imgdiv">
                    <img src="${cartitem.productimage}" alt="">
                </div>
                <div class="cart-item-info">
                    <h3>${cartitem.productname}</h3>
                    <p>Quantity : ${cartitem.quantity}</p>
                    <p>Price: $${(cartitem.productprice/100).toFixed(2)}</p>
                    <div class="cart-operations">
                        <button class="cart-btn">Update</button>
                        <button class="cart-btn js-delete-btn"
                            data-product-id="${cartitem.productid}">Delete</button>
                    </div>
                </div>
            </div>
                    
        `
    })
    showcart.innerHTML=showcarthtml
}}

document.querySelectorAll('.js-delete-btn').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const productid=btn.dataset.productId;
        removefromcart(productid)
        
        const container=document.querySelector(`.js-item-container-${productid}`)
        container.remove();
        checkcart()
        calculatePrice()
    })
})

function checkcart(){
    var cartcontainer=document.querySelector(".addtocart-container")
    const cartheading=document.querySelector(".heading")
    if (cartcontainer){if(cart.length===0){
        cartheading.remove()
        cartcontainer.innerHTML=""
        var emptydiv=document.createElement('div')
        emptydiv.className="emptycart"
        cartcontainer.style.height="50vh"
        cartcontainer.style.margin="0"
        cartcontainer.style.display="flex";
        cartcontainer.style.alignItems="center"
        cartcontainer.style.justifyContent = "center";
        var emptyheading=document.createElement('h1')
        var emptytext=document.createTextNode("Your cart is empty !")
        emptyheading.appendChild(emptytext)

        emptydiv.appendChild(emptyheading)
        cartcontainer.appendChild(emptydiv)
}}}

checkcart()


let priceElement=document.querySelector('.productprice')
const price = priceElement ? priceElement : { innerHTML: '' };
let tax=document.querySelector('.tax')
let deliverychargesElement = document.querySelector('.deliverycharges');
const deliverycharges = deliverychargesElement ? deliverychargesElement.innerHTML : 0;
let discountElement = document.querySelector('.discount');
const discount = discountElement ? discountElement.innerHTML : 0;
let totalorder=document.querySelector('.totalorder')
function calculatePrice(){
    let productprice=0;
    cart.forEach((cartitem) => {
        productprice+=cartitem.quantity*parseFloat((parseInt(cartitem.productprice)/100).toFixed(2))
        
    });
    if (price) {
        price.innerHTML = `$${productprice}`;
    }
    let caltax=productprice*0.12
    if (tax) {
        tax.innerHTML = `$${caltax.toFixed(2)}`;
    }

    let total=0
    total+=productprice+caltax+parseInt(deliverycharges)-parseInt(discount)
    console.log(total)
    if (totalorder) {
        totalorder.innerHTML = `$${total.toFixed(2)}`;
    }
}
calculatePrice()
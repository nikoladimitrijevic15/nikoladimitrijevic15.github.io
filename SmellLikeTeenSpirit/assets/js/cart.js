$(document).ready(function () {
    let productsInCart = inCart();
    checkCart(productsInCart)
   });



   function checkCart(productsInCart){
                    if(productsInCart){
                        if(productsInCart.length) displayCartData();
                        else showEmptyCart();
                    }
                    else showEmptyCart();
                }
   function displayCartData() {
                let productsInCart = inCart();
                $.ajax({
                        url : "assets/data/products.json",
                        success : function(data)   {
                        data = data.filter(el => {
                                    for(let p of productsInCart){
                                            if(el.id == p.id) {
                                                el.quantity = p.quantity;
                                                return true;}
                                                }
                                            });
                        generateCart(data);
                                                }
                    });
                }
   function generateCart(data) {
    let html = `
                <div class="w-100 d-flex justify-content-between mb-2">
                    <h1>Cart (`+data.length+`)</h1>
                    <i onclick='clearCart()' class="fa fa-trash m-3 mr-4""></i>   
                </div> `;
    var i=1;
    data.forEach(el=>{
            html+=generateRow(el)
                i++; });
    
    
    
    html+=` 
        <div class="w-100 d-flex justify-content-end mb-2">
            <h1>Total: $`+sum(data)+`.00</h1>
        <button onclick="buyNow()" class="B ml-3 px-3 py-2"> BUY </button>  
        </div>`;

    $("#cartContent").html(html);
    $(".openProduct").click(openProduct);
   }
   function generateRow(el) {
    return `   
            <div class="mb-1 mb-sm-3 d-flex flex-row border ">
            <div data-id="${el.id}" class="openProduct h-100 w-25 d-flex justify-contentcenter align-items-center pt-5 pt-md-3 pt-lg-0">
                <a class="w-75 myauto" href="product.html"><img src="${el.image}" alt="${el.name}" class="w-100"></a>
            </div>
            <div data-id="${el.id}" class="openProduct col mt-5">
                <a href="product.html">
                    <h2>${el.name}</h2>
                </a>
                <p class="mb-0">Price: ${el.price}</p>
                <p>Quantity: ${el.quantity} <i onclick='removeFromCart(${el.id})' class="fas fa-arrow-down"></i></p>
                <p><b>Subtotal: $`+ parseFloat(el.price.substring(1)*el.quantity) +`.00 </b></p>
            </div>
            <div class="m-3 mr-4">
                <i onclick='removeAllFromCart(${el.id})' class="fas fa-times"></i>   
            </div>
        </div>`;
        }

   function clearCart() {
    localStorage.removeItem("products");
    showEmptyCart();
   }
   function buyNow(){
    alert("Your order has been placed.")
    clearCart();
   }
   function sum(data){
    let sum=0;
    data.forEach(el=>{
        sum+=parseFloat(el.price.substring(1)*el.quantity)
        });
        return sum;
       }
    function showEmptyCart() {
        $("#cartContent").html("<div class='mx-auto d-flex w-75'><img class='w-100 alignself-center' src='assets/images/empty.png' alt='Your cart is empty'></div>")
       }
    function inCart() {
        return JSON.parse(localStorage.getItem("products"));
       }
    function removeFromCart(id) {
        let products = inCart();
        let filtered = products.filter(function(el){
        if(el.id==id){
                if(el.quantity>1){
                        el.quantity--;
                        return el;
                        }}
        else return el;
        });
        localStorage.setItem("products", JSON.stringify(filtered));
        checkCart(filtered);
       }
       function removeAllFromCart(id) {
        let products = inCart();
        let filtered = products.filter(p => p.id != id);
        localStorage.setItem("products", JSON.stringify(filtered));
        checkCart(filtered);
       }
       function openProduct(){
        let id = $(this).data("id");
        localStorage.setItem("product", id)
       }
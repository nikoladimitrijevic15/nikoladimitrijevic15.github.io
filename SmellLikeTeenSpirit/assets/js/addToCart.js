/* CART */
function addToCart(){
    let id = $(this).data("id");
    var products = anythingInCart();
    if(!products){
    addItem0(id);
    }
    else{
    if(!alreadyInLSProducts(products, id)) {
    addToLSProducts(id)
    }
    else {
    updateQ(id);
    }
    }
   
    alert("Your item has been added to the cart!");
   }
   function anythingInCart(){
    return JSON.parse(localStorage.getItem("products"));
   }
   function addItem0(id){
    let products = [];
   
    products[0] = {
    id : id,
    quantity : 1
    };
    localStorage.setItem("products", JSON.stringify(products));
   }
   function alreadyInLSProducts(products, id) {
    return products.find(p => p.id == id);
   }
   function addToLSProducts(id) {
    let products = anythingInCart();
    products.push({
    id : id,
    quantity : 1
    })
    localStorage.setItem("products", JSON.stringify(products));
}
function updateQ(idP) {
 let products = anythingInCart();

 products.forEach(el => {
 if(el.id == idP)
 el.quantity++

 })
 localStorage.setItem("products", JSON.stringify(products));
}
function openProduct(){
 let id = $(this).data("id");
 localStorage.setItem("product", id)
}
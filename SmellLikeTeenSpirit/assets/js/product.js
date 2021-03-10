$(document).ready(function(){
    product();
   
   });
   /* PRODUCT */
   function ajaxProducts(callbackSuccess){
                    $.ajax({
                            url : "assets/data/products.json",
                            method : "GET",
                            type : "json",
                            success : callbackSuccess,
                            error : function(xhr, error, status) {
                                alert(status);
                            }
                        });
        }
   function product(){
    ajaxProducts(function(data){
        let id = localStorage.getItem("product")
        const filtered = data.filter(el => el.id == id);
        displayProduct(filtered);
    })
   }
   function displayProduct(el){
    html=""
    el.forEach(p=>{
    html=`
        <div class="col-12 col-md-4 ">
        <img class="w-100 " src="${p.image}" alt="${p.name}">
        </div>
        <div class="col-12 col-md-5">
        <h1>${p.name}</h1>
        <h2>${p.description.short}</h2>
        <p>${displayHearts(p.hearts)}</p>
        <p>${p.description.long}}</p>    
        <button class="addToCart btnsml mx-auto p-2 buttonSize B" dataid="${p.id}">add to cart</button>
        </div>`;
    })
   
    document.querySelector("#product").innerHTML=html;
    $(".addToCart").click(addToCart);
}
function displayHearts(x){
 html="";
 console.log(x);
 for(let i=0; i<5; i++){
    if(i<x){
        html+=`<i class="fas fa-heart"></i> `
        }
    else{
        html+=`<i class="far fa-heart"></i> `
     }
 }
 return html;
}
$(document).ready(function(){
    slider();
    productsMonth();
   });
   /* SLIDER */
   function slider(){
   
            $.ajax({
                    url : "assets/data/slider.json",
                    method : "GET",
                    type : "json",
                    success : function(data) {
                            let html = displaySlider(data)
                            document.querySelector("#slider").innerHTML = html;
                                            },
                    error : function(xhr, error, status) {
                                        alert(status);
                                                        }
                });
                }

   function displaySlider(data){
    let html = `
                <div id="carouselSlide" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselSlide" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselSlide" data-slide-to="1"></li>
                    <li data-target="#carouselSlide" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">`;
   
    for(let d of data) {
            html += `<div class="carousel-item ${d.active}">
                    <img class="d-block h-500 w-100" src="${d.src}" alt="${d.alt}">
                    </div>`;
                      }
    html += `</div>
                <a class="carousel-control-prev pl-5" href="#carouselSlide" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>

                <a class="carousel-control-next" href="#carouselSlide" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div> `;
    return html;
}


/* PRODUCTS OF THE MONTH */
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

function productsMonth(){
            ajaxProducts(function(data){
                        const filtered = data.filter(el => el.collection.id == 3);
                        displayProducts(filtered);
                    });
        }
function displayProducts(data){
        let html = ""
        data.forEach(el => {
                    html += displayProduct(el)
                    });

        document.querySelector("#whatAmelon").innerHTML = html;
        $(".addToCart").click(addToCart);
        $(".openProduct").click(openProduct);
}
function displayProduct(el){
        return `
                <div class="d-flex flex-column justify-content-between col-12 col-sm-4 mb-3 mt-1">
                    <div class="productL p-4">
                        <div class="openProduct" data-id="${el.id}">
                            <a href="product.html" class="m-0 p-0">
                                <img src="${el.image}" alt="${el.name} ">
                            </a>
                        </div>
                        <div>
                            <p> ${el.name}</p>
                            <p>${displayHearts(el.hearts)}</p>
                            <p class="d-none d-lg-block"> ${el.description.short}</p>
                            <p> ${el.price}</p>
                        </div>
                    </div>
                    <button class="addToCart btnsml btnW B mx-auto p-2 buttonSize " dataid="${el.id}">add to cart</button>
                </div> `;
}
function displayHearts(x){
    html=""
    console.log(x)
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
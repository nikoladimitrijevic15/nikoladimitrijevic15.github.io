$(document).ready(function(){
 products();
 categories();
 collections();
    $( "#coll" ).click(toggleFilters);
    $( "#cate" ).click(toggleFilters);
    $("#search").keyup(searchFilter);
    $("#sort").change(sortPrice);
    resetLS();

});
function resetLS(){
    if(localStorage.getItem("idCat")!=null)  localStorage.removeItem("idCat")

    if(localStorage.getItem("idCol")!=null) localStorage.removeItem("idCol")

    if(localStorage.getItem("idStype")!=null) localStorage.removeItem("idStype")
}
var allProducts;
/* PRODUCT */
function ajaxProducts(callbackSuccess){
    $.ajax({
            url: "assets/data/products.json",
            method: "GET",
            type: "json",
            success: callbackSuccess,
            error: function(xhr, error, status){
                alert(status);}
        }); 
    }
function products(){
    ajaxProducts(function(data){
                allProducts=data;
                displayProducts(data);
        }) 
    }

function displayProducts(data){
    let html = "";
    if(data.length !=0) data.forEach(el => {html += displayProduct(el)});
    else{
        html=`<h2 class="h3 m-auto my-3">No items match your search!</h2>`
    }
    document.querySelector("#products").innerHTML = html;
    $(".addToCart").click(addToCart);
    $(".openProduct").click(openProduct);
}
function displayProduct(el){
 return `
        <div class="d-flex flex-column justify-content-between col-sm-6 col-md-4 mb-3 mt-1">
            <div class="productL p-4">
                <div class="openProduct" data-id="${el.id}">
                    <a href="product.html" class="m-0 p-0">
                        <img class="" src="${el.image}" alt="${el.name} ">
                    </a>
                </div>
                <div>
                    <p> ${el.name}</p>
                    <p>${displayHearts(el.hearts)}</p>
                    <p> ${el.description.short}</p>
                    <p> ${el.price}</p>
                </div>
            </div>
            <button class="addToCart btnsml btnW B mx-auto p-2 buttonSize " data-id="${el.id}">add to cart</button>
        </div>
        `;
}
/* CATEGORIES */
function categories(){

 $.ajax({
    url: "assets/data/category.json",
    method: "GET",
    type: "json",
    success: function(data){
        displayCategories(data)
    },
    error: function(err){
            console.error(err)
                }
    })
}
function displayCategories(data){
    let html=`<ul class='mb-2'><li><a href="#" data-idcat="all">All</a></li>`
    data.forEach(el => {
        html+= displayLiTags("idcat",el)
    })
    html+="</ul>";

    document.querySelector("#categories").innerHTML=html;
    $("#categories ul li a").click(filterCategories);
}
/* COLLECTIONS */
function collections(){
    $.ajax({
            url: "assets/data/collection.json",
            method: "GET",
            type: "json",
            success: function(data){
                    displayCollections(data)
                            },
            error: function(err){
                    console.error(err)
                }
        })
}
function displayCollections(data){
    let html=`<ul class='mb-2'><li><a href="#" data-idcol="all">All</a></li>`
    data.forEach(el => {
            html+= displayLiTags("idcol",el)
    })
    html+="</ul>"
    document.querySelector("#collections").innerHTML=html;
    $("#collections ul li a").click(filterCollections);
}
function displayLiTags(id, data){
    return `<li class="pt-2"><a href="#" data-${id}="${data.id}">${data.name}</a></li>`
}
/* FILTER */
function toggleFilters(){
        $(this).next().stop(true,true).slideToggle();
    }
function filterByX(){
    let category = localStorage.getItem("idCat")
    let collection = localStorage.getItem("idCol")
    let priceSort = localStorage.getItem("idPrice")
    ajaxProducts(function(data){
                if(priceSort!="default")
                    data = data.sort(function(a,b){
                    let A = parseFloat(a.price.substring(1));
                    let B = parseFloat(b.price.substring(1));
                    if(A > B) return priceSort == "lth" ? 1 : -1;
                    else if(A < B) return priceSort == "lth" ? -1 : 1;
                    else return 0;
                });
                if(category && category != "all") data = data.filter(x => x.category.id == category);
                if(collection && collection!="all") data = data.filter(x => x.collection.id == collection);
    displayProducts(data);
    });
}
//search
function searchFilter(){
    const typedIn = this.value;
        ajaxProducts(function(data){
            searched = searchKeyup(typedIn, data);
            displayProducts(searched)
        })
}
function searchKeyup(typedIn, data){
    return data.filter(el => (el.name.toLowerCase().indexOf(typedIn.toLowerCase()) !==-1) || (el.description.short.toLowerCase().indexOf(typedIn.toLowerCase()) !== -1));
}
//categories
function filterCategories(e){
    e.preventDefault()
    const idCat= this.dataset.idcat
    localStorage.setItem("idCat", idCat)
    filterByX();
}
//collection
function filterCollections(e){
    e.preventDefault()
    const idCol= this.dataset.idcol
    localStorage.setItem("idCol", idCol)
    filterByX();
}
   /* SORT */
   function sortPrice(){
        const idPrice = this.value;
        localStorage.setItem("idPrice", idPrice);
        filterByX();
   }
   function displayHearts(x){
    html="";
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
  
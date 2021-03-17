$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        }   
        else {
            $('#return-to-top').fadeOut(200);
        }
    });
    menu();
    footer();   
    $('#return-to-top').click(returnToTop);
   });

function returnToTop(){
    $('body,html').animate({scrollTop : 0}, 500);
   }
   /* MENU */
   function menu(){
    let html=`
                <div class="mr-auto order-0">
                    <a class="navbar-brand" href="index.html">
                        <img id="logo" class="d-inline-block aligntop" src="assets/images/logo.svg" alt="logo">
                    </a>
                </div>
                <button class="navbar-toggler navbar-toggler-right collapsed order-2 order-sm1" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>   
                <div class="navbar-collapse collapse order-2 order-sm-1" id="navb"></div>
                <a href="cart.html" class="mr-3 mr-md-5 order-1 order-sm-2"><i class="fas fa-shopping-cart"></i></a>`;
    
    document.querySelector("#navigation").innerHTML = html;
    displayMenu();
}
function displayMenu(){
    $.ajax({
            url : "assets/data/menu.json",
            method : "GET",
            type : "json",
            success : function(data) {
                displayMainMenu(data);
                },
            error : function(xhr, error, status) {
                alert(status);
                }
        });
}
function displayMainMenu(data){
    let html = `<ul class="navbar-nav mr-auto m-sm-auto col-sm-10 align-self-smcente justify-content-sm-around">`;
    for(let d of data) {
        html +=
                `<li class="nav-il nav-item">
                    <a class="nav-link overlay" href="${d.href}">${d.name}</a>
                </li>`;
            }
        html += `</ul>`;
 
    document.querySelector("#navb").innerHTML = html;
}
/* FOOTER */
function footer(){
    $.ajax({
        url : "assets/data/footer.json",
        method : "GET",
        type : "json",
        success : function(data) {
                displayFooter(data);
            },
        error : function(xhr, error, status) {
                alert(status);
        }
    });
}
function displayFooter(data){
    html=`<div class="container-fluid mb-4">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-sm-12 col-md-4">
                        <ul class="list-unstyled  text-center pt-5">
                            <li class="text-white"><i class="fas fa-phone pr-2"></i>+381 63678643</li>
                            <li class="text-white"><i class="fab fa-instagram pr-2"></i>slts.belgrade</li>
                            <li class="text-white"><i class="fas fa-envelope pr-2"></i>sltsKK@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-4 text-center pt-5 mt-4">
                        <span class="text-white caption">Young spirit smells well &reg; </span>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <ul class="list-unstyled  text-center pt-5">
                            <li class="text-white"><i class="fas fa-search-location pr-2"></i>Knez Mihajlova 26, Dorcol, Beograd</li>
                            <li class="text-white"><i class="fas fa-search-location pr-2"></i>Igmanska 10, Zvezdara, Beograd</li>
                            <li class="text-white"><i class="fas fa-search-location pr-2"></i>Dunavska 34, Dorcol, Beograd</li>
                        </ul>
                    </div>
                </div>
                <div class="row text-center mt-5">  
                    <div id="social" class="col-md-4 col-sm-12">
                        <h5>SLTS Social</h5>
                        <ul id="socialUL" class="mt-3"></ul>
                    </div>
                    <div id="documents" class="col-md-4 col-sm-12">
                        <h5>Files</h5>
                        <ul id="documentsUL" class="mt-3"></ul>
                    </div>
                    <div id="authorF" class="col-md-4 col-sm-12">
                        <h5>Author</h5>
                        <ul id="authorUL" class="mt-3"></ul>
                    </div>
                </div>
            </div>
        </div>`;

    document.querySelector("#footer").innerHTML +=html;
    displayFooterData(data);
   }
   function displayFooterData(data){
    data.forEach(el=>{
            if(el.type == "Social") document.querySelector("#socialUL").innerHTML += displayLi(el);
            else if (el.type == "Documents") document.querySelector("#documentsUL").innerHTML += displayLi(el);
            else document.querySelector("#authorUL").innerHTML += displayLi(el);
    })
   }
   function displaySocial(el){
    return `<li><a href="${el.href}" target="_blank"><i class="${el.icon}"></i></a></li>`;
   }
   function displayLi(el){
    return `<li><a href="${el.href}" target="_blank"><i class="${el.icon}"></i></a></li>`;
   }
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
    html=`
    <div id="social" class="ml-md-5">
        <h5>SLTS Social</h5>
        <ul id="socialUL"></ul>
    </div>
    <div id="documents" class="ml-md-5">
        <h5>Files</h5>
        <ul id="documentsUL"></ul>
    </div>
    <div class="w-100 d-sm-none"></div>
    <div id="authorF" class="ml-lg-5">
        <h5>Author</h5>
        <ul id="authorUL"></ul>
    </div>`;

    document.querySelector("#footer").innerHTML +=html;
    displayFooterData(data)
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
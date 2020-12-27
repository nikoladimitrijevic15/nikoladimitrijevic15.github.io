window.onload=function(){
	
	var about=document.getElementsByClassName("about"),
	tekstovi=["Long time ago, precisely in 1998. my father started up small bussiness. Different types of coffee were distibuted on our market. That was the way of introducing our population to exotic and foreign taste.","Distribution of coffee wasn't enouh, it was time for a new brand. All coffee lovers needed one place where they can enjoy different and strong coffee flavour. That was the way that 'Strks' became first coffeeshop in Serbia.","The time had passed, and now its my bussiness. My name is Nikola and I am inviting you to visit us, supports small bussiness and of course ENJOY."];
	
	for(let i=0; i < about.length; i++){
		
		about[i].innerHTML+="<div><h3></h3></div>";
		about[i].innerHTML+="<p>"+tekstovi[i]+"</p>"; 
		about[i].firstElementChild.classList.add("okvir");
		$(about[0]).find("span").addClass("strks");
	}
	
	var slike=["slika1","slika2","slika3"],
		alts=["coffeeshop","coffee","relaxing with coffe"],
		sliderSlika=1;

		//interval za slider
	setInterval(function(){
		document.getElementById("slika").src="images/" + slike[sliderSlika] + ".jpg";	
		document.getElementById("slika").alt=alts[sliderSlika++];
		if(3==sliderSlika) {
			sliderSlika=0;
		}
	}, 3000);

		//interval za godine 1998
	var i=0, 
		broji1=setInterval(function(){
					if(1998 == i) {
						clearInterval(broji1);
					}
					about[0].firstElementChild.firstElementChild.innerHTML = i; 
					i+=3;
				},3);

		//interval za godine 1998
	var	j=0,
		broji2=setInterval(function(){
					if(2010 == j) {
						clearInterval(broji2);
					}
					about[1].firstElementChild.firstElementChild.innerHTML = j; 
					j+=2;
				},3);

	about[2].firstElementChild.firstElementChild.innerHTML="now".toUpperCase();


	var caption = ["Jamaican","Turkish","Colombian","Kopi Luwak"],
		price = ["4 e/cup","3 e/cup","3.5 e/cup","7 e/cup"],
		imgName = ["kafa1","kafa2","kafa3","kafa4"],
		altImg = ["Jamaican coffee","Turkish coffee","Colombian coffee","Kopi Luwak coffee"],
		rdm = ["Grown on the top of the Blue Mountains of Jamaica, this is one of the most expensive coffee in the world. Only a limited amount of Blue Mountain coffee bean is produced yearly. This Caribbean produce is massively exported to Japan. It has a beautiful bold taste and powerful kick of caffeine to keep you awake for hours. I tried this coffee for the first time when I visited Jamaica, I instantly love it!",
				"A must and trademark in every corner of the Ottoman empire. The preparation up to the serving of Turkish coffee has a character of its own.G ood Turkish coffee should be made in a copper cezve (a small pot that’s used to simmer the coffee) to ensure the prime taste and quality of the coffee. The thick and frothy consistency of the coffee is delicious and something that you should try when you visit Turkey. The Turkish coffee is typically served with water to help cleanse your palate ready for the strong taste of the coffee.",
				"This coffee will give you a good kick of caffeine and comes in different strengths (whichever you might prefer).Colombian coffee has a respected reputation in the coffee industry; This is the third-largest type of coffee production in the world.",
				"Civet Coffee is one of the most expensive and best coffee in the world. Civet or Luwak Coffee is made from the faeces of the Asian Palm Civet. It might sound disgusting, but this little fella’s (Palm Civet) poo can be considered as gold! Please be aware to make sure that you will only support Luwak Coffee that is sustainably farmed.  In some places, the health and living conditions of the Asian Palm Civet are not well looked after by the farmers!"],
			
	karteDiv=document.getElementsByClassName("div");
			
		for(let i=0; i < caption.length; i++){
				
			var karta=document.createElement("div");
				
			karta.classList.add("col-lg-3","divovi","col-md-12","position-relative");
			karta.setAttribute("data-aos","fade-right");
			karta.innerHTML+=`<img class="visina" src="images/${imgName[i]}.jpg" class="img-responsive" alt="${altImg[i]}" /></a>\n`;
			karta.innerHTML+=`<span class="cena">${price[i]}</span>`;
			karta.innerHTML+=`<h3 class="text-center mt-3">${caption[i]}</h3>`;
			karta.innerHTML+=`<a href="#" class="text-decoration-none kartica text-uppercase"> Read more </a>`;
			karta.innerHTML+=`<div class="d-none slova"> <h3 class="mt-3 mb-3">${caption[i]}</h3> <p class="pl-2 pr-2">${rdm[i]} </p>`;
			i >= 4 ? karteDiv[1].appendChild(karta) : karteDiv[0].appendChild(karta);
		}
			
	var icons=['<i class="fab fa-facebook-square"></i>','<i class="fab fa-instagram"></i>','<i class="fab fa-linkedin"></i>'],
		links=["https://www.facebook.com","https://www.instagram.com","https://linkedin.com"],
		socialList=document.createElement("ul");
				
		socialList.classList.add("list-unstyled","listaFuter","d-flex","flex-direction-row","justify-content-around");
		document.getElementById("social").appendChild(socialList);
			
		for(let i=0; i < icons.length; i++){
			document.querySelector("#social ul").innerHTML+=`<li>\n <a target="_blank" href="${links[i]}" class="text-decoration-none">\n${icons[i]}\n</a>\n</li>`;
		}
	var docs=['<i class="fas fa-sitemap"></i>','<i class="far fa-file-code"></i>','<i class="far fa-address-card"></i>'],
		path=["sitemap.xml","documentationCoffeeshop.pdf","#test-modal"],
		dataList=document.createElement("ul");
				
		dataList.classList.add("list-unstyled","listaFuter","d-flex","flex-row","justify-content-around");
		document.getElementById("files").appendChild(dataList);
			
		for(let i=0; i < docs.length; i++){
			document.querySelector("#files ul").innerHTML += 2==i ? `<li>\n <a target="_blank" href="${path[i]}" class="text-decoration-none popup-modal">\n${docs[i]}\n</a>\n</li>` : `<li>\n<a target="_blank" href="${path[i]}" class="text-decoration-none">\n${docs[i]}\n</a>\n</li>`;
		}
									
	$(document).ready(function(){
						//hover linkova u footer-u
						$(".listaFuter li a i").hover(
									function(){
										$(this).animate({fontSize:"+=4px",paddingTop:"-=2px"},100)},
									function(){
										$(this).animate({fontSize:"-=4px",paddingTop:"+=2px"},100)});			
									
						//omogucavanje Read more i Close funkcije na kartici
						var i=0;
	
						$(".kartica").click(function(closeReadMore){
												closeReadMore.preventDefault();
												++i%2==1 ? ($(this).next().addClass("apsolutni"),$(this).text("Close")) : ($(this).next().removeClass("apsolutni"),$(this).text("Read more"))});
									
						//navbar
						$(".navbar-toggler").click(function(){$(".navbar-collapse").toggle("fast")});
									
						//animacija linkova u headeru
						$("#lista li").hover(
									function(){
										$(this).addClass("meniLi")},
									function(){
										$(this).removeClass("meniLi")});

						AOS.init();

						// modal autor
						$(".popup-modal").click(function(author){
										Swal.fire({text:"Hello my name is Nikola. I am styding at ICT college and my plan is to become as good as possible in programing. Click on copyright text and see my portfolio, and come to work together!",imageUrl:"images/autor.jpg",imageWidth:"70%",imageHeight:"70%",imageAlt:"Author's image"});
										author.preventDefault();});});}



							
							
							
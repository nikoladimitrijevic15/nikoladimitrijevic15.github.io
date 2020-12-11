window.onload=function(){
	
	var e=document.getElementsByClassName("about"),
	a=["Long time ago, precisely in 1998. my father started up small bussiness. Different types of coffee were distibuted on our market. That was the way of introducing our population to exotic and foreign taste.","Distribution of coffee wasn't enouh, it was time for a new brand. All coffee lovers needed one place where they can enjoy different and strong coffee flavour. That was the way that 'Strks' became first coffeeshop in Serbia.","The time had passed, and now its my bussiness. My name is Nikola and I am inviting you to visit us, supports small bussiness and of course ENJOY."];
	for(let i=0; i < e.length; i++)
		e[i].innerHTML+="<div><h3></h3></div>",
		e[i].innerHTML+="<p>"+a[i]+"</p>", 
		e[i].firstElementChild.classList.add("okvir"),
		$(e[0]).find("span").addClass("strks");
	
	var i=["slika1","slika2","slika3"],
		t=["coffeeshop","coffee","relaxing with coffe"],
		s=1;
		setInterval(function(){
			document.getElementById("slika").src="images/" + i[s] + ".jpg",	
			document.getElementById("slika").alt=t[s++], 3==s && (s=0)}, 3e3);

			var n=-1, l=setInterval(function(){
						2014==n&&clearInterval(l),
						e[0].firstElementChild.firstElementChild.innerHTML=n,n+=5},3),
						r=1,
						o=setInterval(function(){
							2016==r&&clearInterval(o),
							e[1].firstElementChild.firstElementChild.innerHTML=r,r+=5},3);

						e[2].firstElementChild.firstElementChild.innerHTML="now".toUpperCase();


			var c=["Jamaican coffee","Turkish coffee","Colombian coffee","Kopi Luwak"],
			price=["4 e/cup","3 e/cup","3.5 e/cup","7 e/cup"],
			imgName=["kafa1","kafa2","kafa3","kafa4"],
			altImg=["Jamaican coffee","Turkish coffee","Colombian coffee","Kopi Luwak coffee"],
			rdm=["Grown on the top of the Blue Mountains of Jamaica, this is one of the most expensive coffee in the world. Only a limited amount of Blue Mountain coffee bean is produced yearly. This Caribbean produce is massively exported to Japan. It has a beautiful bold taste and powerful kick of caffeine to keep you awake for hours. I tried this coffee for the first time when I visited Jamaica, I instantly love it!",
				"A must and trademark in every corner of the Ottoman empire. The preparation up to the serving of Turkish coffee has a character of its own.G ood Turkish coffee should be made in a copper cezve (a small pot that’s used to simmer the coffee) to ensure the prime taste and quality of the coffee. The thick and frothy consistency of the coffee is delicious and something that you should try when you visit Turkey. The Turkish coffee is typically served with water to help cleanse your palate ready for the strong taste of the coffee.",
					"This coffee will give you a good kick of caffeine and comes in different strengths (whichever you might prefer).Colombian coffee has a respected reputation in the coffee industry; This is the third-largest type of coffee production in the world.",
					"Civet Coffee is one of the most expensive and best coffee in the world. Civet or Luwak Coffee is made from the faeces of the Asian Palm Civet. It might sound disgusting, but this little fella’s (Palm Civet) poo can be considered as gold! Please be aware to make sure that you will only support Luwak Coffee that is sustainably farmed.  In some places, the health and living conditions of the Asian Palm Civet are not well looked after by the farmers!"],
			y=document.getElementsByClassName("div");
			for(let e=0; e < c.length; e++){
				var v=document.createElement("div");
				v.classList.add("col-lg-3","divovi","col-md-6","col-sm-12","position-relative"),
				v.setAttribute("data-aos","fade-right"),
			v.innerHTML+=`<img class="visina" src="images/${imgName[e]}.jpg" class="img-responsive" alt="${altImg[e]}" /></a>\n`,
			v.innerHTML+=`<span class="cena">${price[e]}</span>`,
			v.innerHTML+=`<h3 class="text-center mt-3">${c[e]}</h3>`,
			v.innerHTML+='<a href="#" class="text-decoration-none kartica text-uppercase"> Read more </a>',
			v.innerHTML+=`<div class="d-none slova"> <h3 class="mt-3 mb-3">${c[e]}</h3> <p class="pl-2 pr-2">${rdm[e]} </p>`,
			e>=4 ? y[1].appendChild(v) : y[0].appendChild(v)}
			
			var w=['<i class="fab fa-facebook-square"></i>','<i class="fab fa-instagram"></i>','<i class="fab fa-linkedin"></i>'],
				k=["https://www.facebook.com","https://www.instagram.com","https://linkedin.com"],
				b=document.createElement("ul");
				
				b.classList.add("list-unstyled","listaFuter","d-flex","flex-direction-row","justify-content-around"),
				document.getElementById("social").appendChild(b);
			
			for(let e=0; e < w.length; e++)
				document.querySelector("#social ul").innerHTML+=`<li>\n <a target="_blank" href="${k[e]}" class="text-decoration-none">\n${w[e]}\n</a>\n</li>`;
			
			var L=['<i class="fas fa-sitemap"></i>','<i class="far fa-file-code"></i>','<i class="far fa-address-card"></i>'],
				M=["sitemap.xml","dokumentacija.pdf","#test-modal"],
				j=document.createElement("ul");
				
				j.classList.add("list-unstyled","listaFuter","d-flex","flex-row","justify-content-around"),
				document.getElementById("files").appendChild(j);
			
			for(let e=0; e < L.length; e++)
				document.querySelector("#files ul").innerHTML+=2==e?`<li>\n <a target="_blank" href="${M[e]}" class="text-decoration-none popup-modal">\n${L[e]}\n</a>\n</li>`:`<li>\n                            <a target="_blank" href="${M[e]}" class="text-decoration-none">\n                                ${L[e]}\n                            </a>\n                      </li>`;
			//---------------------------------------------------
			var C=document.getElementById("adopt");
				C.innerHTML+='<option value="0" selected> Choose... </option>';
			for(let e=0; e < c.length; e++)
				C.innerHTML+=`<option value="${e+1}"> ${c[e]} </option>`;

			var S=document.getElementById("reason"),z=S.nextElementSibling,B=document.getElementById("adopt"),H=B.nextElementSibling,x=document.getElementById("dugme");
			x.addEventListener("click",function(){
				var e=[];
				x.classList.add("bojaKlik"),"0"==S.value?(z.innerHTML="Choose type of your message",z.classList.add("greska"),e.push("Non-selected type of message.")):(z.innerHTML="",z.classList.remove("greska"),e.pop()),"0"==B.value?(H.innerHTML="Choose a cat",H.classList.add("greska"),e.push("Non-selected cat for adoption.")):(H.innerHTML="",H.classList.remove("greska"),e.pop());

			
			var a=document.getElementById("FirstName"),i=a.nextElementSibling;
			/^[A-Z][a-z]{2,}$/.test(a.value)?(i.innerHTML="",i.classList.remove("greska"),e.pop()):(i.innerHTML="Incorrect name",i.classList.add("greska"),e.push("Incorrect name."));
			var t=document.getElementById("LastName"),s=t.nextElementSibling;
			/^([A-Z][a-z]{2,})(\s[A-Z][a-z]{2,})?$/.test(t.value)?(s.innerHTML="",s.classList.remove("greska"),e.pop()):(s.innerHTML="Incorrect last name",s.classList.add("greska"),e.push("Incorrect last name."));
			var n=document.getElementById("email"),l=n.nextElementSibling;document.getElementById("email").autocomplete="off",/^([a-z0-9\.\_\-])+@([a-z])+\.([a-z]){2,}$/.test(n.value)?(l.innerHTML="",l.classList.remove("greska"),e.pop()):(l.innerHTML="Incorrect e-mail address",l.classList.add("greska"),e.push("Incorrect e-mail."));
			var r="";
			if(0!=e.length){
				for(let a=0;a < e.length;a++)
						r+=`${e[a]} <br/><br/>`;
					Swal.fire({position:"center",icon:"error",title:`${r}`,showConfirmButton:!0,timer:5e3})}
			
			0==e.length && Swal.fire({position:"center",icon:"success",title:"Your message has been sent!",showConfirmButton:!1,timer:2e3})});
			

			var P=[],T=[];
			for(let e=0; e<12; e++)
				P[e]=e+1,T[e]=`Gallery ${e+1}`;
			
			for(let e=0;e<P.length;e++)
				if(e<=5){var I=document.createElement("div");
							I.classList.add("col-lg-2","col-md-4","col-sm-6","p-0","mb-3"),
							I.innerHTML+=`<a class="linkSlika" href="images/shelter/${P[e]}.jpg" title="${T[e]}"><img src="images/shelter/${P[e]}.jpg" alt="${T[e]}  class="slikaShelter" /></a>`,document.getElementsByClassName("shelter")[0].appendChild(I)}else{var G=document.createElement("div");G.classList.add("col-lg-2","col-md-4","col-sm-6","p-0","mb-3"),G.innerHTML+=`<a class="linkSlika" title="${T[e]}" href="images/shelter/${P[e]}.jpg"><img src="images/shelter/${P[e]}.jpg" alt="${T[e]} class="slikaShelter" />`,document.getElementsByClassName("shelter")[1].appendChild(G)}$(document).ready(function(){$("#services .vrstaKafe").hover(function(){$(this).removeClass("vrstaKafe"),$(this).addClass("weProvideOpposite")},function(){$(this).removeClass("weProvideOpposite"),$(this).addClass("weProvide")}),$(".listaFuter li a i").hover(function(){$(this).stop(!0,!0).animate({fontSize:"+=4px",paddingTop:"-=2px"},500)},function(){$(this).stop(!0,!0).animate({fontSize:"-=4px",paddingTop:"+=2px"},500)}),$(".linkA").click(function(){$("#reason").val("2").change(),$(".sk").removeClass("skriven"),$(".promeniCol").removeClass("col-md-12").addClass("col-md-6")}),$("#here").click(function(){$("#reason").val("2").change(),$(".sk").removeClass("skriven"),$(".promeniCol").removeClass("col-md-12").addClass("col-md-6")});
				var e=0;$(".kartica").click(function(a){a.preventDefault(),++e%2==1?($(this).next().addClass("apsolutni"),$(this).text("Close")):($(this).next().removeClass("apsolutni"),$(this).text("Read more"))}),
				$(".linkA").click(function(){var e,a=$(this).prev().text(),i=document.querySelectorAll("#adopt option");
				for(let t=0;t<c.length+1;t++)i[t].text==a&&(e=i[t].value);
					$("#adopt").val(e).change()}),
					$(".navbar-toggler").click(function(){
							$(".navbar-collapse").toggle("slow")}),
						
						$("#lista li").hover(function(){
							$(this).addClass("meniLi")},function(){
												$(this).removeClass("meniLi")}),
						AOS.init(),
						
						$(".popup-modal").click(function(e){
							Swal.fire({text:"Nikola Dimitrijevic | 27/19",imageUrl:"images/autor.jpg",imageWidth:"70%",imageHeight:"70%",imageAlt:"Author's image"}),
							e.preventDefault()}),
						$(".linkSlika").click(function(e){let a=$(this).attr("href");
											e.preventDefault(),
											Swal.fire({imageUrl:a,imageWidth:"100%",imageHeight:"100%"})}),
						$(".linkZaLjubimce").click(function(e){
								let a=$(this).attr("href"),
								i=$(this).next().next().next().text();
								e.preventDefault(),
								Swal.fire({title:i,imageUrl:a,imageWidth:"400",imageHeight:"200"})}),
						$(".mini").click(function(e){
								let a=$(this).attr("href");
								e.preventDefault(),Swal.fire({imageUrl:a,imageWidth:"400",imageHeight:"200"})})})};
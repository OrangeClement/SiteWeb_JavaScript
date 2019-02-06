//Banner
$(document).ready(function() {
	$(function(){
		//restituer la largeur de chaque photo et le nombre des photos
		var distance=$(".top .top_img img").width();
		var list=$('.top_img img').length;
		//définir la largeur de la section où se trouvent les photots
		$('.top_img').css({
			width:list*distance,
		});
		//ouvrir un compteur
		//Dérouler automatiquement toutes les 2 secondes
		var timer='';
		var num=0;
		timer=setInterval(anime,2000);
		//faire déplacer les photos à gauche
		function anime(){
			num++;
			if(num>parseFloat(list)-1){
				num=0;
				$('.top_img').animate({left:num*-distance},"slow");
			}else{
				$('.top_img').animate({left:num*-distance},"slow");
			}
		}
		//arrêter l'animation quant les photos sont invisibles
		document.addEventListener("visibilitychange", function(){
			if (document.hidden || document.webkitHidden) {
				clearInterval(timer);
			}else  {
				timer = setInterval(anime,2000);
			}
			}, false);
	});
});

//faire apparaître les éléments en déscendant la page
$(document).ready(function(){
	//L'événement de défilement 
	$(window).scroll(function(){
		//obtenir la hauteur où la page a descendu
		var scroll_top = $(window).scrollTop();
		$('p, h1, h2, .description img, li, .titleframe').each(function(){
			var height = $(this).offset().top;
			if (scroll_top >= height-1000 ){
				$(this).fadeTo(1000,1);
			}
		});			 
	});
});

//faire commencer l'animation dans la balise 'canvas' en déscendant la page
$(document).ready(function(){
	//L'événement de défilement 
	var start=false;
	$(window).scroll(function(){
		var scroll_top = $(window).scrollTop();
		var height = $("#canvas").offset().top;
		if (scroll_top >= height-300 && start===false){
			start=true;
			draw();
		}		
	});			 
});


//faire apparaître le sous-menu et le cacher 
function displaySubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "block"; 
} 
function hideSubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "none"; 
} 
		

//animation dans le cours 1 et contrôler le boutton
$(document).ready(function(){
	function displayrecherche() { 
		var	li=document.getElementById('cours-recherche').getElementsByTagName("li");
		var NowFrame = 0; //définir le numéro de la photo qctuelle
		var MaxFrame = 9; //définir le nombre total des photos
		var next = 1;
		var timer='';
		//dérouler les photos chaque 1.5s
		timer=setInterval(show,1500);
		function show() {
			li[NowFrame].style.display = "none";
			li[next].style.display = "block";
			NowFrame = next;
			if (next == MaxFrame){
				//terminer le compteur et afficher le boutton
				clearInterval(timer);
				$("#btnrecherche").fadeIn(500);
			}
			else{
				next++;
			}
		}		
	}
	//faire dispparaître le boutton
	$("#btnrecherche").click(function(){
		$("#btnrecherche").fadeOut(100,displayrecherche);
	});
});
	
//ouvrir une couche (layer) 
//les paramètre entrées sont le type et le contenue du layer
//typeL:(1，adapté pour DOM，str；2，adapté pour frame)，contenue(type=1:$('xxx'); type=2:'xxxxxxxx')	
function layershow(typeL,contenue){
	layer.ready(function(){
		layer.open({
			type: typeL,
			title: 0,
			maxmin: false,
			shade: 0.8,
			closeBtn:1,
			shadeClose: true,
			area: ['90%', '90%'],
			content:contenue,
		});
	});	
}

//contrôler les fonctions sur deux bottons dans le cours 4
$(document).ready(function(){
	$(".buttontop").mouseover(function(){
		$("#imgvideo").stop();
		$("#imgvideo").fadeTo(500,1);
	});
	$(".buttontop").mouseout(function(){
		$("#imgvideo").stop();
		$("#imgvideo").fadeTo(200,0);
	});
	$(".buttontop").click(function(){
		layershow(1,$('.show'));
	});
	$(".buttonbottom").mouseover(function(){
		$("#imgDBpedia").stop();
		$("#imgDBpedia").fadeTo(500,1);
	});
	$(".buttonbottom").mouseout(function(){
		$("#imgDBpedia").stop();
		$("#imgDBpedia").fadeTo(200,0);
	});
	$(".buttonbottom").click(function(){
		layershow(2,'http://www.visualdataweb.org/relfinder/relfinder.php');
	});
});
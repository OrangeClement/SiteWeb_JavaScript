//définir deux tableaux: l'un pour préserver les valeurs, l'autre pour préserver les poids
var arrvalue = new Array,
	arrpoids =new Array;
//dans chaque tableau, il y a 5 groupes de chiffres et chaque groupe contient 7 chiffres
for(var i=0;i<5;i++){        
    arrvalue[i] = new Array();
	arrpoids[i] = new Array();
    for(var j=0;j<6;j++){  
        arrvalue[i][j] = 0;
		arrpoids[i][j] = 0;
    }
}
	arrvalue[0][0] = 88;
	arrvalue[0][1] = 185;
	arrvalue[0][2] = 270;
	arrvalue[0][3] = 112;
	arrvalue[0][4] = 210;
	arrvalue[0][5] = 450;
	arrvalue[0][6] = 715;
	
	arrvalue[1][0] = 11;
	arrvalue[1][1] = 100;
	arrvalue[1][2] = 110;
	arrvalue[1][3] = 25;
	arrvalue[1][4] = 137;
	arrvalue[1][5] = 200;
	arrvalue[1][6] = 715;
	
	arrvalue[2][0] = 156;
	arrvalue[2][1] = 98;
	arrvalue[2][2] = 225;
	arrvalue[2][3] = 125;
	arrvalue[2][4] = 253;
	arrvalue[2][5] = 280;
	arrvalue[2][6] = 194;
	
	arrvalue[3][0] = 202;
	arrvalue[3][1] = 387;
	arrvalue[3][2] = 458;
	arrvalue[3][3] = 378;
	arrvalue[3][4] = 359;
	arrvalue[3][5] = 913;
	arrvalue[3][6] = 530;
	
	arrvalue[4][0] = 141;
	arrvalue[4][1] = 50;
	arrvalue[4][2] = 224;
	arrvalue[4][3] = 90;
	arrvalue[4][4] = 89;
	arrvalue[4][5] = 148;
	arrvalue[4][6] = 249;
	
	arrpoids[0][0] = 18;
	arrpoids[0][1] = 300;
	arrpoids[0][2] = 350;
	arrpoids[0][3] = 140;
	arrpoids[0][4] = 485;
	arrpoids[0][5] = 600;
	arrpoids[0][6] = 1000;
	
	arrpoids[1][0] = 100;
	arrpoids[1][1] = 300;
	arrpoids[1][2] = 350;
	arrpoids[1][3] = 100;
	arrpoids[1][4] = 500;
	arrpoids[1][5] = 600;
	arrpoids[1][6] = 700;
	
	arrpoids[2][0] = 310;
	arrpoids[2][1] = 200;
	arrpoids[2][2] = 430;
	arrpoids[2][3] = 300;
	arrpoids[2][4] = 500;
	arrpoids[2][5] = 560;
	arrpoids[2][6] = 430;
	
	arrpoids[3][0] = 125;
	arrpoids[3][1] = 400;
	arrpoids[3][2] = 476;
	arrpoids[3][3] = 310;
	arrpoids[3][4] = 370;
	arrpoids[3][5] = 900;
	arrpoids[3][6] = 588;
	
	arrpoids[4][0] = 400;
	arrpoids[4][1] = 250;
	arrpoids[4][2] = 550;
	arrpoids[4][3] = 250;
	arrpoids[4][4] = 200;
	arrpoids[4][5] = 300;
	arrpoids[4][6] = 500;
//préserver le meilleur solution en terme de valeurs
var arrres = new Array;
	arrres[0] = 1105;
	arrres[1] = 952;
	arrres[2] = 759;
	arrres[3] = 1568;
	arrres[4] = 652;
//pour trouver le groupe lequel va s'afficher
var nb = 4;
//préserver la somme des poids et la somme des valeurs
var sumid=0,
    sumvalue=0;
	
$(function() {

	valeur(nb);
	//obtenir les poids et les valeurs dans les checkbox qui sont choisis
    $( '.ressource').click(function() {
		sumid=0;
		$('.ressource').find('input:checked').each(function(){
			sumid+=Number($(this).attr("id"));
		}); 
		sumvalue=0;
		$('.ressource').find('input:checked').each(function(){
			sumvalue+=Number($(this).attr("value"));
		});
      
		if(sumid>1500){
			alert("C'est déja hors limite. Essayez une autre fois.");
			$('.ressource').find('input:checked').prop("checked",false);
			$(".sumid").text(0);
			$(".pourcentage").animate({width:"0"});
			$(".sumvalue").text(0);
		}
		else{
			$(".sumid").text(1500-sumid);
			$(".pourcentage").animate({width:sumid/30*4},500);
			$(".sumvalue").text(sumvalue);
		}
    
	});
	
	//btn pour voir le résultat
	$("#cours8_check").click(function(){
		if(sumvalue == arrres[nb]){
			
			var msg="Félicitation, vous avez le meilleur choix ！\n\n Vous voulez continuer à résoudre le problème avec les chiffres différents ?";
			
			if(confirm(msg) == true){
				//change un autre groupe de valeur et de poids
				$('.ressource').find('input:checked').prop("checked",false);
				$(".sumid").text(0);
				$(".pourcentage").animate({width:"0"});
				$(".sumvalue").text(0);
				sumid=0;
				sumvalue=0;
				if(nb === 4){
					nb = 0;
				}else{
					nb = nb + 1;
				}
				valeur(nb);
			}
		}else{
			var msg="Vous pouvez faire mieux！\n\n Vous voulez garder vos choix ?";
			
			if(confirm(msg) == false){
				//change un autre groupe de valeur et de poids
				$('.ressource').find('input:checked').prop("checked",false);
				$(".sumid").text(0);
				$(".pourcentage").animate({width:"0"});
				$(".sumvalue").text(0);
				sumid=0;
				sumvalue=0;
			}
		}
	});
       
});

function valeur(nb){
	//affecter les valeurs et les poids aux chaque objets et les afficher 
	$(".objet1").attr("id",arrpoids[nb][0]);
	$(".objet1").val(arrvalue[nb][0]);
	$(".txtobjet1").text(arrpoids[nb][0] + "g" + " " + arrvalue[nb][0] + "$");
	
	$(".objet2").attr("id",arrpoids[nb][1]);
	$(".objet2").val(arrvalue[nb][1]);
	$(".txtobjet2").text(arrpoids[nb][1] + "g" +  " " + arrvalue[nb][1] + "$");
	
	$(".objet3").attr("id",arrpoids[nb][2]);
	$(".objet3").val(arrvalue[nb][2]);
	$(".txtobjet3").text(arrpoids[nb][2] + "g" +  " " + arrvalue[nb][2] + "$");
	
	$(".objet4").attr("id",arrpoids[nb][3]);
	$(".objet4").val(arrvalue[nb][3]);
	$(".txtobjet4").text(arrpoids[nb][3] + "g" +  " " + arrvalue[nb][3] + "$");
	
	$(".objet5").attr("id",arrpoids[nb][4]);
	$(".objet5").val(arrvalue[nb][4]);
	$(".txtobjet5").text(arrpoids[nb][4] + "g" +  " " + arrvalue[nb][4] + "$");
	
	$(".objet6").attr("id",arrpoids[nb][5]);
	$(".objet6").val(arrvalue[nb][5]);
	$(".txtobjet6").text(arrpoids[nb][5] + "g" +  " " + arrvalue[nb][5] + "$");
	
	$(".objet7").attr("id",arrpoids[nb][6]);
	$(".objet7").val(arrvalue[nb][6]);
	$(".txtobjet7").text(arrpoids[nb][6] + "g" +  " " + arrvalue[nb][6] + "$");
		
}
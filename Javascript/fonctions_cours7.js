var venteprix = new Array;
	venteprix[0]= 150;
	venteprix[1]= 265;
	venteprix[2]= 370;
	venteprix[3]= 410;

var achatprix = new Array;
	achatprix[0]= 400;
	achatprix[1]= 300;
	achatprix[2]= 200;
	
var inputprix = 0;
var nombre = 0;

$(function(){
	
	var prix = document.getElementsByClassName("move_prix")[0];
	var input = document.getElementsByTagName("input")[0];
    prix.style.left = 0;
	
    prix.onmousedown = function (evt) {
		
        var obj = this;
        var oldX = evt.clientX;
        var left = parseInt(obj.style.left);
		
        document.onmousemove = function(evt) {
			//la position du bloc
            var x = evt.clientX - oldX;
				obj.style.left = left + x + "px";
				
			var res=parseInt(obj.style.left);
			
            if ( res < 0) {
                obj.style.left = 0;
				res = 0;
            }
            if ( res > 400) {
                obj.style.left = 400 + "px";
				res = 400;
            }
			//montrer la position
			input.value = Math.ceil(res / 400 * 500);
			inputprix = input.value;
        }
		
        document.onmouseup = function (evt) {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
	//confirmer le prix
	$(".checkprix").click(function(){
		
		$("#showprix").show();
		$("#makeprix").hide();	
		//montrer les prix ventes dans l'ordre
		$(".prix1").text(venteprix[0]);
		$(".prix2").text(venteprix[1]);
		$(".prix3").text(venteprix[2]);
		$(".prix4").text(venteprix[3]);
		//montrer les prix achats dans l'ordre
		if(inputprix<achatprix[2]){
			achatprix[3]=inputprix;
		}else if(inputprix<achatprix[1]){
			achatprix[3]=achatprix[2];
			achatprix[2]=inputprix;
		}else if(inputprix<achatprix[0]){
			achatprix[3]=achatprix[2];
			achatprix[2]=achatprix[1];
			achatprix[1]=inputprix;
		}else{
			achatprix[3]=achatprix[2];
			achatprix[2]=achatprix[1];
			achatprix[1]=achatprix[0];
			achatprix[0]=inputprix;
		}
		$(".prix5").text(achatprix[0]);
		$(".prix6").text(achatprix[1]);
		$(".prix7").text(achatprix[2]);
		$(".prix8").text(achatprix[3]);
		//trouver le k (le nombre de valeurs dont l'achat est supérieur à ce dont la vente)
		for(i=0;i<4;i++){
			if(achatprix[i]>venteprix[i]){
				nombre=nombre+1;
			}
		}
		$(".k").text(nombre);
		//obtenir le prix d'achat et le prix de vente
		switch (true) {
				case achatprix[nombre]<venteprix[nombre-1] && achatprix[nombre-1]<venteprix[nombre]:
					$(".show_prixachat").text(venteprix[nombre-1]);
					$(".show_prixvente").text(achatprix[nombre-1]);
					$(".prixmoyen").text(venteprix[nombre-1]);
					break;
				case  achatprix[nombre]<venteprix[nombre-1] && achatprix[nombre-1]>=venteprix[nombre]:
					$(".show_prixachat").text(venteprix[nombre-1]);
					$(".show_prixvente").text(venteprix[nombre]);
					$(".prixmoyen").text(venteprix[nombre-1]);
					break;
				case achatprix[nombre]>=venteprix[nombre-1] && achatprix[nombre-1]<venteprix[nombre]:
					$(".show_prixachat").text(achatprix[nombre]);
					$(".show_prixvente").text(achatprix[nombre-1]);
					$(".prixmoyen").text(achatprix[nombre]);
					break;
				default:
					$(".show_prixachat").text(venteprix[nombre]);
					$(".show_prixvente").text(achatprix[nombre]);
					$(".prixmoyen").text(venteprix[nombre]);
					break;
			}
	})
	//changer le prix
	$(".changeprix").click(function(){
		$("#showprix").hide();
		$("#makeprix").show();
		
		achatprix[0]= 400;
		achatprix[1]= 300;
		achatprix[2]= 200;
		achatprix[3]= 0;
		nombre = 0;
		$(".prixmoyen").text(0);
	})
	
	$(".voirprix").click(function(){
		$("#showprix").hide();
		$("#voir_mecanisme").show();
		
	})
	
	$(".cours7_return").click(function(){
		$("#voir_mecanisme").hide();
		$("#showprix").show();
	})

});

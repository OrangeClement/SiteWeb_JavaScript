//préserver le score d'évaluation de chaque film
var film = new Array();
//préserver le résultat de normalisation du score d'évaluation de chaque film
var filmnor = new Array();
//préserver le score final de chaque film 
var note = new Array();
//si le star est clique
var starcliq = new Array();

for(i=0;i<5;i++){
	film[i]=0;
	filmnor[i]=0;
	note[i]=0;
starcliq[i]=0;	
}

//préserver la matrice de similarité film/film
var sim = [[-0.80,0.57,0.33,-0.44],[0.08,0.78,-0.59,-0.18],[0.51,-0.32,-0.74,0.94],[0.85,-0.10,-0.51,0.15]];
var sommesim = new Array();
for(i=0;i<5;i++){
	sommesim[i]=0;
}
//faire la somme de chaque score pour un film évalué
for (i=0; i <4; i++){
	for (j=0;j<4;j++){
		sommesim[i+1]=sommesim[i+1]+Math.abs(sim[i][j]);
	}
}	
//éclair les stars
$(function () {
    var objs = $(".stars a");
        $(objs).mouseover(function () {
            var ix = $(this).index();
            sets(ix, this);
        });

        $(objs).mouseout(function () {
			var id=$(this).parent().attr("id");
			var idn=Number(id.substr(1));
            var ix = starcliq[idn];
            if (ix == undefined || ix == 0)
                ix = -1;
            sets(ix-1, this);
        });

        $(objs).click(function () {
            var ix = $(this).index();
			var id=$(this).parent().attr("id");
			var idn=Number(id.substr(1));
			film[idn]=ix +1;
			starcliq[idn]=ix + 1;
            sets(ix, this);
			$(this).parent().next("p").html(film[idn] + '.0');
        });
    });
	
function sets(ix, obj) {
    $(obj).parent().children().each(function (ik) {
        if (ik <= ix) {
            $(this).css("backgroundPosition", '0 0');
        } else {
            $(this).css("backgroundPosition", '0 -20px');
        }
    });
}
//entre dans la page suivante	
function nextpage(){
	var evaluer=true;
	//vérifier si tous les films sont évalués
	for(i=1;i<5;i++){
		if(film[i] === 0){
			evaluer=false;
			alert("Veuillez évaluer tous les films, SVP！");
			return;
		}
		
	}
		
	if(evaluer=true){
		norma_eva();
		premier_score();		
		document.getElementById("premier").style.display="none";
		document.getElementById("deuxieme").style.display="block";
	}	
}

//normaliser le score de l'evaluation 
function norma_eva(){
	for(i=0;i<4;i++){
		filmnor[i+1] = (film[i+1]-3)/2;
	}
}	
//obtenir le score le plus grand
function premier_score(){
	//Calculer le score de recommandation normalisé
	for (i=0; i <4; i++){
			for (j=0;j<4;j++){
				note[i+1]=note[i+1]+filmnor[j+1]*sim[i][j];
			}
			note[i+1]=note[i+1]/sommesim[i+1];
		}
	//mise en ordre ces quatre films que on veut recommender
		var order=[[1,2,3,4],[note[1],note[2],note[3],note[4]]];
		var min=note[1];
		var minindex=1;
		
		for(i=1;i<4;i++){
			if(order[1][i]<min){
				min=order[1][i];
				minindex=order[0][i];
				order[1][i]=order[1][0];
				order[0][i]=order[0][0];
				order[1][0]=min;
				order[0][0]=minindex;
			}
			
		}
		
		min=order[1][1];
		minindex=order[0][1];
		
		for(i=2;i<4;i++){
			if(order[1][i]<min){
				min=order[1][i];
				minindex=order[0][i];
				order[1][i]=order[1][1];
				order[0][i]=order[0][1];
				order[1][1]=min;
				order[0][1]=minindex;
			}
			
		}
		
		min=order[1][2];
		minindex=order[0][2];
		
		if(order[1][3]<min){
			min=order[1][3];
			minindex=order[0][3];
			order[1][3]=order[1][2];
			order[0][3]=order[0][2];
			order[1][2]=min;
			order[0][2]=minindex;
		}
		
		//changer l'affiche selon le film qui a le score le plus haut
		var obj = document.getElementById("recom1");
			
		for(i=0;i<4;i++){
			if(order[0][i]==1){
				obj.src="Images/cours5/coco.jpg";
				
			}else if(order[0][i]==2){
				obj.src="Images/cours5/miserables.jpg";
				
			}else if(order[0][i]==3){
				obj.src="Images/cours5/blackswan.jpg";
				
			}else{
				obj.src="Images/cours5/starwar.jpg";
			}
		}		
}	
//retourner à la dernière page 
function lastpage(){
	document.getElementById("deuxieme").style.display="none";
	document.getElementById("premier").style.display="block";
	for(i=0;i<5;i++){
		note[i]=0; 
	}
}
//contrôler le boutton qui ouvrir ou fermer la troisième page
var voir=true;
function voirtheorie(){
	if(voir==true){
		document.getElementById("troisieme").style.opacity="1";
		document.getElementById("troisieme").style.zIndex="2";
		voir=false;
	}else{
		document.getElementById("troisieme").style.opacity="0";
		document.getElementById("troisieme").style.zIndex="-1";
		voir=true;
	}
	//ajouter les données dans la table
	var txt = new Array;
	txt[1] = document.getElementById("eva1");
	txt[2] = document.getElementById("eva2");
	txt[3] = document.getElementById("eva3");
	txt[4] = document.getElementById("eva4");
	
	var res = new Array;
	res[1] = document.getElementById("eva-sim1");
	res[2] = document.getElementById("eva-sim2");
	res[3] = document.getElementById("eva-sim3");
	res[4] = document.getElementById("eva-sim4");
	
	for(i=0;i<4;i++){
		txt[i+1].innerHTML=film[i+1];
		res[i+1].innerHTML=note[i+1].toFixed(2);
	}
}

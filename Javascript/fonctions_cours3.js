$(document).ready(function(){
	var lampeleft=false;
	var lamperight=false;
	var aladdin=false;
	var end=false;
	var resultat=false;
	var back=false;
	//changer l'indication
	function changeIndication(){
		if(lampeleft === true && lamperight === true && aladdin === true && end === false){
		$("#indication1").hide();
		$("#indication2").show();
	}}
	
	$("#buttoncours3").click(function(){
		$("#buttoncours3").fadeTo(0,0);
		$("#buttoncours3").css("z-index",0);
		$("#cours3_top").fadeTo(1500,0);
		$("#cours3_top").css("z-index",0);
		$("#top_text").fadeTo(0,0);
		$("#top_text").css("z-index",0);
	});
	
	$("#lampeL").mouseover(function(){
		if (end===false){
			$("#lampeL").stop();
			$("#lampeLHover").stop();
			$("#dialogL").stop();
			$("#lampeL").fadeTo(0,0);
			$("#lampeLHover").fadeTo(0,1);
			$("#dialogL").fadeTo(500,1);
			$("#dialogL").css("z-index",100);
			lampeleft=true;
		}
		});
	$("#lampeL").mouseout(function(){
		if (end===false){
			$("#lampeL").stop();
			$("#lampeLHover").stop();
			$("#dialogL").stop();
			$("#lampeL").fadeTo(0,1);
			$("#lampeLHover").fadeTo(0,0);
			$("#dialogL").fadeTo(0,0);
			$("#dialogL").css("z-index",0);
		}
		changeIndication();
	});		
	
	$("#lampeR").mouseover(function(){
		if (end===false){
			$("#lampeR").stop();
			$("#lampeRHover").stop();
			$("#dialogR").stop();
			$("#lampeR").fadeTo(0,0);
			$("#lampeRHover").fadeTo(0,1);
			$("#dialogR").fadeTo(500,1);
			$("#dialogR").css("z-index",100);				
			lamperight=true;
			}
		});
	$("#lampeR").mouseout(function(){
		if (end===false){
			$("#lampeR").stop();
			$("#lampeRHover").stop();
			$("#dialogR").stop();
			$("#lampeR").fadeTo(0,1);
			$("#lampeRHover").fadeTo(0,0);
			$("#dialogR").fadeTo(0,0);
			$("#dialogR").css("z-index",0);
		}
		changeIndication();
	});	
	
	$("#Aladdin").mouseover(function(){
		if(end===false){
			$("#Aladdin").stop();
			$("#AladdinHover").stop();
			$("#dialogA").stop();
			$("#dialogA2").stop();
			$("#Aladdin").fadeTo(0,0);
			$("#AladdinHover").fadeTo(0,1);
			$("#dialogA2").fadeTo(500,1);
			$("#dialogA").delay(1000).fadeTo(500,1);
			aladdin=true;
		}
	});
	$("#Aladdin").mouseout(function(){
		if (end===false){
			$("#Aladdin").stop();
			$("#AladdinHover").stop();
			$("#dialogA").stop();
			$("#dialogA2").stop();
			$("#Aladdin").fadeTo(0,1);
			$("#AladdinHover").fadeTo(0,0);
			$("#dialogA").fadeTo(0,0);
			$("#dialogA2").fadeTo(0,0);
		}
		changeIndication();
	});
	
	$("#lampeL").mousedown(function(){
		if (end===false){
			$("#lampeL").stop();
			$("#lampeLHover").stop();
			$("#lampeL").fadeTo(0,1);
			$("#lampeLHover").fadeTo(0,0);
		}
	});
	
	$("#lampeL").mouseup(function(){
		if (end===false){
		$("#lampeL").stop();
		$("#lampeLHover").stop();
		$("#lampeL").fadeTo(0,0);
		$("#lampeLHover").fadeTo(0,1);
		if ((lampeleft===true && lamperight===true && aladdin===true)||back===true){
			$("#demon").fadeTo(500,1);
			$("#demon").css("z-index",100);
			$("#dialogL").fadeTo(0,0);
			$("#return").fadeTo(500,1);
			$("#icon").fadeTo(500,1);						
			$("#return").css("z-index",300);
			$("#Aladdin").fadeTo(0,0);
			$("#AladdinHover").fadeTo(0,0);
			$("#indication2").hide();
			$("#indication1").hide();
			end=true;
		}
	}
	});
	
	$("#lampeR").mousedown(function(){
		if (end===false){
			$("#lampeR").stop();
			$("#lampeRHover").stop();
			$("#lampeR").fadeTo(0,1);
			$("#lampeRHover").fadeTo(0,0);
		}
	});
	$("#lampeR").mouseup(function(){
		if (end===false){
		$("#lampeR").stop();
		$("#lampeRHover").stop();
		$("#lampeR").fadeTo(0,0);
		$("#lampeRHover").fadeTo(0,1);
		if ((lampeleft===true && lamperight===true && aladdin===true)||back===true){
			$("#genie").fadeTo(500,1);
			$("#genie").css("z-index",100);
			$("#dialogR").fadeTo(0,0);
			$("#lampeR").css("cursor","defalt");
			$("#return").fadeTo(500,1);
			$("#icon").fadeTo(500,1);						
			$("#return").css("z-index",300);
			$("#Aladdin").fadeTo(0,0);
			$("#AladdinHover").fadeTo(0,0);
			$("#indication2").hide();
			$("#indication1").hide();
			end=true;
		}
		}
	});	
	
	$("#icon").mouseover(function(){
		
			$("#icon").stop();
			$("#iconHover").stop();
			$("#icon").fadeTo(0,0);
			$("#iconHover").fadeTo(0,1);
		
	});
	$("#icon").mouseout(function(){
		
			$("#icon").stop();
			$("#iconHover").stop();
			$("#icon").fadeTo(0,1);
			$("#iconHover").fadeTo(0,0);
		
	});
	$("#icon").mousedown(function(){
		
			$("#icon").stop();
			$("#iconHover").stop();
			$("#icon").fadeTo(0,1);
			$("#iconHover").fadeTo(0,0);
		
	});
	$("#icon").mouseup(function(){
		if(resultat===false){
			$("#icon").stop();
			$("#iconHover").stop();
			$("#shadowbox").stop();
			$("#resultat").stop();
			$("#return").stop();
			$("#icon").fadeTo(0,0);
			$("#iconHover").fadeTo(0,1);
			$("#shadowbox").css("z-index",100);
			$("#shadowbox").fadeTo(300,0.8);
			$("#resultat").css("z-index",200);
			$("#resultat").fadeTo(500,1);
			$("#icon").css("z-index",300);
			resultat=true;
		}
		else{
			$("#icon").stop();
			$("#iconHover").stop();
			$("#shadowbox").stop();
			$("#resultat").stop();
			$("#icon").fadeTo(0,0);
			$("#iconHover").fadeTo(0,1);
			$("#shadowbox").css("z-index",0);
			$("#shadowbox").fadeTo(0,0);
			$("#resultat").css("z-index",0);
			$("#resultat").fadeTo(0,0);
			$("#icon").css("z-index",300);
			resultat=false;
		}
	});
	
	$("#return").mouseover(function(){
			$("#return").stop();
			$("#returnHover").stop();
			$("#return").fadeTo(0,0);
			$("#returnHover").fadeTo(0,1);
		
	});
	
	$("#return").mouseout(function(){
			$("#return").stop();
			$("#returnHover").stop();
			$("#return").fadeTo(0,1);
			$("#returnHover").fadeTo(0,0);
		
	});
	
	$("#return").mousedown(function(){
			$("#return").stop();
			$("#returnHover").stop();
			$("#return").fadeTo(0,1);
			$("#returnHover").fadeTo(0,0);
		
	});
	
	$("#return").mouseup(function(){
		$("#return").stop();
		$("#returnHover").stop();
		$("#genie").css("z-index",0);
		$("#resultat").css("z-index",0);
		$("#demon").css("z-index",0);
		$("#shadowbox").css("z-index",0);
		$("#dialogL").css("z-index",0);
		$("#dialogR").css("z-index",0);
		lampeleft=false;
		lamperight=false;
		aladdin=false;
		end=false;
		resultat=false;
		back=true;
		$("#resultat").fadeTo(0,0);
		$("#genie").fadeTo(0,0);
		$("#demon").fadeTo(0,0);
		$("#returnHover").fadeTo(0,1);
		$("#return").fadeTo(0,0);
		$("#iconHover").fadeTo(0,0);
		$("#shadowbox").fadeTo(0,0);
		$("#lampeLHover").fadeTo(0,0);
		$("#lampeL").fadeTo(0,1);
		$("#lampeRHover").fadeTo(0,0);
		$("#lampeR").fadeTo(0,1);
		$("#Aladdin").fadeTo(0,1);
		$("#indication2").show();
		
	});
});
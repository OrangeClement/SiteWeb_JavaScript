var targetid="";
var dropid=""; 
var dragelem=new Array();
var droparray = new Array();
var score=new Array();
var scoreoriginal=new Array();
scoreoriginal[1]=5;
scoreoriginal[2]=3;
scoreoriginal[3]=4;

function calcul(){
	dragelem[1]=document.getElementById("drag1");
	dragelem[2]=document.getElementById("drag2");
	dragelem[3]=document.getElementById("drag3");
	droparray[1]=document.getElementById("drop1");	
	droparray[2]=document.getElementById("drop2");
	droparray[3]=document.getElementById("drop3");
	
	var i="";
	for (i=1;i<4;i++){
		if (dragelem[i].parentNode.id==="drop1"){
			score[i]=scoreoriginal[i]+3;
		}
		else if(dragelem[i].parentNode.id==="drop2"){
			score[i]=scoreoriginal[i]+2;
		}
		else if(dragelem[i].parentNode.id==="drop3"){
			score[i]=scoreoriginal[i]+1;
		}
		else if(dragelem[i].parentNode.id==="source"){
			score[i]=scoreoriginal[i];
		}
	}
	var s = document.getElementById("score");
	for (i=1;i<4;i++){
	s.rows[i].cells[1].innerHTML = score[i];
	}
}

function winner(){
	var max = score[1];
	if (score[1] === score[2] && score[1] === score[3] && score[2] === score[3]){
		max = 1;
	}
	else {
		if (score[1] < score[2]){
			max = score[2];
		}
		else if (score[1] === score[2] && max >= score[3]){
			max = 1;
		}
		else if (max < score[3] ){
			max = score[3];
		}
		else if (max === score[3]){
			max = 1;
		}
	}

//afficher le gagnant
	var s = document.getElementById("score");
	if (max === score[1]){
		s.rows[4].cells[1].innerHTML = "French Fries";
	}
	else if (max === score[2]){
		s.rows[4].cells[1].innerHTML = "Cola";
	}
	else if (max === score[3]){
		s.rows[4].cells[1].innerHTML = "Hot Dog";
	}
	else if (max === 1){
		s.rows[4].cells[1].innerHTML = "Match Nul";
	}
}	

function allowDrop(ev)
{
	dropid=ev.target.id;
	document.body.ondrop = function(event){
	event.preventDefault();
	event.stopPropagation();
};
	if (dropid.indexOf("drag")!==0){
		ev.preventDefault();
	}
}
	
function testDrop(ev)
{
	dropid=ev.target.id;

	if (dropid.indexOf("drag")!==0 && document.getElementById(dropid).childElementCount===0){
		ev.preventDefault();
	}
}
	
function drag(ev)
{
	targetid = ev.target.id;
	document.body.ondrop = function(event){
	event.preventDefault();
	event.stopPropagation();
};
	ev.dataTransfer.setData("Image",targetid);	
}

function drop(ev)
{	
	var data=ev.dataTransfer.getData("Image");
	document.body.ondrop = function(event){
	event.preventDefault();
	event.stopPropagation();
};
	ev.target.appendChild(document.getElementById(data));
	dropid=ev.target.id;
	calcul();
	winner();
}
	
function cleardrop(){
	var source=document.getElementById("source")
		dragelem[1]=document.getElementById("drag1");
		dragelem[2]=document.getElementById("drag2");
		dragelem[3]=document.getElementById("drag3");
		
	for (i=1;i<4;i++){
		source.appendChild(dragelem[i]);
	}

	droparray[1]=document.getElementById("drop1");	
	droparray[2]=document.getElementById("drop2");
	droparray[3]=document.getElementById("drop3");
	
	for (i=1;i<4;i++){
		if(droparray[i].childElementCount!=0){
		droparray[i].removeChild(droparray[i].childNodes[0]);
		}
	}
	
	var s = document.getElementById("score");
	
	for (i=1;i<4;i++){
	s.rows[i].cells[1].innerHTML = scoreoriginal[i];
	}
	s.rows[4].cells[1].innerHTML = "French Fries";
	
	shadowon();
}

function shadowoff(){
	var shadow=document.getElementById("delete");
	shadow.style.boxShadow="none";
}

function shadowon(){
	var shadow=document.getElementById("delete");
	shadow.style.boxShadow=" 0 0 18px rgb(255, 102, 0)";
}

var i=0;
var z=0;
var p=0;
var timerID;
var timerID2;

//I put my photos in an array
var IconArray=["PICS/1.jpg","PICS/2.jpg","PICS/3.jpg","PICS/4.jpg","PICS/5.jpg","PICS/6.jpg","PICS/7.jpg"]

//Function that makes photo appear by clicking on thumbnail
function show(x){
		document.getElementById("icon").src = x;
		var img = document.getElementById("icon").src;
		var x = img[img.length-5];
		i = x-1;
}

//Next Button Function
function next(){
	i++;
	if(i==7){
		document.getElementById("icon").src = IconArray[0];
		i=0;	
	}else{
		document.getElementById("icon").src = IconArray[i];
	}
	
}

//Previous Button Function
function previous(){
	
	if(i<0){
		document.getElementById("icon").src = IconArray[5];
		i=6;	
	}else if(i==0){
		document.getElementById("icon").src = IconArray[6];
	}else{
		document.getElementById("icon").src = IconArray[i-1];	
	}
	i--;	
}

//This is code to enable next and previous from keyboard
window.document.addEventListener("keydown", function(e){
	if(e.which==39){
		next();
	}else if(e.which==37){
		previous();
	}
});

//Function to start and stop timer. Having 2 scenarios I use modulo (%2) so I can press the same button as the start and stop button.
function time(){
	if(z%2==0){
		//Just in case that Random Show runs, I stop it.
		clearInterval(timerID2);
		//I make p equals to 0, because if I stop the Random Show by clicking here without stoping it from 'Start/Stop Random Show' button, I will not have to click the button twice(Something bad for UI/UX)
		p=0; 
		timerID = setInterval("next()",1500);
		z++;
	}else if(z%2==1){
		clearInterval(timerID);
		z++;	
	}
}

//My Random pic choice
function lucky(){
	var k = Math.random()*7;
	var t = Math.floor(k);
	document.getElementById("icon").src = IconArray[t];
	i=t;
}

//My Random Show function using the function lucky() above. Some same logic with the function time() 
function luckyShow(){
	if(p%2==0){
		clearInterval(timerID);
		z=0;
		timerID2 = setInterval("lucky()",1500);
		p++;
	}else if(p%2==1){
		clearInterval(timerID2);
		p++;	
	}	
}
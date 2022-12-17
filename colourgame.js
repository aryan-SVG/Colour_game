var colors=["rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]


var pickedcolor=colors[3];

var colordisplay=document.getElementById("colordisplay");

colordisplay.textContent=pickedcolor;

var squares =document.querySelectorAll(".square");

var messagedisplay= document.querySelector("#message");

var he=document.querySelector(" h1");



for(var i= 0;i<colors.length;i++)
{
    squares[i].style.backgroundColor=colors[i];


    squares[i].addEventListener("click", function(){
    
    var ck=this.style.backgroundColor;

    

    if(ck===pickedcolor) {

    	
    	messagedisplay.textContent="correct";
    	changeColour(ck);
    	he.style.backgroundColor=ck;
    }else{
     this.style.backgroundColor="#232323";
     messagedisplay.textContent="Try Again";
    }

    
});
}


function changeColour(color){
  for(var i=0; i<squares.length; i++){
	 square[i].style.backgroundColor=color;
}
}
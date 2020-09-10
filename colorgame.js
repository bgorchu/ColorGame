var numsquares=6;
var colors=[];
var pickedColor=pickColor();


var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedColor;
var resetbutton=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");


var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");

init();

function setmodebuttons(){
    for(var i=0; i<modebuttons.length; i++){
        modebuttons[i].addEventListener("click", function(){
            modebuttons[0].classList.remove("selected");
            modebuttons[1].classList.remove("selected");
            this.classList.add("selected");
            
            if(this.textContent==="Easy"){
                numsquares=3;
            }else{
                numsquares=6;
            }

            reset();
        });
    }
}


function setsquares(){
    for(var i=0; i<squares.length;i++){
        squares[i].addEventListener("click", function(){
            var clickedcolor= this.style.backgroundColor;
        
            if(clickedcolor===pickedColor){
                changeColors(clickedcolor);
                messagedisplay.textContent="Correct";
                h1.style.backgroundColor=clickedcolor;
                resetbutton.textContent="Play Again?";
            }else{
                this.style.backgroundColor="#232323";
                messagedisplay.textContent="Try Again";
            }
        });
    }
}




function init(){
    setmodebuttons();
    setsquares();

    reset();

};




function reset(){

    colors=generateColors(numsquares);
    pickedColor=pickColor();
    colordisplay.textContent=pickedColor;
    resetbutton.textContent="New Colors";
    messagedisplay.textContent="";

    for (var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }

    }

    h1.style.backgroundColor="steelblue";

}



resetbutton.addEventListener("click", function(){
 reset();
});




function changeColors(color){
    for (var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
};


function pickColor(){
    var color= Math.floor(Math.random() *colors.length);
    return colors[color];
}



function generateColors(num){
    var arr=[];

    for( var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}



function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r +", "+ g +", "+ b +")";

}



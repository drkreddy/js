var isDown = false;
var initX;
function addEvents(bar){

    //var bar=document.getElementById("holder1");
    // bar.addEventListener('mousemove', barMoveHandler, true);
    // bar.addEventListener('mousedown', mouseDownHandler, true);
    // bar.addEventListener('mouseup', mouseUpHandler, true);

	bar.addEventListener('mousedown', function(event) {

	initX = this.style.left || 10;
	console.log(this.style);
	console.log("left"+this.offsetLeft);
		console.log("top"+this.offsetTop);

	mousePressX = event.clientX;
	console.log(event);


	this.addEventListener('mousemove', repositionElement, false);

			window.addEventListener('mouseup', function() {
			  bar.removeEventListener('mousemove', repositionElement, false);
			}, false);

}, false);

	function repositionElement(event) {
		var positionX = parseInt(initX) + event.clientX - mousePressX;
		console.log(positionX);
		if ( positionX >0 && positionX < (this.parentNode.offsetWidth-40) ){
			this.style.left = positionX +'px';
			this.innerHTML=Math.round((positionX/this.parentNode.offsetWidth)*100)+'%';
		}
	}

}

function barMoveHandler(e){
	if(isDown){
    	e.target.style.left =e.target.style.left-e.movementX+'px';
 		console.log(this.offsetTop);
       	console.log(this.offsetLeft);
       	console.log(e.target.style);
    	console.log(e);

	}
}

function mouseDownHandler(e) {
    isDown=true;
    console.log(isDown)
}

function mouseUpHandler(e) {
    isDown=false;
        console.log(isDown)

}
function handleKeyPressed(e) {

    e.preventDefault();

    mousePosition = {

        x : e.clientX,
        y : e.clientY

    };

       var parent_x = this.offsetLeft; //get parent position
       var parent_y = this.offsetTop;      

       var mouseX   =  e.pageX; //get mouse move position
       var mouseY   =  e.pageY;

       var boxPositionX = mouseX-parent_x+5;
       var boxPositionY = mouseY-parent_y+5;

    var bar=document.getElementById("holder1");
    console.log(bar.style);
    bar.style.left = boxPositionX;

    //alert("whoa!");

}
function init(){
	var hol1=document.getElementById("holder1");
	addEvents(hol1);	

	var hol2=document.getElementById("holder2");
	addEvents(hol2);

	var hol3=document.getElementById("holder3");
	addEvents(hol3);

	var hol4=document.getElementById("holder4");
	addEvents(hol4);
}
init();

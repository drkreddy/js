var door= document.getElementById("door");

var openEvent = new Event('openevent');
door.addEventListener('openevent', function (e){
    e.target.src="open.png";
}, false);

var closeEvent = new Event('closeevent');
door.addEventListener('closeevent', function (e){
    e.target.src="close.png";
}, false);

function opened(){

    //door.src="open.png";
    door.dispatchEvent(openEvent);
}
function closed(){

    // door.src="close.png";
    door.dispatchEvent(closeEvent);

}
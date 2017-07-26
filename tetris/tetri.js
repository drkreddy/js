var movecolpos=3;
var prevcolpos=3;
function init(){
    var rowno=10;
    var colno=5;
    var i=1,j=1;
    var game=document.getElementById("gamearea");
    game.classList.add('test');
    for(;i<=rowno;i++){
      var row = document.createElement("div");                 // Create a <li> node
      row.classList.add('game-row');
      row.id=i;
      for(;j<=colno;j++){
          var gamecell = document.createElement("div");                 // Create a <li> node
          gamecell.classList.add('game-cell');
          gamecell.id=10*i+j;
          row.appendChild(gamecell);
      }

      j=1;
      game.appendChild(row);
    }

}

function slideObj(pos,dd){
  console.log(dd);
    var i=0,j=0;
    var l=dd.length;
    var w=dd[0].length;
     for(;i<l;i++){
         for(;j<w;j++){
           if(dd[i][j]==1){
              document.getElementById(10*(pos+i-1)+(movecolpos+j)).classList.remove('game-cell','active-cell');
              document.getElementById(10*(pos+i-1)+(movecolpos+j)).classList.add('game-cell');

           }
         }
     }
     i=j=0;
     for(;i<l;i++){
         for(;j<w;j++){
           if(dd[i][j]==1){
             document.getElementById(10*(pos+i)+(movecolpos+j)).classList.remove('game-cell','active-cell');
             document.getElementById(10*(pos+i)+(movecolpos+j)).classList.add('active-cell');
           }
         }
     }

}
function tickElement(){
var k=1;
var current,previous;
  setInterval(function(){
    var dd=[[1,0],[1,1]];

    if(k<11){
      slideObj(k,dd);
        // current=document.getElementById(10*k+movecolpos);
        // previous=document.getElementById(10*(k-1)+prevcolpos);
        // if(current.classList.contains('active-cell')){
        //   k=1;
        //   movecolpos=3;
        //   return;
        // }
        // previous.classList.remove('game-cell','active-cell');
        // current.classList.remove('game-cell');
        //
        // previous.classList.add('game-cell');
        // current.classList.add('active-cell');
        prevcolpos=movecolpos;
        k++;
   }else{
     k=1;
   }
  }, 1000);

}
function left(){
 if(movecolpos>1){
   movecolpos--;
 }
}
function right(){
 if(movecolpos<5){
   movecolpos++;
 }
}

init();

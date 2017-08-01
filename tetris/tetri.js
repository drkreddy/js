var movecolpos=z=3;
var prevcolpos=3;
var rotate=false;
var dd=[[1,0],[1,1]];
var pre_cord=[  [ {x:1,y:1},  {x:1,y:1}   ],
                [ {x:1,y:1},  {x:1,y:1}   ]
             ];
var current_cord = [  [ {x:0,y:0},  {x:0,y:0}   ],
                [ {x:0,y:0},  {x:0,y:0}   ]
             ];

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

function clearPre(){
  
  for(var r=0;r<pre_cord.length;r++){
    for(var c=0;c<pre_cord[r].length;c++){
      var cor=pre_cord[r][c];
       document.getElementById(10*cor['x']+cor['y']).classList.remove('game-cell','active-cell');
       document.getElementById(10*cor['x']+cor['y']).classList.add('game-cell');
    }
  }

}

function updateCurrAndMove(k,z){
     for(var r=0;r<current_cord.length;r++){
    for(var c=0;c<current_cord[r].length;c++){
          var cor=current_cord[r][c]={x:k+r,y:z+c};
       document.getElementById(10*cor.x+cor.y).classList.remove('game-cell','active-cell');
       if(dd[r][c]==1){
         document.getElementById(10*(cor.x)+(cor.y)).classList.add('active-cell');
        }else{
         document.getElementById(10*(cor.x)+(cor.y)).classList.add('game-cell');
        }
    }
  }
}

function tickElement(){
var k=1;
var current,previous;
  setInterval(function(){
  
    if(k<11){
        if(rotate){
          var tmp_obj =[ [ dd[1][0] , dd[0][0] ] , [ dd[1][1] , dd[0][1] ] ];
          dd = tmp_obj;
          rotate = false;
        }

       
        clearPre();
        updateCurrAndMove(k,z);
        pre_cord=current_cord;

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
function rot(){
  rotate = true;
}

init();

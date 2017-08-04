var movecolpos=z=pz=5;
var prevcolpos=5;
var rotate=false;
var dot = [[0,0,0],[0,1,0],[0,0,0]];
var line =[[0,1,0],[0,1,0],[0,1,0]];
var zshape = [[1,1,0],[0,1,0],[0,1,1]];
var Lshape = [[1,0,0],[1,0,0],[1,1,0]];
var Tshape = [[1,1,1],[0,1,0],[0,1,0]];

var object_dict=[dot,line,zshape,Lshape,Tshape];


//var dd=pre_dd=[[1,0,0],[1,0,0],[1,1,1]];
var dd=pre_dd=pickNextObj();

var pre_cord_init=[  [ {x:1,y:1},  {x:1,y:1} ,{x:1,y:1}  ],
                [ {x:1,y:1},  {x:1,y:1} ,{x:1,y:1}  ],
                [ {x:1,y:1},  {x:1,y:1} ,{x:1,y:1}  ]
             ];
var pre_cord = pre_cord_init;
var current_cord = [  [ {x:0,y:0},  {x:0,y:0},  {x:0,y:0}    ],
                  [ {x:0,y:0},  {x:0,y:0},  {x:0,y:0}    ],
                  [ {x:0,y:0},  {x:0,y:0},  {x:0,y:0}    ]
             ];

function init(){
    var rowno=15;
    var colno=10;
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


function clearPre(){
  
  for(var r=0;r<pre_cord.length;r++){
    for(var c=0;c<pre_cord[r].length;c++){
      var cor=pre_cord[r][c];
      if((rotate ==true && pre_dd[r][c]==1) || dd[r][c]==1) {
         document.getElementById(10*cor['x']+cor['y']).classList.remove('game-cell','active-cell');
         document.getElementById(10*cor['x']+cor['y']).classList.add('game-cell');
      }
    }
  }

}

function updateCurrAndMove(k,z){
  for(var r=0;r<current_cord.length;r++){
    for(var c=0;c<current_cord[r].length;c++){
      var cor=current_cord[r][c]={x:k+r,y:z+c};


        if (!document.getElementById(10*cor.x+cor.y).classList.contains('active-cell') ){
            document.getElementById(10*cor.x+cor.y).classList.remove('game-cell','active-cell');
             if(dd[r][c]==1){
                  document.getElementById(10*(cor.x)+(cor.y)).classList.add('active-cell');
              }else{
                  document.getElementById(10*(cor.x)+(cor.y)).classList.add('game-cell');
              }
        }      
    }
  }
}

function tickElement(){
var k=1;
var current,previous;
  setInterval(function(){
  
    if(k<15 && move(k)){
        if(rotate){
          pre_dd=dd;
          var tmp_obj =[ 
              [ dd[2][0] , dd[1][0], dd[0][0] ],
              [ dd[2][1] , dd[1][1], dd[0][1] ], 
              [ dd[2][2] , dd[1][2], dd[0][2] ] ];
          dd = tmp_obj;
        }
        clearPre();
        updateCurrAndMove(k,z);
        pre_cord=current_cord;
        k++;
        rotate=false;
        pz=z;
   }else{
     k=1;
     pre_cord = pre_cord_init;
     z=5;
     dd = pickNextObj();
   }
  }, 1000/2);

}
//          && document.getElementById(10*(x+1+i)+(y+j)).classList.contains('active-cell') ){

function pickNextObj(){
    var x = Math.floor((Math.random() * 5) + 1);
    return object_dict[x-1];
// return zshape;
}
function isActiveCell(x,y){
  var bttm = [];
   for(var i=0;i<dd.length;i++){
      for(var j=0;j<dd[0].length;j++){
          if(dd[j][i]==1 ){
            bttm[i] = j;
          }
        }
      }
    
    for(var i=0; i<bttm.length; i++ ){
       if(bttm[i]!= undefined && document.getElementById(10*(x+bttm[i])+(y+i)).classList.contains('active-cell') ==true ){ 
          return true;
        }
    }
 
  return false;
}

function move(k){
  if( k==14 || (k<13 && isActiveCell(k,pz)) ){
    return false;
  }else{
    return true;
  }
}

function left(){
 if(z>1){
   z--;
 }
}

function right(){
 if(z<8){
   z++;
 }
}
function rot(){
  rotate = true;
}

function onmousedownE(elem){
    elem.classList.toggle('control-btn-down');
}
function mouseUp(elem){
  elem.classList.toggle('control-btn-down');
}

init();

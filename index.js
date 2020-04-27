var total=0;


function score(){
    
var s=uchoice;
total+=s;
document.getElementById('score1').innerHTML=total;
}

function play1(){
   
    uchoice=1;
    
 document.getElementById("user").innerHTML="<img src='imgs/1.jpg' height='150' width='150'>";
 score();
 document.getElementById('score1').innerHTML=total;
 console.log(randomimages());
 
}
function play2(){
   
    uchoice=2;
    
    document.getElementById("user").innerHTML="<img src='imgs/2.webp' height='150' width='150'>";
    score();
    document.getElementById('score1').innerHTML=total;
           
   
       
       
    randomimages();

          
   }

   function play3(){
   
    uchoice=3;
    
    document.getElementById("user").innerHTML="<img src='imgs/3.jpg' height='150' width='150'>";
   // document.getElementById("bt").innerHTML="<img src='imgs/bots.jpg' height='150' width='150'>";


    score();
    document.getElementById('score1').innerHTML=total;
    randomimages();
   }
   function play4(){
   
    uchoice=4;
    
    document.getElementById("user").innerHTML="<img src='imgs/4.webp' height='150' width='150'>";
    score();
    document.getElementById('score1').innerHTML=total;
    randomimages();

   }
   function play5(){
   
    uchoice=5;
    
    document.getElementById("user").innerHTML="<img src='imgs/5.jpg' height='150' width='150'>";
    score();
    document.getElementById('score1').innerHTML=total;
    randomimages();

   }
   function play6(){
   
    uchoice=6;
    
    document.getElementById("user").innerHTML="<img src='imgs/6.webp' height='150' width='150'>";
    score();
    document.getElementById('score1').innerHTML=total;
    randomimages();
   }


function randomimages(){
var myimages=[];
myimages[1]="imgs/1.jpg";
myimages[2]="imgs/2.webp";
myimages[3]="imgs/3.jpg";
myimages[4]="imgs/4.webp";
myimages[5]="imgs/5.jpg";
myimages[6]="imgs/6.webp";
var rnd=Math.floor(Math.random()*myimages.length);
if(rnd==0){
    rnd=1;
}


document.write('<img src="'+myimages[rnd]+'"height="150" width="150">');

}














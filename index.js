const screen=document.getElementById('screen-display');

const section= document.querySelectorAll('.sub')[0];//Bug when clicking outside the buttons you will
//console.log(section);                               // input into the scree all .sub array elements.
var max_11_count=0;//a counter that allows maximum 11 numbers on screen to preven overflow outside
var storage=0;

section.addEventListener('click',event=>{
    console.log(event.target)

if(document.querySelector('.sub')==event.target){//the if else here filters out the bug above   
    console.log('bbbb') 
}
else{
    if(max_11_count!=11){
    switch(event.target.innerHTML){
        case '0':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '1':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '2':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '3':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '4':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '5':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '6':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '7':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '8':
            screen.innerHTML+=event.target.innerHTML;
            break;
        case '9':
            screen.innerHTML+=event.target.innerHTML;
            break;        
    }
    max_11_count++;
}
    else if(event.target.innerHTML=='clear'){
        screen.innerHTML='';
        max_11_count=0;
    }
    else if(event.target.innerHTML=='+'){
        //storage+=screen.innerHTML;//these dont work yet 
       // return storage+;//
    }



  //  if(event.target.innerHTML=='0'){
  //      screen.innerHTML+=event.target.innerHTML;
   // }

 //   else{
 //       screen.innerHTML+=event.target.innerHTML;//or innerText and the += a
 //   }
 //
    

}
}); 


 


const add = function(firstarg,secondarg){
   let sum=0
   sum=firstarg+secondarg;
    return sum;
};
const subtract= function(firstarg,secondarg){
    return firstarg-secondarg;
};
const multiply = function(firstarg,secondarg){
    return firstarg*secondarg;
};
const divide= function(firstarg,secondarg){
    return firstarg/secondarg;
};
const operate= function(operator,firstarg,secondarg){// maybe stick with this but maybe in future change to '+'
    return operator(firstarg,secondarg);            // '-' and etc.
};

const button=document.getElementsByClassName('button');
/*for(i=0; i < button.length;i++){    
    button[i].innerHTML = '1px solid orange';
}*/
 


/*button.addEventListener('click',()=>{
    document.body.style.backfaceGround='fuchsia';
});
*/


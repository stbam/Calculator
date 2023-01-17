const screen=document.getElementById('screen-display');

const section= document.querySelectorAll('.sub')[0];//Bug when clicking outside the buttons you will
//console.log(section);                               // input into the scree all .sub array elements.
var max_11_count=0;//a counter that allows maximum 11 numbers on screen to preven overflow outside
var storage='';
var checksigncount=0;
let arr=['+','-','/'];
var result=0;
var opene=true;
var operator_storage;

section.addEventListener('click',event=>{
    console.log(event.target)
    
if(document.querySelector('.sub')==event.target){//the if else here filters out the bug above   
    console.log('bbbb') 
}
else{
   if(event.target.innerHTML<10){ //removed case switch for a much more shorter version.
    if(max_11_count!=11 ){
        screen.innerHTML+=event.target.innerHTML;
        storage+=event.target.innerHTML;
        max_11_count++;
        if(checksigncount!=0){
            if(operator_storage=='+'){
                result=parseInt(storage) + parseInt(event.target.innerHTML); //holy shit it works
                storage='';
            }
            else if(operator_storage =='-'){
                result=parseInt(storage) - parseInt(event.target.innerHTML);
                storage='';
            }
            else if(operator_storage =='*'){
                result=parseInt(storage) * parseInt(event.target.innerHTML);
                storage='';
            }
            else if(operator_storage=='/'){
                result=parseInt(storage) / parseInt(event.target.innerHTML);
                storage='';
            }

        }

        checksigncount=0;
        }
   }
   for(let i=0;i<arr.length;i++){
        if(event.target.innerHTML==arr[i] && checksigncount==0 && storage !=0){
            console.log("bobby");                               //is used.
                storage+=`${event.target.innerHTML}`;
                screen.innerHTML='';
                max_11_count=0;
                operator_storage=event.target.innerHTML;
                checksigncount++;
                opene=false;
                
        }
    }
    



    switch(event.target.innerHTML){
        case 'clear':
            if(event.target.innerHTML=='clear'){
                screen.innerHTML='';
                max_11_count=0;
                
            }
       
        case 'sqrt':
            if(event.target.innerHTML=='sqrt' &&  checksigncount==0){// output error if nothing given after call.
                console.log("bobby");                               
                storage+='sqrt';
                screen.innerHTML='';
                max_11_count=0;
                checksigncount++;
            }
        case '=':
            screen.innerHTML=result;

        
        

    }

   /* if(event.target.innerHTML=='clear'){
        screen.innerHTML='';
        max_11_count=0;
    }
    else if(event.target.innerHTML=='+' &&  checksigncount==0){// checksign count makes sure only operator 
        console.log("bobby");                               //is used.
        storage+='+';
        screen.innerHTML='';
        max_11_count=0;
        checksigncount++;
        //storage+=screen.innerHTML;//these dont work yet 
       // return storage+;//
    }

*/

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


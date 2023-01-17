const screen=document.getElementById('screen-display');

const section= document.querySelectorAll('.sub')[0];//Bug when clicking outside the buttons you will
//console.log(section);                               // input into the scree all .sub array elements.
var max_11_count=0;//a counter that allows maximum 11 numbers on screen to preven overflow outside
var storage='';
var checksigncount=0;
var result=0;
section.addEventListener('click',event=>{
    console.log(event.target)
    
if(document.querySelector('.sub')==event.target){//the if else here filters out the bug above   
    console.log('bbbb') 
}
else{
   
    
    switch(event.target.innerHTML){
        case '0' :
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '1':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '2':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '3':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '4':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '5':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '6':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '7':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '8':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case '9':
            if(max_11_count!=11 ){
            screen.innerHTML+=event.target.innerHTML;
            storage+=event.target.innerHTML;
            max_11_count++;
            checksigncount=0;
            }
            break;
        case 'clear':
            if(event.target.innerHTML=='clear'){
                screen.innerHTML='';
                max_11_count=0;
            }
        case '+':
            if(event.target.innerHTML=='+' &&  checksigncount==0 && storage !=0){// checksign count makes sure only operator 
                console.log("bobby");                               //is used.
                storage+='+';
                screen.innerHTML='';
                max_11_count=0;
                checksigncount++;
            }
        case '-':
            if(event.target.innerHTML=='-' &&  checksigncount==0 && storage !=0){// checksign count makes sure only operator 
                console.log("bobby");                               //is used.
                storage+='-';
                screen.innerHTML='';
                max_11_count=0;
                checksigncount++;
            }
        case '*':
            if(event.target.innerHTML=='*' &&  checksigncount==0 && storage !=0){// checksign count makes sure only operator 
                console.log("bobby");                               //is used.
                storage+='*';   //`${event.target.innerHTML}`
                screen.innerHTML='';
                max_11_count=0;
                checksigncount++;
            }
        case '/':
            if(event.target.innerHTML=='/' &&  checksigncount==0 && storage !=0){// checksign count makes sure only operator 
                console.log("bobby");                               //is used.
                storage+='/';
                screen.innerHTML='';
                max_11_count=0;
                checksigncount++;
            }
        case 'sqrt':
            if(event.target.innerHTML=='sqrt' &&  checksigncount==0){// output error if nothing given after call.
                console.log("bobby");                               
                storage+='sqrt';
                screen.innerHTML='';
                max_11_count=0;
                checksigncount++;
            }
      /*  case '=':
            let arr=storage;
            console.log(arr);
            for(let i=0;i<arr.length;i++){
                if(arr[i]=='+' || arr[i]=='-'){
                    
                }
            }

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


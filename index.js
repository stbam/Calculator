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

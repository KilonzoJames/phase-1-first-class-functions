function receivesAFunction(thing){
return thing()
}
receivesAFunction(function(a){return a})

function returnsANamedFunction(){
return function named(){
    console.log('Named')
}
}
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction(){
return function(){
    console.log('Anonymous')
}
}console.log(returnsAnAnonymousFunction())
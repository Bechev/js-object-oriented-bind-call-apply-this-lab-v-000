//Your code here
const justInvoke = function(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  fn.call(thisValue, arg)
}


function setThisWithApply(fn, thisValue, args){
  
}

function returnNewFunctionOf(functionToBeCopied, thisValue){

}

const { reporters } = require("mocha");

function sendsAFunction(){
return receivesAFun()
}

function receivesAFunction (sendsAFunction){
  sendsAFunction();

}

function returnsANamedFunction(){
    return function named(){
      
    }
  }


function returnsAnAnonymousFunction (){
return ()=>{}
}




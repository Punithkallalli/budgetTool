// GLOBAL VARIABLES

//define variables
var production=false;
var fixeddataset=true;
var fileid="";
var hostname="";
var dataurl="";


//error cache




//form validation for acceptable clicking actions






//package the request





//update the df, populate visualization






//DECLARE GLOBAL VARIABLES
function getGlobalParameters(){
  var epsval=document.getElementById("epsilonbox").value;
  var delval=document.getElementById("deltabox").value;
  var betaval=document.getElementById("betabox").value;
  var nval = 1223992 //Need to get this from metadata too 
  var globals={eps:epsval, del:delval, beta:betaval, n:nval};
  return globals;
  
}
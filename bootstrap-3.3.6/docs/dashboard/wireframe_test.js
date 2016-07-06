

// GLOBAL VARIABLES

//define variables
var production=false;
var fixeddataset=true;
var fileid="";
var hostname="";
var dataurl="";


//hard-code in path of dataset to read
var metadataurl = "";
metadataurl="/Users/fanny/GitHub/budgetTool/bootstrap-3.3.6/docs/dashboard"; // This is PUMS example metadata file

//read xml file using d3xml library
df = d3.xml(metadataurl, "application/xml", function(xml) {
    var vars = xml.documentElement.getElementsByTagName("var");
    var Variables = [];
    var type;
    var typeMap = {};
}


console.log(df);


df




//error cache



//form validation for acceptable clicking actions




//package the request




//update the df, populate visualization




//DECLARE GLOBAL VARIABLES
// function getGlobalParameters(){
// 	var epsval=document.getElementById("epsilonbox").value;
// 	var delval=document.getElementById("deltabox").value;
// 	var betaval=document.getElementById("betabox").value;
// 	var nval = 1223992 //Need to get this from metadata too 
// 	var globals={eps:epsval, del:delval, beta:betaval, n:nval};
// 	return globals;
	
// }


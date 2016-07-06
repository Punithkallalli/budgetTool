

// read data locally
var metadataurl = "/Users/fanny/GitHub/budgetTool/bootstrap-3.3.6/docs/dashboard/pumsmeta.xml";

// define variables for parsing
var grid;
var allResults = [];
var secSamp = false;
var data = [];
var VarList =[];
 
d3.xml(metadataurl, "application/xml", function(xml) {
    // dataset name
    var temp = xml.documentElement.getElementsByTagName("fileName");
    var dataname = temp[0].childNodes[0].nodeValue.replace( /\.(.*)/, "") ;  // regular expression to drop any file extension 

    // Put dataset name, from meta-data, into header
    d3.select("#datasetName").selectAll("h2")
    .html(dataname);

    // TESTME
    console.log("rookie")

    // read data
    var vars = xml.documentElement.getElementsByTagName("var");
    var varName = xml.documentElement.getElementsByTagName("name");

    // TESTME
    console.log(vars);
    console.log(varName);
    var Variables = [];
    var type;
    var typeMap = {};
    
    for(var j =0; j < vars.length; j++ ) {
      
        // TESTME
        console.log(vars[j]);

      Variables.push(vars[j].getAttribute('name').replace(/"/g,""));    // regular expression removes all quotes -- might need to adjust
      type = vars[j].getAttribute('intrvl').replace(/"/g,"");    // regular expression removes all quotes -- might need to adjust
      if(type === "discrete"){
        type = "Categorical";
      }
      if(type === "contin"){
        type = "Numerical";
      }
      typeMap[Variables[j]] = type

        //TESTME
      console.log(typeMap[Variables[j]]);
      console.log(Variables[j]);
    }

    console.log(Variables);


});




 //  d3.xml(metadataurl, "application/xml", function(xml) {
 //  	console.log("let's go");
 //    var vars = xml.documentElement.getElementsByTagName("var");
 //    console.log(vars);

 //    var table = d3.select("#presentation").append("table").attr("class","grid");

	// });




function myFunction() {
    // var coffee = document.forms[1];
    var coffee = document.forms[0];
    var nameSelected = document.;

    // TESTME
	console.log("will i pick up the right name of the selector?");
    console.log(coffee);
    console.log(nameSelected);

    var txt = "";
    var i;
    for (i = 0; i < coffee.length; i++) {
        if (coffee[i].checked) {
            txt = txt + coffee[i].value + " ";
        }
    }
    document.getElementById("order").value = "You ordered a coffee with: " + txt;
}

var form = document.querySelector("form");
console.log("what's my type?");
console.log(form.elements[1].type);


// function myFunction() {
//     var varName = document.forms[0];
//     var txt = "";
//     var i;
//     for (i = 0; i < varName.length; i++) {
//         if (varName[i].checked) {
//             txt = txt + varName[i].value + " ";
//         }
//     }
//     document.getElementById("order").value = "You selected: " + txt;
// }


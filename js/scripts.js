function romannumeral (array1){
	var arrayOfNumerals = ["U", "K", "M", "D", "C", "L", "X", "V", "I"];
	var x = arrayOfNumerals.length-1;
	for(var i = array1.length-1; i > -1; i--){
		if(array1[i] === "0"){
			array1[i] = "";
		}
		if(array1[i] === "1"){
			array1[i] = arrayOfNumerals[x];
		}	
		if(array1[i] === "2"){
			array1[i] = arrayOfNumerals[x] + arrayOfNumerals[x] ;
			
		}
		if(array1[i] === "3"){
			array1[i] = arrayOfNumerals[x] + arrayOfNumerals[x] + arrayOfNumerals[x];
			
		}

		if(array1[i] === "4"){
			array1[i] =arrayOfNumerals[x] + arrayOfNumerals[x-1] ;
			
		}
		if(array1[i] === "5"){
			array1[i] = arrayOfNumerals[x-1];
			
		}
		if(array1[i] === "6"){
			array1[i] = arrayOfNumerals[x-1] + arrayOfNumerals[x] ;
			
		}
		if(array1[i] === "7"){
			array1[i] = arrayOfNumerals[x-1]+ arrayOfNumerals[x]+ arrayOfNumerals[x] ;
			
		}
		if(array1[i] === "8"){
			array1[i] = arrayOfNumerals[x-1]+ arrayOfNumerals[x]+ arrayOfNumerals[x]+ arrayOfNumerals[x] ;
			
		}
		if(array1[i] === "9"){
			array1[i] = arrayOfNumerals[x]+ arrayOfNumerals[x-2];
		}
		x=x-2;

	}
	var result = array1.join("");
	return result;
}

$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var num = parseFloat($("#number").val());
		var numStr = num.toString();
		var arrayOfNums = numStr.split("");

		if(Number.isInteger(num)){
			var result = romannumeral(arrayOfNums);
			$("#result").show();
			$("#resultT").text(result);
		}else{
			document.getElementById("pig-latin").reset();
			$("#yeargroup").addClass("has-error");
		}

		 $("#yeargroup").click(function(){
		 	 $(this).removeClass("has-error");
		 })

	});
});






function myFunction(){
	var name=document.querySelector(".input1").value;
	var mass=document.querySelector(".input2").value;
	var height=document.querySelector(".input3").value;
	var bmi=mass/(height*height);
	bmi=Math.round(bmi*10)/10;
	var status;
	if(bmi<18.5){
	status="UNDERWEIGHT";
	document.getElementById("bmi").innerHTML="YOUR BMI VALUE IS:   "+bmi;
	document.getElementById("status").innerHTML="STATUS:   "+status;	
	}
	else if(bmi>=18.5 && bmi<24.9){
	status="NORMAL"	;
	document.getElementById("bmi").innerHTML="YOUR BMI VALUE IS:   "+bmi;
	document.getElementById("status").innerHTML="STATUS:   "+status;	
	}
	else if(bmi>=24.9 && bmi<29.9){
	status="OVERWEIGHT";
	document.getElementById("bmi").innerHTML="YOUR BMI VALUE IS:   "+bmi;
	document.getElementById("status").innerHTML="STATUS:   "+status;	
	}
	else{
	status="OBESE";
	document.getElementById("bmi").innerHTML="YOUR BMI VALUE IS:   "+bmi;
	document.getElementById("status").innerHTML="STATUS:   "+status;	
	}
	
}
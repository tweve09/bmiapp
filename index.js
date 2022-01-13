 var year = new Date().getFullYear();
 document.getElementById("year").innerHTML = year; 
 function myFunction() {
     var mass = document.getElementById("mass").value;
     var height = document.getElementById("height").value;
     var bmi = mass/(height**2);
     bmi=Math.floor(bmi*10)/10;
     var status;
      
     if(bmi<18.5){
        status="UNDERWEIGHT";
        document.getElementById("status").style.color = "blue"; 
    }
    else if(18.5<=bmi<24.9){
        status="NORMAL"; 
        document.getElementById("status").style.color = "green";
    }
    else if (24.9<=bmi<29.9){
        status="OVERWEIGHT";
        document.getElementById("status").style.color = "yellow"; 
    }
    else{
        status="OBESE";
        document.getElementById("status").style.color = "red";
    }
    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("status").innerHTML = status;
 }
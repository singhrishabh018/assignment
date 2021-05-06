 function ctemperature(celsius){
     const temp = celsius;
     const ftemp = temp * 5/9 + 32;
    //xB0C for degree C and same for the fahrenheit
     const text = temp + '\xB0C is' + " " + ftemp + '\xB0F' + " " + "and" + " ";
     document.write("Celsius to Fahrenheit: ",text)
 }

 function ftemperature(Fahrenheit){
     const temp1 = Fahrenheit;
     const ctemp = (temp1 - 32)* 9/5;
     const message = temp1 + '\xB0F is' + " " + ctemp + '\xB0C';
     document.write("Fahrenheit to Celsius: ",message)
 }

 ctemperature(60);
 ftemperature(55);
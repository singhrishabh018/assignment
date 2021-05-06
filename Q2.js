function coviDrop(){
    const date = new Date(prompt("Enter date of birth: "));
    const calc = Date.now() - date.getTime();
    const day =  new Date(calc);
    const year = day.getUTCFullYear();
    const age = Math.abs(year - 1970);
    
    if(age >= 18 && age <= 44){
        window.location.href = "https://selfregistration.cowin.gov.in"
    }
    else{
        document.write("Stay Home, Stay Safe");
    }
}
coviDrop();
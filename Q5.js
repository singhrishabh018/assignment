function myfunc(){
    var x,rev,text;
    var x = prompt("Enter a string : ");
    var rev = x.split("").reverse().join("");
    if(x == rev){
        text = "It's a Palindrome"
    }
    else{
        text = "It's reversed and it's not a palindrome";
    }
    document.getElementById('sty').innerHTML = text;
}
myfunc()
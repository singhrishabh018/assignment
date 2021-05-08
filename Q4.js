var button = document.getElementById('btn').addEventListener('click',rangeFunc);
function rangeFunc(){
    var x,text
    var x = document.getElementById('inp').value;
    if(x >= 50 && x <= 100){
        text = "Gotcha that's in range!!"
    }
    else{
        text = "Oops! You are out of range"
    }
    document.getElementById('result').innerHTML = text;  
}
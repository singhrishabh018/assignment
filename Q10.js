function vowelCount(str){
  let splitString=str.split('');
  let obj=[];
  let vowels="aeiouAEIOU";
  splitString.forEach((letter)=>{
    if(vowels.indexOf(letter.toUpperCase())!==-1){
      if(letter in obj){
        obj[letter]++;
      }else{
        obj[letter]=1;
      }
    }   

 });
 return obj;    
}
console.log(vowelCount('Hey This is Skillsanta JS Training'));
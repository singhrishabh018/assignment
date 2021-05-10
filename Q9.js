function difference(arr1,arr2) {
    const a1= array1(arr1,true);
    const a2= array1(arr2,true);
  
    const a=[];
    const diff=[];
    for(var i=0;i< a1.length;i++)
      a[a1[i]]=false;
    for(i=0;i< a2.length;i++)
    if(a[a2[i]]===true) 
       { delete a[a2[i]];}
      else a[a2[i]]=true;
    for(const k in a)
      diff.push(k);
    return diff;
  }
  
  var array1 = (a, shallow, r) => {
    if(!r){ r = [];}
  if (shallow) {
    return r.concat(...a);
    }  
     for(i=0; i< a.length; i++){
          if(a[i].constructor == Array){
              array1(a[i],shallow,r);
          }else{
              r.push(a[i]);
          }
      }
      return r;
  };
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
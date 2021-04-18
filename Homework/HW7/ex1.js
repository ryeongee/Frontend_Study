function waterMelon(n){
    let str = '';
    for(let i =0;i<n;i++){
      if(i%2==0){
        str+='수';
      }  
      else{
        str+='박'
      }
    }
    return str;
}
console.log(waterMelon(3));
console.log(waterMelon(2));
console.log(waterMelon(1));
console.log(waterMelon(10));


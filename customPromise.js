function customPromise(exc){  
     const rtvalue=   exc(resolve,reject)
this.afterthen=(res,rej)=>{
if(rtvalue =='OK'){
    res(rtvalue)
} else{
rej(rtvalue)
}}}
function resolve(res){
    let value =res;
    return value;
}

function reject(rej){
    let value = rej;
    return value;
}








let mycustomPromise = new customPromise((resolve,reject)=>{
    let x = 0;
    if(x==0){
      return  resolve('OK');
    
    }
    else{
      return  reject('Fail');
    }
    
});
console.log(mycustomPromise);

console.log(mycustomPromise.afterthen((data)=>console.log(data),()=>console.log('error')))

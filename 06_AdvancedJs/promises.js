function fetchDa(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let fetched = true;
            if(fetched){
                resolve(
                    {
                    name:"ahsan",
                    id:2392,
                    class:"9th"
                })}else{
                    reject("Error fetching data")
                }
        }, 1000);
    })
}
//* It doesn't print like normal function
fetchDa()
//? These two takes a callback(function) and cathes resolve and reject values
   .then((data)=>{
    console.log(data);
    return `Chaining`
   })
//? .then can be chained fot above .then
   .then((aboveThen)=>{
    console.log(aboveThen)
   })
   .catch((off)=>{
    console.error(off)
   })
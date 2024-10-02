function fetchUserData(){
    let data = true; 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(data){
                resolve({
                    name:"ahsan",
                    job:"web engineer",
                    mail:"ashsh@us.com"
                })
            }else{
                reject(`faile to fetch data`)
            }
            
        }, 2000);
    })
}
//? Another way to consume fetched data
async function getUserData() {
    try {
        console.log(`fethcing...`)
        let done = await fetchUserData();
        console.log(`data : `, done);
    } catch(error) {
        console.log("unsucessfull")
    }  
}
//? getUserData();




//! async 2
//? PromiseAll
function fetchpostData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`post data fetched!`)
        }, 2000);

    })
}
function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Comment data fetched!`);
    }, 2000);
  });
}
async function blogData(){
    try {
        console.log("fetching...")
        let [postData, commentData] = await Promise.all([fetchpostData(),fetchCommentData()]);
        console.log(postData);
        console.log(commentData);
        console.log(`fetched sucessfully`)
    } catch (error) {
        console.log("error")
    }
}
blogData();

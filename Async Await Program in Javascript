//Async Await Program in Javascript

//Function
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ",dataId);
            resolve("success!");
        },4000);
    });
}

//asyn-await usage
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

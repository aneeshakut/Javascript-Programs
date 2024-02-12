//Fetch API program in Javascript

//API Source
const URL="https://official-joke-api.appspot.com/random_joke";


//Fetch function 
const getJokes=async()=>{
    let response=await fetch(URL);
    console.log(response);//json format

    //Converting from json to js object format
    let data=await response.json();
    console.log(data);
}

//Program to count number of vowels in string

//Function to count no.of vowels
function count(str){
    let count=0;
    for(const char of str){
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    console.log(count);
}

//Function to display no.of vowels
let user_input=window.prompt("Enter a string:");
let num=count(user_input);
console.log(num);
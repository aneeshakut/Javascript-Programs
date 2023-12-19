//Array Sorting Program in Javascript

//Taking User Input(Grades)
var grades=[];
var size=window.prompt("Enter no.of students:");
size=Number(size);
for(var i=0;i<size;i++){
    grades[i]=window.prompt("Enter grades of student "+(i+1)+":");
}

//Displaying Array of grades
console.log(grades);

//Printing  in Descending Order
console.log("Descending Order:")
grades=grades.sort(descendingsort);
grades.forEach(print);

//Printing in Ascending Order
console.log("Ascending Order:")
grades=grades.sort(ascendingsort);
grades.forEach(print);

//Function to sort in descending order
function descendingsort(x,y){
    return y-x;
}

//Function to sort in ascending order
function ascendingsort(x,y){
    return x-y;
}

//Function to print values
function print(element){
    console.log(element);
}

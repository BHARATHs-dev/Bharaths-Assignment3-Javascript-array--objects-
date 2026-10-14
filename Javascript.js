// filter
// const students =[{
//     name:"A", dept: "CSE"}, 
//     {name:"B", dept: "CSE"}, 
//     {name:"C", dept: "CSE"}
// ]
// const passed = students.filter((student) => student.dept === "CSE").map((student) => student.name).join(", ");
// console.log(passed);


// const students = [
//     { name: "a", dept: "CSE", marks: 80, gender: "M" },
//     { name: "b", dept: "CSE", marks: 90, gender: "M" },
//     { name: "c", dept: "CSE", marks: 75, gender: "M" },
//     { name: "d", dept: "CSE", marks: 40, gender: "M" },
// ];
// students.push({ name: "e", dept: "CSE", marks: 85, gender: "M" });
// const passed = students.filter((student) => student.dept === "CSE").map((student) => student.name).join(", ");
// const failed = students.filter((student) => student.dept === "CSE" && student.marks < 50).map((student) => student.name).join(", ");
// const sorted = students.sort((a, b) => b.marks - a.marks);
// console.log(sorted);
// console.log(passed);
// console.log(failed);
// students.reverse();
// const sliced = students.slice(1, 3);
// console.log(sliced);
// const spliced = students.splice(1, 2);
// console.log(spliced);

//object creation
// const student = {name: "A",dept: "CSE", marks: 80,   gender: "M" ,  
//     name: "B", dept: "CSE", marks: 90, gender: "M" , 
//  greet() {console.log(`Hello, my name is ${this.name} and I am from ${this.dept} department.`);} 
// };
// console.log(student.greet());
// student.marks = 85;

// console.log(student.marks); 

// console.log(student.name);
// console.log(student.marks);

// delete student.marks;
// console.log(student.marks);


// // Task 4 methods 

//  //1. reduce method
//  const numbers = [120,60,899];
//  const sum = numbers.reduce((a,b) => a + b);
//  console.log(sum); // 1079

// //2. find + ?? method

// const students = [
//     { name: "a", dept: "CSE", marks: 80, gender: "M" },
//     { name: "b", dept: "CSE", marks: 90, gender: "M" },
//     { name: "c", dept: "CSE", marks: 75, gender: "M" },
//     { name: "d", dept: "CSE", marks: 40, gender: "M" },
// ];
// const kiran = students.find((student) => student.name === "kiran");
// console.log(kiran ? kiran.marks : "not found");  // not found

// //3. closure 

// function makeGreeter(greeting) {
//     return function(name) {
//         return greeting + " " + name;
//     };   
// }
// const hello = makeGreeter("hello");
// console.log(hello("kiran")); // hello kiran    



//4. async await

async function loadUsers() {

    try {
    
    const res =await fetch ("https://jsonplaceholder.typicode.com/users"); 
    const users =await res.json();
    users.slice(0, 10).forEach((user) => {
        console.log(user.name);
        console.log(user.email);
    });

    
    } catch (error) {
    
    console.log("Could not load:", error);
    }}
    loadUsers();
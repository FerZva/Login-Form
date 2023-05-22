//the Array allow several values in one variable even in diferent categories. For example:

let employees = [
    {name: 'John', salary: '90000', hireDate: "July 1, 2010"},
    {name: 'David', salary: '75000', hireDate: "August 15, 2009"},
    {name: 'Ana', salary: '80000', hireDate: "December 12, 2011"}
];

//There are some ways to use "for" in JavaScript. Here some examples

/*for (let i = 0; i < employees.length; i++) {
    console.log(employees[i])
}*/

//Example with for Each and a function
employees.array.forEach(function() {
    console.log(employee.name + " has salary of " + employee.salary + "$ and he was hired on " + employee.hireDate, index)
});

//Example with for Each and arrow function
employees.forEach((employee, index) => console.log(employee.name + " has salary of " + employee.salary + "$ and he was hired on " + employee.hireDate, index))
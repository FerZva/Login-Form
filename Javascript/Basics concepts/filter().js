//The filter() method creates a new array with all elementes that pass the test implemented by the provided function.

//Example
let employees = [
    {name: 'John', salary: '90000', hireDate: "July 1, 2010"},
    {name: 'David', salary: '75000', hireDate: "August 15, 2009"},
    {name: 'Ana', salary: '80000', hireDate: "December 12, 2011"}
];

const highTier = employees.filter(function(employee) {
    return employee
})

console.log(highTier)

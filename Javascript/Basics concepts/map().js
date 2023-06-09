// The map() method creates a new array populated with results of calling a provided function on every element in the calling array

// Example
let employees = [
    {name: 'John', salary: '90000', hireDate: "July 1, 2010"},
    {name: 'David', salary: '75000', hireDate: "August 15, 2009"},
    {name: 'Ana', salary: '80000', hireDate: "December 12, 2011"}
];

const uppercase = employees.map(function(employee) {
    return employee.name.toLocaleUpperCase()
})

console.log(uppercase)
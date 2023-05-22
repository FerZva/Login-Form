//The redice() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//This method require to parameter like previousValue and currentValue

let employees = [
    {name: 'John', salary: '90000', hireDate: "July 1, 2010"},
    {name: 'David', salary: '75000', hireDate: "August 15, 2009"},
    {name: 'Ana', salary: '80000', hireDate: "December 12, 2011"}
];

const totalSalariess = employees.reduce((total, current) => total + current.salary, 0)

console.log(totalSalariess)

//or

const totalSalaries = employees.reduce(function(total, current) {
    return total + current.salary
}, 0)

console.log(totalSalaries)

const total = [1, 2, 3, 4, 5, 6, 7].reduce(function(total, current) {
    console.log(total, current)
    return total + current
    
}) 

console.log(total)
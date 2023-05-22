//Method Chaining

let employees = [
    {name: 'John', salary: '90000', hireDate: "July 1, 2010"},
    {name: 'David', salary: '75000', hireDate: "August 15, 2009"},
    {name: 'Ana', salary: '80000', hireDate: "December 12, 2011"}
];

const totalHightier = employees
    .map(employee => employee.salary)
    .filter(salary => salary > 75000)
    .reduce((total, current) => total + current)

console.log(totalHightier)
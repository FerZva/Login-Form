let employees = [
    {name: 'John', salary: '90000', hireDate: "July 1, 2010"},
    {name: 'David', salary: '75000', hireDate: "August 15, 2009"},
    {name: 'Ana', salary: '80000', hireDate: "December 12, 2011"}
];

//Array sort()
const sortedEmployeess = [...employees].sort((a, b) => b.salary - a.salary)
console.log(employees, sortedEmployeess)

//or 
const sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary
})

console.log(employees, sortedEmployees)

//or
employees.sort(function(a, b) {
    return a.salary - b.salary
})

console.log(employees)

/*[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function(num1, num2){
    return num1 -num2

    /*  if (num1 < num2 ) {
        return -1
    } else if (num1 > num2){
        return 1
    } else {
        return 0
    }*/

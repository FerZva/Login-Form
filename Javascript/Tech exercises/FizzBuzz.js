//Write an app which use console.log to print all the number* from 1 to 100, with two exceptions for all divisible numbers for three, print "Fizz" instead of the number, and for the divisible number for 5 (and not three), print "Buzz" instead the number, once you got this working, modify the app to print "FizzBuzz", for number which be divisible for three and five (and still printing "Fizz" or "Buzz" to number divisibles for only one of them)

for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 == 0) {
        result += "Fizz"
    }
    if (i % 5 == 0) {
        result += "Buzz"
    }
    console.log(result || i)
}
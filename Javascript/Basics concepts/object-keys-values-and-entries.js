const persons = {
    laura: 22,
    raul: 76,
    marta: 53,
    jorge: 18,
    valeria: 15,
};


//Object Key
const hasproperties = !!Object.keys(persons).length

hasproperties

//Object Value and Object Reduce

const totalyears = Object.values(persons).reduce((total, current) => total + current)

totalyears

//Object Entries, Object Array, Object filter
for (const [name, age] of Object.entries(persons)
  .sort((a, b) => a[1] - b[1])
  .filter((person) => person[1] > 18)) {
  console.log(name, age);
}

Object.entries(persons)
.sort((a, b) =>[1] - [1])
.filter(persons =>[1] > 18 )

console.log(persons)
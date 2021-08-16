const students = [
    {id: 21, name: "Sakib Khan"},
    {id: 31, name: "Maannaaa"},
    {id: 41, name: "Moyuri"},
    {id: 51, name: "deepjol"}
]

let output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    output.push(element)
}
// console.log(output);


const names = students.map(student => student.name)
const id = students.map(student => student.id)
const bigger = students.filter(student => student.id > 40)
const firstBigger = students.find(student => student.id > 40)

console.log({firstBigger});


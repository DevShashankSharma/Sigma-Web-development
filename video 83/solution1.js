let students = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Amgad", "Hassan", "Moha","Shashank", "Rashid", "Youssef"];

let houses = []

for (const student in students) {
    if(student.length < 6){
        houses.push('Gryffindor')
    }
    else if(student.length < 8){
        houses.push('Hufflepuff')
    }
    else {
        houses.push('Ravenclaw')
    }
}

console.log(houses)
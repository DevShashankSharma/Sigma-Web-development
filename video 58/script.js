function nice(name){
    console.log("Hey "+name+" you are nice")
    console.log("Hey "+name+" you are good")
    console.log("Hey "+name+" your tshirt is nice")
    console.log("Hey "+name+" your js is nice")
}

function sum(a,b){
    console.log(a+b)
    return a+b
}

// nice("Rahul")
// nice("Shashank")
// nice("Shubham")
// result = sum(3,5) 
// console.log("The sum of 3 and 5 is",result)


const func1 = (x) => {
    console.log("I am arrow function",x)
}

// func1(34)
// func1(23)


const marks = {
    harry : 48,
    rahul : 67,
    vishal : 89
} 

for (const key in marks) { 
    console.log(key," : ",marks[key])
}
 
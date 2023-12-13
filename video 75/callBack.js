console.log("Harry is a hacker")
console.log("Rohan is a hecker")

setTimeout(()=>{
    console.log("I am inside setTimeout")
},2000)

console.log("I am outside setTimeout")





const loadScript = (src,callback)=>{
    let script = document.createElement("script")
    script.src = src
    script.onload = ()=>{
        callback(null,script)
    }
    script.onerror = ()=>{
        callback(new Error(`Script loading failed for ${src}`))
    }
    document.head.append(script)
}

const callback = (err,script)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(script.src)
}

loadScript("https://cdnjs.com/api",callback)
let title = document.querySelector(".title");

const setData = (text) => {
    let time = Math.floor(Math.random() * 7) + 1; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time*1000);
    })
} 

const hacking = async() => { 
    title.innerHTML = await setData("Initializing Hacking");  
    title.innerHTML = await setData("Reading your Files");
    title.innerHTML =  await setData("Password files Detected");
    title.innerHTML =  await setData("Sending all passwords and personal files to server");
    title.innerHTML =  await setData("Cleaning up");
    title.innerHTML =  await setData("Hacking Completed");
}

hacking();

console.log('Hello World');

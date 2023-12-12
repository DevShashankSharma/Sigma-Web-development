let button = document.querySelector('#btn');

// button.addEventListener('click', function(){
//     // alert('I am clicked');
//     let box = document.querySelector('.box');
//     box.innerHTML = 'I am changed';
// })

// button.addEventListener('dblclick', function(){
//     // alert('I am clicked');
//     let box = document.querySelector('.box');
//     box.innerHTML = 'I am  double clicked';
// })

button.addEventListener('contextmenu', function(){
    // alert('I am clicked');
    let box = document.querySelector('.box');
    box.innerHTML = 'I am right clicked';
})

button.addEventListener('keyup', (e) => {
    console.log(e);
    console.log(e.key);
    if(e.key === 'Enter'){
        let box = document.querySelector('.box');
        box.innerHTML = 'I am Enter clicked';
    }
})
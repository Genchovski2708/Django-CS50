function hello(){
    const heading = document.querySelector('h1');
    if(heading.innerHTML === 'Hello'){
        heading.innerHTML = 'Goodbye'
    }else if(heading.innerHTML === 'Goodbye'){
        heading.innerHTML = 'Hello'
    }else{
        heading.innerHTML = 'Hello'
    }

}
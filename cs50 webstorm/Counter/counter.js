if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}



function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter.toString();
    localStorage.setItem('counter',counter);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector("button").onclick = count;

});

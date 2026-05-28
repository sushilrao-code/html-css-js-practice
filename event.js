let button = document.getElementById('btn');

button.addEventListener('click', function Click() {
    alert('Button clicked!');
});
button.addEventListener('click',()=>{
    console.log('Button was clicked!');
})

button.addEventListener('click',()=>{
    document.querySelector('.box').innerHTML='Button Clicked!';
})


parent.addEventListener('click',()=>{
    alert('Parent Clicked!');
})

child.addEventListener('click',(event)=>{
    event.stopPropagation();
    alert('Child Clicked!');
})//stopPropagation() method prevents the event from bubbling up to parent elements.



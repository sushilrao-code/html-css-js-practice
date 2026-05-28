let boxes = document.querySelectorAll('.box');

function changeBoxColors() {
    boxes.forEach(box => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
}

// Array.from(boxes).forEach(box => {
//     box.addEventListener('click', changeBoxColors);
// });
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = changeBoxColors()
    e.style.color = 'changeBoxColors()'
});
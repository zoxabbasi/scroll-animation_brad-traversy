const boxes = document.querySelectorAll('.box');

//Adding an eventlistener to the 'window' and listen for 'scroll' and when that happens we function(checkBoxes)
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {

    //Tringer point of the function 
    // This is the height of the console, the point where the 'function' will triger
    // console.log(window.innerHeight / 5 * 4);
    const triggerBottom = window.innerHeight / 5 * 4;

    // Looping through the boxes
    boxes.forEach(box => {

        //This return the size and position of the box relative to the viewport.
        //'.top' will give the top value
        const boxTop = box.getBoundingClientRect().top;

        //If the top of the box is less than the trigger bottom 
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
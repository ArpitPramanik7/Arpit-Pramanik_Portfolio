/*Title Section Animation Function*/
if (innerWidth >= 650) {
    setInterval(createCircle, 150);
}
else {
    setInterval(createCircle, 200);
}
 
// Function to create circle using span
 
function createCircle() {
    const section = document.querySelector("#top");
    const circle = document.createElement("span");
    $(circle).addClass("animate-circle");
    var size = Math.random() * 50;
    if (innerWidth >= 850) {
        setAnimateAttr(20 + size + "px",
            20 + size + "px",
            Math.random() * innerHeight - 80 + "px",
            Math.random() * innerWidth + "px",
            circle)
    }
    else if (innerWidth >= 500 && innerHeight >= 530) {
        setAnimateAttr(15 + size + "px",
            15 + size + "px",
            Math.random() * innerHeight - 75 + "px",
            Math.random() * innerWidth - 55 + "px",
            circle)
    }
    else if (innerWidth >= 500 && innerHeight < 530 && innerHeight >= 400){
        setAnimateAttr(15 + size + "px",
            15 + size + "px",
            Math.random() * innerHeight + 100 + "px",
            Math.random() * innerWidth - 55 + "px",
            circle)
    }
    else if (innerWidth >= 500 && innerHeight < 400)
    {
        setAnimateAttr(15 + size + "px",
            15 + size + "px",
            Math.random() * innerHeight +250 + "px",
            Math.random() * innerWidth - 55 + "px",
            circle)
    }
    else {
        setAnimateAttr(12 + size + "px",
            12 + size + "px",
            Math.random() * innerHeight - 300 + "px",
            Math.random() * innerWidth - 55 + "px",
            circle)
    }
    section.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 5000);
}
 
// Function to set attributes of the animation
function setAnimateAttr(width, height, top, left, circle) {
    circle.style.width = width;
    circle.style.height = height;
    circle.style.top = top;
    circle.style.left = left;
}
 
//Function to refresh when orientation in mobile changes
window.onorientationchange = function() {
    var orientation = window.orientation;
    switch (orientation) {
        case 0:
        case 90:
        case -90: window.location.reload();
            break;
    }
};

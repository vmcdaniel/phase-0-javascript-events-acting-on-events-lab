// Your code here
const dodger = document.getElementById("dodger");

console.log(dodger.style.left.replace('px',''));

function moveDodgerLeft() {
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left - 1}px`;
}
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    }
});
console.log(dodger.style.left);
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    }
});








    
    //const rightNumbers = dodger.style.right.replace('px','');

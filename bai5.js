document.addEventListener("DOMContentLoaded", function () {
    const numberContainer = document.getElementById('numberContainer');

    const endNumber = 10; 
    const animationDuration = 2000; 

    const interval = animationDuration / endNumber;

    for (let i = 0; i <= endNumber; i++) {
        setTimeout(() => {
            numberContainer.textContent = i;
        }, i * interval);
    }
});

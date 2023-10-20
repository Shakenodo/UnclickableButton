const buttonHeight = 100;
const buttonWidth = 100;

window.addEventListener('mouseover', () => {
    const button = document.getElementById('button');
    const buttonHeight = button.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const windowHeight = window.innerHeight - buttonHeight;
    const windowWidth = window.innerWidth - buttonWidth;
    const x = Math.floor(Math.random() * windowWidth);
    const y = Math.floor(Math.random() * 1 * windowHeight);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.transition = 'all 0.3s ease-in-out'; // Add transition property

    
    hoverCount++;
    score = hoverCount * 10;
    scoreTracker.innerText = `Score: ${score}`;

    if (hoverCount === 10) {
        alert("You will never catch me");
    }

    button.addEventListener('click', () => {
        alert("You got me");
    });
    
});



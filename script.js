const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", function () {
    document.getElementById("response").innerHTML = "Yayyyyyy! Hehehehehehehe 💘💘";
    createHearts();
});

noBtn.addEventListener("mouseover", function () {
    let buttonWidth = noBtn.offsetWidth;
    let buttonHeight = noBtn.offsetHeight;

    let maxX = 965 - buttonWidth - 20; 
    let maxY = 735 - buttonHeight - 20;

    let newX = Math.random() * maxX + 10;
    let newY = Math.random() * maxY + 10;

    this.style.position = "absolute";
    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
    this.style.transition = "left 0.2s ease, top 0.2s ease";
});

function createHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 90 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        heart.style.position = "absolute";
        heart.style.fontSize = "200px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

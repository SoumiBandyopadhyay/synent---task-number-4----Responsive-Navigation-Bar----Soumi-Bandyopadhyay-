const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function showMessage(text) {
    const message = document.getElementById("message");

    message.innerHTML = text;
    message.style.display = "block";

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}
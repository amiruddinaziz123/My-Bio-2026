const listIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

listIcon.addEventListener("click", () => {
    if (menuList.style.display == "flex") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "flex";
    }
});

// Bio Typing Effect
const textElement1 = document.querySelector(".typing-text1");
const textElement2 = document.querySelector(".typing-text2");
let i = 0;
const text1 = "Welcome To My Website";
const text2 = "Hello, I'm Amiruddin Aziz";
const speed = 100;

document.addEventListener("DOMContentLoaded", typeWriter1);

function typeWriter1() {
    if (i < text1.length) {
        textElement1.innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }else {
        typeWriter2(0);
    }
}
function typeWriter2(index) {
    if (index < text2.length) {
        textElement2.innerHTML += text2.charAt(index);
        index++;
        setTimeout(() => typeWriter2(index), speed);
    }
}

// LeavesAnimation on off
const animButton = document.getElementById("animation-activation");
const leafButton = document.querySelector("#animation-activation i");
const leavesContainer = document.getElementById("leaves");

animButton.addEventListener("click", () => {
    leafButton.classList.toggle("rotateLeaf");
    leavesContainer.classList.toggle("animation-off");
});



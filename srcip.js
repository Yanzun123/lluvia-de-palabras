function iniciarLluvia() {
    const palabra = document.getElementById("palabra").value;
    const lluvia = document.querySelector(".lluvia");
    lluvia.textContent = palabra;
    
    for (let i = 0; i < window.innerWidth / 3; i++) {
    const copiaLluvia = lluvia.cloneNode(true);
    copiaLluvia.style.left = Math.random() * window.innerWidth + "px";
    copiaLluvia.style.fontSize = Math.random() * 10 + 5 + "px";
    copiaLluvia.style.animationDuration = Math.random() * 10 + 3 + "s";
    document.body.appendChild(copiaLluvia);
    }
    }
    
/* Script para o ícone whatsapp */

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const icon = document.querySelector('.button-whatsapp');
    const footerTop = footer.getBoundingClientRect().top;
    const iconBottom = icon.getBoundingClientRect().bottom;

    if (iconBottom >= footerTop) {
        icon.style.opacity = '0'; // Torna o ícone invisível
    } else {
        icon.style.opacity = '1'; // Ícone visível fora do footer
    }
});

/* Login page (interação ao clicar) */

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function cleanUrl(url) {
    const cleanUrl = url.split('?')[0];
    return cleanUrl;
}

if (!window.location.href.includes('login-page')) {
    const cleanCurrentUrl = cleanUrl(window.location.href);
    sessionStorage.setItem('lastNonLoginPage', cleanCurrentUrl);
}

function goBack() {
    let lastPage = sessionStorage.getItem('lastNonLoginPage');

    if (lastPage && !lastPage.includes('login-page')) {
        lastPage = cleanUrl(lastPage);
        window.location.href = lastPage;
    } else {
        window.history.back();
    }
}

document.getElementById('button-back').addEventListener('click', goBack);

document.getElementById('button-close').addEventListener('click', goBack);
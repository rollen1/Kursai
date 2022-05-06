const cookieDisplay = document.getElementById('cookieDisplay')
let cookieCount = getCookie('cookieCount') || 0;
cookieDisplay.textContent = cookieCount;

function increaseCookieCount() {
    cookieCount++
    cookieDisplay.textContent = cookieCount;
    setCookie('cookieCount', cookieCount)
}

function setCookie(name, value) {
    document.cookie = `${name}=${value};`
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


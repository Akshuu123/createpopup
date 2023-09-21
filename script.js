const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupclose');


function setPopupDisplay() {
    // Display the popup
    popup.style.display = 'block';
}
window.onload = function () {
    if (shouldDisplayPopup()) {
        setPopupDisplay();
    }
}
popupClose.addEventListener('click', function () {
    popup.style.display = 'none';
})

function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

function shouldDisplayPopup() {
    const lastPopupDisplayTime = getCookie('lastPopupDisplayTime');
    const currentTime = new Date().getTime();
    const validityOne = 24 * 60 * 60 * 1000;

    if (!lastPopupDisplayTime || currentTime - parseInt(lastPopupDisplayTime) >= validityOne) {
        // Set the last popup display time in a cookie
        const expires = new Date();
        expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);  // Expires in 1 day
        document.cookie = `lastPopupDisplayTime=${currentTime};expires=${expires.toUTCString()};path=/`;
        return true;
    }

    return false;
}
window.onload(()=>{
    alert('hgi');
})
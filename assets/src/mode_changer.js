const pageStyles = document.getElementsByClassName('page')[0].style;

const avatarStyles = document.getElementsByClassName('avatar')[0];

const lightMode = { "background": "white", "color": "black", "transition": "0.5s" };

const darkMode = { "background": "black", "color": "white", "transition": "0.5s" };

const avatarLight = "./assets/images/avatar-light.png";

const avatarDark = "./assets/images/avatar-dark.png";

const themeButton = document.getElementById('mode');

themeButton.addEventListener('click', () => {
    if (themeButton.checked) {
        Object.assign(pageStyles, darkMode);
        avatarStyles.data = avatarDark;
        avatarStyles.style.transition = "1s";
    } else {
        Object.assign(pageStyles, lightMode);
        avatarStyles.data = avatarLight;
    }
});

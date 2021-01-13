const page_styles = document.getElementsByClassName('page')[0].style;
const light_mode = { "background": "white", "color": "black", "transition": "0.5s" };
const dark_mode = { "background": "black", "color": "white" };
const theme_button = document.getElementById('mode');
theme_button.addEventListener('click', () => 
    theme_button.checked
    ? Object.assign(page_styles, dark_mode)
    : Object.assign(page_styles, light_mode)
);

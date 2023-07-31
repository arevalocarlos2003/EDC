const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const exit_btn = document.getElementById('exit_btn');

exit_btn.addEventListener('click', ()=>{
    menu.classList.toggle('menu_visible');
});

menu_btn.addEventListener('click', ()=>{
    menu.classList.toggle('menu_visible');
});

const about = document.querySelector('.about');
const about_btn = document.querySelector('#about');
const about_exit_btn = document.querySelector('#exit_btn_about');

about_exit_btn.addEventListener('click', ()=>{
    about.classList.toggle('about_visible');
})

about_btn.addEventListener('click', ()=>{
    about.classList.toggle('about_visible');
})


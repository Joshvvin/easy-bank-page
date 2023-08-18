const btn = document.querySelector('.icon .hamburger-new');
// console.log(btn);
const menu = document.getElementById('header-menu');
const close = document.querySelector('.icon .close-new');
const firstimg = document.getElementsByClassName('first-img')[0];
close.style.display = 'none';
// console.log((menu));
btn.addEventListener('click', () => {
    menu.style.display = 'flex';
    firstimg.style.display = 'none';
    btn.style.display = 'none';
    close.style.display='block';
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
    firstimg.style.display = 'block';
    btn.style.display = 'block'
    close.style.display='none';
});
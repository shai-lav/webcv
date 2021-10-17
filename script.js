let mynav = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY >= 20) {
        mynav.classList.add("sticky");
    } else {
        mynav.classList.remove("sticky");
    }
};

const menuBtn = document.querySelector('.list-btn');

menuBtn.addEventListener('click', () => {
    const change_ = document.querySelector('.menu');
    change_.classList.toggle("active");
});
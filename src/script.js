const navBtn = document.querySelector("#nav-btn");
const navMobileSize = document.querySelector("#nav-mobile");
const closeBtnNavMobile = document.querySelector("#close-btn-nav-mobile");
const navMobileItems = document.querySelector("#nav-mobile-item");


navBtn.addEventListener('click', function() {
    navMobileSize.classList.remove('hidden');
});

closeBtnNavMobile.addEventListener('click', function() {
    navMobileSize.classList.add('hidden');
});

navMobileItems.forEach(navMobileItem => {
    navMobileSize.classList.add('hidden');
});
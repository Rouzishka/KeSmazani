window.addEventListener('scroll', function () {
    var topnav = document.querySelector('.topnav');
    var logo = document.querySelector('.logo');
    var sticky = topnav.offsetTop;

    // konrola myši nad logem
    var isMouseOverLogo = false;

    logo.addEventListener('mouseover', function () {
        isMouseOverLogo = true;
    });

    logo.addEventListener('mouseout', function () {
        isMouseOverLogo = false;
    });

    // kontrola animace loga
    if (!isMouseOverLogo && window.pageYOffset >= sticky) {
        topnav.classList.add('sticky');
    } else {
        topnav.classList.remove('sticky');
    }
});

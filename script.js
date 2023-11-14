document.addEventListener('DOMContentLoaded', function () {
    const topnav = document.querySelector('.topnav');
    const logo = document.querySelector('.logo');
    const sticky = topnav.offsetTop;

    let isMouseOverLogo = false;

    logo.addEventListener('mouseover', function () {
        isMouseOverLogo = true;
    });

    logo.addEventListener('mouseout', function () {
        isMouseOverLogo = false;
    });

    window.addEventListener('scroll', function () {
        if (!isMouseOverLogo) {
            if (window.pageYOffset >= sticky) {
                topnav.classList.add('sticky');
            } else {
                topnav.classList.remove('sticky');
            }
        }
    });
});

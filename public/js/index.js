document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var sideNavs = document.querySelectorAll('.sidenav');
    var instSideNavs = M.Sidenav.init(sideNavs);
    var carousels = document.querySelectorAll('.carousel');
    var instCarousels = M.Carousel.init(carousels);
});
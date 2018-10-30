document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var sideNavs = document.querySelectorAll('.sidenav');
    var instSideNavs = M.Sidenav.init(sideNavs);
    var carousels = document.querySelectorAll('.carousel');
    var instCarousels = M.Carousel.init(carousels);
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}
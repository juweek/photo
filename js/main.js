var windowTop, windowHeight, steps = [], chartHeight;

init();

//set up scroll event handler
function init() {
    this.bindings();
}

//set a timeout for the scroll event handler; call onScroll
function bindings() {
    $(window).scroll(function() {
        setTimeout( function(){
            this.onScroll();
        },100);
    }.bind(this));
}

//capture scroll position; feed in scroll pos to css for responsive animation
function onScroll() {
    windowTop = window.pageYOffset || document.documentElement.scrollTop;
    var modulo = windowTop % 1000;
    $('.image__container--sun').css('transform', 'rotate(' + ((modulo/1000) * 360) + 'deg)');
}

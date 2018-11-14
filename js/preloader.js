var clPreloader = function () {

    $("html").addClass('cl-preload');
    console.log("in preLoader")

    $(window).load('load', function () {
        console.log("loaded")
        //force page scroll position to top at page refresh
        // $('html, body').animate({ scrollTop: 0 }, 'normal');

        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

        // for hero content animations 
        $("html").removeClass('cl-preload');
        $("html").addClass('cl-loaded');

    });
};
// clPreloader();

(function clInit() {
    console.log("in init")
    clPreloader();

})();
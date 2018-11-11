$(function () {
    var onTop = true ;
    if($(window).scrollTop() != 0) {
        navHoverHandlerin() ; 
    } 
    $("nav").hover(navHoverHandlerin, navHoverHandlerout)
    $(document).scroll(function() { 
        if($(window).scrollTop() === 0) {
          navHoverHandlerout()
          onTop = true ;  
        }else if(onTop ==true) { 
            navHoverHandlerin() 
            onTop = false ; 
            console.log($(window).scrollTop())
        }
 
     });
});


function navHoverHandlerin() {
    console.log("in animage")
    $(".navbar").animate({ "background-color": "rgba(0,0,0,1)" }, 300);
}
function navHoverHandlerout() {
    $(".navbar").animate({ "background-color": "rgba(0,0,0,0)" }, 300);
}

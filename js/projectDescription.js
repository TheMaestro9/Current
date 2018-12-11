$(document).ready(function ($) {
    $('#mainSlider').sliderPro({
        width: 1100,
        height: 500,
        fade: true,
        arrows: true,
        buttons: false,
        fullScreen: true,
        shuffle: false,
        smallSize: 500,
        mediumSize: 1100,
        largeSize: 3000,
        thumbnailArrows: true,
        autoplay: false,
        fadeDuration: 1500,
        // autoSlideSize: true
    });

    $('#subSlider').sliderPro({
        width: 500,
        height: 300,
        fade: true,
        arrows: false,
        buttons: true,
        fullScreen: false,
        shuffle: true,
        smallSize: 500,
        mediumSize: 1100,
        largeSize: 3000,
        thumbnailArrows: true,
        autoplay: true,
    });
    $('#subSlider2').sliderPro({
        width: 500,
        height: 300,
        fade: true,
        arrows: false,
        buttons: true,
        fullScreen: false,
        shuffle: true,
        smallSize: 500,
        mediumSize: 1100,
        largeSize: 3000,
        thumbnailArrows: true,
        autoplay: true,
    });

    $(".arrow-shade, .arrow-shade").fadeOut(100);
    $(".arrow-shade").click(function () {
        var grandPa = $(this).parent().parent()
        if (grandPa.hasClass("arrow-shade-container-left")) {
            $(".sp-previous-arrow").click();
        }
        else 
            $(".sp-next-arrow").click();
    })

    $(".sp-slides-container").hover(function () {
        $(".arrow-shade").fadeIn(500);
    }, function () {
        $(".arrow-shade").fadeOut(500);
    })

    $(".slide-link").click(function () {
        location.href($(this).attr("href"));
    })

    var isFullScreen = false;
    $('.sp-full-screen-button').click(function () {
        if (!isFullScreen) {
            $(".row").css({ display: "none" })
        }

    });



    $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
        if (isFullScreen) {
            $(".row").css({ display: "flex" })
            isFullScreen = false;
        }
        else {
            $(".row").css({ display: "none" })
            isFullScreen = true;
        }
    });
})

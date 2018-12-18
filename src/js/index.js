//import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';

$(window).on('load', function() {
    $('.loader').css('display', 'none');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        dots: false,
        nav: true,
        smartSpeed: 700,
        //responsive: {
        //    0: {
        //        nav: false,
        //        mouseDrag: false,
        //        touchDrag: false
        //    },
        //    960: {
        //        nav: true,
        //        mouseDrag: false,
        //        smartSpeed: 700,
        //        animateOut: 'fadeOut',
        //    }
        //}
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});


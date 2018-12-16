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

        responsive: {
            0: {
                nav: false,
                mouseDrag: false,
                touchDrag: false
            },
            960: {
                nav: true,
                mouseDrag: false,
                smartSpeed: 700,
                animateOut: 'fadeOut',
            }
        }
    });
});


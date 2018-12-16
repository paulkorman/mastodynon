//import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';

$(function() {
    $(window).on('load', function() {
        $('.loader').fadeOut();
    });
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            center: true,
            nav: true,
            dots: false,
        });
    });
});

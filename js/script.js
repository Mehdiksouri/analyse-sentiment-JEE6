$(document).ready(function () { 
    let homeSliderItems = $('.home-slider-items');
    if (homeSliderItems.length) {
        homeSliderItems.slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
        $("#hometSliderPrev").click(function (e) {
            e.preventDefault();
            homeSliderItems.slick('slickPrev');
        });
        $("#homeSliderNext").click(function (e) {
            e.preventDefault();
            homeSliderItems.slick('slickNext');
        });
    }

})
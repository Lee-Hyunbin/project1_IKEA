$(document).ready(function () {


    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
    });


    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".play").hide();
    $(".pause").click(function () {
        mv.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });

    $(".play").click(function () {
        mv.autoplay.start();
        $(".play").hide();
        $(".pause").show();
    });



    const prd_list = new Swiper('.prd_list', {

        loop: true,
        navigation: {
            nextEl: " .div_prd .swiper-button-next",
            prevEl: " .div_prd .swiper-button-prev",
        },
        slidesPerView: 5,
        spaceBetween: 80,
    });

    const new_list = new Swiper('.new_list', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,

        navigation: {
            nextEl: ".new_prd .swiper-button-next",
            prevEl: ".new_prd .swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 50,
    });


    const service_list = new Swiper('.service_list', {

        loop: true,
        navigation: {
            nextEl: ".service_wrap .swiper-button-next",
            prevEl: ".service_wrap .swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 170,

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 180,
        },
    });


});/* 문서준비 이벤트 */
$(function () {

    //======================================bgclass start
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $('.navbar').addClass('bgclass');

        } else {
            $('.navbar').removeClass('bgclass');

        }
    });
    //======================================bgclass end
    $(".typed").typed({
        strings: ["a Front-End Developer.", " a Professional Freelancer.", " an Engineer."], 
        stringsElement: null, // typing speed
        typeSpeed: 100, // time before typing starts
        startDelay: 1200, // backspacing speed
        backSpeed: 20, // time before backspacing
        backDelay: 500, // loop
        loop: true, // false = infinite
        loopCount: 5, // show cursor
        showCursor: false, // character for cursor
        cursorChar: "|", // attribute to type (null == text)
        attr: null, // either html or text
        contentType: 'html', // call when done callback function
        callback: function () {}, // starting callback function before each string
        preStringTyped: function () {}, //callback for every typed string
        onStringTyped: function () {}, // callback for reset
        resetCallback: function () {}
    });
    //======================================progress bar start
    new WOW().init();
    //    progress bar end
    //======================================Service Slider start
    $('.serviceslider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
//        prevArrow: '.left',
//        nextArrow: '.right'
    });
    //======================================Service Slider end

    //======================================mixitup start
    var containerEl = document.querySelector('.portfolio-main');
    var mixer = mixitup(containerEl);
    //Portfolio mixitup end******************
    //Portfolio venobox start******************
    $('.venobox').venobox();
    //======================================Portfolio venobox end
    //======================================testimonial slider end
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });
    //======================================testimonial slider end
    //======================================counter part start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //======================================counter part end
    
    //======================================preloader start
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
    });

    //======================================preloader end
    
    
    //======================================back2top part start
    $('.back2top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    $(window).scroll(function () {
        var scrollingg = $(this).scrollTop();
        if (scrollingg > 500) {

            $('.back2top').addClass('back2top-added');
        } else {

            $('.back2top').removeClass('back2top-added');
        }
    });

    //======================================back2top end




});

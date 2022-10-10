(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            features carousel
        ----------------------------------------------------*/

        function a(e) {
            $featureLinks.removeClass("active"), e.addClass("active")
        }
        var $owlFeatures = $(".features-carousel"),
            $featureLinks = $(".feature-link");
        $owlFeatures.owlCarousel({
                loop: !0,
                responsiveClass: !0,
                margin: 20,
                items: 1,
                nav: true,
                dots: !1,
                navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            }),
            $owlFeatures.on("changed.owl.carousel", function (e) {
                var o = e.item.index + 1 - e.relatedTarget._clones.length / 2,
                    n = e.item.count;
                (o > n || 0 == o) && (o = n - o % n), o--;
                var t = $(".feature-link:nth(" + o + ")");
                a(t)
            }),
            $featureLinks.on("click", function () {
                var e = $(this).data("owl-item");
                $owlFeatures.trigger("to.owl.carousel", e), a($(this))
            });


        /*---------------------------------------------------
            screen carousel default
        ----------------------------------------------------*/
        $('.screen-carousel-default').owlCarousel({
            loop: true,
            navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
            nav: false,
            autoplay: false,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });

        /*---------------------------------------------------
            screen carousel two
        ----------------------------------------------------*/
        $('.screen-carousel').owlCarousel({
            loop: true,
            navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            margin: 5,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 5
                }
            }
        });

        /*---------------------------------------------------
            team carousel
        ----------------------------------------------------*/
        $('.team-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        /*---------------------------------------------------
            partner carousel
        ----------------------------------------------------*/
        $('.partner-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            margin: 5,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 6
                },
                1920: {
                    items: 6
                }
            }
        });

        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 5,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });

        $('.testimonial-carousel-two').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            counter
        ----------------------------------------------------*/
        $('.counter-single .number, .stat').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });

        /*---------------------------------------------------
                magnific popUp
        ----------------------------------------------------*/

        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });

        /*---------------------------------------------------
                screenshot 3d slider
        ----------------------------------------------------*/

        var swiper = new Swiper('.swiper-screenshots-container-1', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            slidesPerView: 3,
            paginationClickable: true,
            coverflowEffect: {
                rotate: -60,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 500000000,
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                480: {
                    effect: 'slide',
                    slidesPerView: 2,
                    spaceBetween: 15,
                    centeredSlides: false,
                },
                360: {
                    effect: 'slide',
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: false,
                },
            }
        });

        /*---------------------------------------------------
            pricing plan swither
        ----------------------------------------------------*/
        var e = document.getElementById("tbl-monthly"),
            d = document.getElementById("tbl-yearly"),
            t = document.getElementById("switcher"),
            m = document.getElementById("monthly"),
            y = document.getElementById("yearly");

        $('#tbl-monthly').on('click', function () {
            t.checked = false;
            e.classList.add("toggler-is-active");
            d.classList.remove("toggler-is-active");
            m.classList.remove("inactive");
            y.classList.add("inactive");
        });

        $('#tbl-yearly').on('click', function () {
            t.checked = true;
            e.classList.add("toggler-is-active");
            d.classList.remove("toggler-is-active");
            m.classList.remove("inactive");
            y.classList.add("inactive");
        });

        $('#switcher').on('click', function () {
            d.classList.toggle("toggler-is-active");
            e.classList.toggle("toggler-is-active");
            m.classList.toggle("inactive");
            y.classList.toggle("inactive");
        })

        /*---------------------------------------------------
            scrollIt plugin activation
        ----------------------------------------------------*/
        $.scrollIt();

    });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header").removeClass("sticky");
        } else {
            $("#header").addClass("sticky");
        }
    });
    /*---------------------------------------------------
        accordian
    ----------------------------------------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });
    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));

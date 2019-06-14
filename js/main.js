$(document).ready(function () {

    $('nav').on('click', 'a', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    $('.header_menu-item').on('click', 'a', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });


    $('.services_slider1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // prevArrow: "<a type='button' class='prevButton pull-left'></a>",
        // nextArrow: "<a type='button' class='nextButton pull-right'></a>",
        autoplay: true,
        autoplaySpeed: 2000,

    });
    $('.services_slider2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // prevArrow: "<a type='button' class='prevButton pull-left'></a>",
        // nextArrow: "<a type='button' class='nextButton pull-right'></a>",
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true

    });
    //=================================================
    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });


// Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
});

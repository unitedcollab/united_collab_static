(function($) {

    "use strict";

    jQuery(document).ready(function($) {

        // scroll
        $(window).scroll(function() {
            var top_bar = $('.header.sticky-header').size(),
                scroll_top = $('.btn-scroll-top').size(),
                scroll = $(window).scrollTop();
            if (top_bar) {
                if (scroll >= 50) {
                    $(".header.sticky-header").addClass("sticked");
                } else {
                    $(".header.sticky-header").removeClass("sticked");
                }
            }
            // btn scroll to top
            if (scroll_top) {
                if (scroll >= 500) {
                    $('.btn-scroll-top').addClass("scrolled");
                } else {
                    $('.btn-scroll-top').removeClass("scrolled");
                }
            }
        });

        // masonry
        var masonry_check = $('#masonry-container').size();
        if (masonry_check) {
            //set the container that Masonry will be inside of in a var
            var container = document.querySelector('#masonry-container');
            //create empty var msnry
            var msnry;
            // initialize Masonry after all images have loaded
            imagesLoaded(container, function() {
                msnry = new Masonry(container, {
                    itemSelector: '.masonry-item'
                });
            });
        }

        var block_check = $('.nt-single-has-block').size();
        if (block_check) {
            $(".nt-theme-content ul").addClass("nt-theme-content-list");
            $(".nt-theme-content ol").addClass("nt-theme-content-number-list");
        }

        // add class for bootstrap table
        var pageHero = $(".promo-primary");
        var shopHeader = $(".shop-header").size();
        if (shopHeader && !(pageHero.hasClass('promo-primary--shop'))) {
            pageHero.addClass('promo-primary--shop');
        }

        // add class for wishlist empty table
        var wishlistTable = $("#yith-wcwl-form .shop_table");
        var emptyTable = $("#yith-wcwl-form .shop_table .wishlist-empty").size();
        if (emptyTable) {
            wishlistTable.addClass('empty_table');
        } else {
            wishlistTable.removeClass('empty_table');
        }

        // add class for bootstrap table
        $(".nt-theme-content table, #wp-calendar").addClass("table table-striped");
        // CF7 remove error message
        $('.wpcf7-response-output').ajaxComplete(function() {
            window.setTimeout(function() {
                $('.wpcf7-response-output').addClass('display-none');
            }, 4000); //<-- Delay in milliseconds
            window.setTimeout(function() {
                $('.wpcf7-response-output').removeClass('wpcf7-validation-errors display-none');
                $('.wpcf7-response-output').removeAttr('style');
            }, 4500); //<-- Delay in milliseconds
        });


        $('select').niceSelect();

    }); // end ready

    // preloader
    $(window).load(function() {
        // Animate loader off screen
        $('#nt-preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

})(jQuery);
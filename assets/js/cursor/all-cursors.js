(function(window, document, $) {

    "use strict";

    /* cursorPoint  */
    function cursorPoint1() {

        var cursor1 = document.querySelectorAll('body:not(.elementor-msie) .cursor1');

        if (!cursor1.length) {
            return;
        }

        const updateProperties = function(elem, state) {

            elem.style.setProperty('--x', `${ state.x }px`)
            elem.style.setProperty('--y', `${ state.y }px`)
            elem.style.setProperty('--width', `${ state.width }px`)
            elem.style.setProperty('--height', `${ state.height }px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)

        };

        document.querySelectorAll('.cursor1').forEach((cursor) => {
            let cursorw = $('.cursor1').width(),
                cursorww = cursorw == 0 ? 15 : cursorw;
            let onElement

            const createState = (e) => {

                const defaultState = {
                    x: e.clientX,
                    y: e.clientY,
                    width: cursorww,
                    height: cursorww,
                    radius: '100px'
                }

                const computedState = {}

                if (onElement != null) {
                    const {
                        top,
                        left,
                        width,
                        height
                    } = onElement.getBoundingClientRect()
                    const radius = window.getComputedStyle(onElement).borderTopLeftRadius

                    computedState.x = left + width / 2
                    computedState.y = top + height / 2
                    computedState.width = width + 10
                    computedState.height = height + 10
                    computedState.radius = radius
                }

                return {
                    ...defaultState,
                    ...computedState
                }

            }

            document.addEventListener('mousemove', (e) => {
                const state = createState(e)
                updateProperties(cursor, state)
            });

        });

    }


    /* cursorPoint3  */
    function cursorPoint2() {
        var cursor2 = document.querySelectorAll('body:not(.elementor-msie) .cursor2');
        if (!cursor2.length) {
            return;
        }

        const updateProperties = (elem, state) => {

            elem.style.setProperty('--x', `${ state.x }px`)
            elem.style.setProperty('--y', `${ state.y }px`)
            elem.style.setProperty('--width', `${ state.width }px`)
            elem.style.setProperty('--height', `${ state.height }px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)

        }

        document.querySelectorAll('.cursor2').forEach((cursor) => {

            let onElement

            const createState = (e) => {

                const defaultState = {
                    x: e.clientX,
                    y: e.clientY,
                    width: 40,
                    height: 40,
                    radius: '100px'
                }

                const computedState = {}

                if (onElement != null) {
                    const {
                        top,
                        left,
                        width,
                        height
                    } = onElement.getBoundingClientRect()
                    const radius = window.getComputedStyle(onElement).borderTopLeftRadius

                    computedState.x = left + width / 2
                    computedState.y = top + height / 2
                    computedState.width = width + 10
                    computedState.height = height + 10
                    computedState.radius = radius
                }

                return {
                    ...defaultState,
                    ...computedState
                }

            }

            document.addEventListener('mousemove', (e) => {
                const state = createState(e)
                updateProperties(cursor, state)
            });

            document.querySelectorAll('a,.swiper-button-next, .swiper-button-prev, .menu-icon, .social .icon, .slick-arrow, .progress-wrap, .portfolio .filter span, .vid-btn .icon').forEach((elem) => {
                elem.addEventListener('mouseenter', () => onElement = elem)
                elem.addEventListener('mouseleave', () => onElement = undefined)
            });

        });
    }

    function cursorPoint3() {
        if ($(".cursor-type-3").size()) {
            $("body").addClass('has-cursor-type-3');
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function(s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $("body").on("mouseenter", "a, .cursor-pointer", function() {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            }), $("body").on("mouseleave", "a, .cursor-pointer", function() {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }), e.style.visibility = "visible", t.style.visibility = "visible"
        }
    }

    $(document).ready(function() {
        var is_ie = $('body');

        if (is_ie.hasClass('elementor-msie')) {
            return;

        } else {

            cursorPoint1();
            cursorPoint2();
            cursorPoint3();
        }

    });

})(window, document, jQuery);
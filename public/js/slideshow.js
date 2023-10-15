$(document).ready(function () {
    let slider = $('.slider .list');
    let items = $('.slider .list .item');
    let next = $('#next');
    let prev = $('#prev');
    let dots = $('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;
    next.click(function () {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    });
    prev.click(function () {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    });
    let refreshInterval = setInterval(function () {
        next.click();
    }, 3000);

    function reloadSlider() {
        slider.css('left', -items[active].offsetLeft + 'px');
        let last_active_dot = $('.slider .dots li.active');
        last_active_dot.removeClass('active');
        dots.eq(active).addClass('active');
        clearInterval(refreshInterval);
        refreshInterval = setInterval(function () {
            next.click();
        }, 3000);
    }

    dots.each(function (key) {
        $(this).click(function () {
            active = key;
            reloadSlider();
        });
    });

    $(window).on('resize', function (event) {
        reloadSlider();
    });
});
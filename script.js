//preloader
function preloader() {
    $(() => {
        setInterval(() => {

            let p = $('.preloader');

            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 500
            );

        }, 1000);

    });
}
setInterval(
    () => preloader(), 2000
);
//PARALLAX
$('.parallax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.img1').css(
        'transform',
        'translate3d(-' + x * 80 + 'px,-' + y * 80 + 'px, 0px)' //x y z
    );
    $('.img2').css(
        'transform',
        'translate3d(-' + x * 55 + 'px,-' + y * 65 + 'px, 0px)'
    );
    $('.img3').css(
        'transform',
        'translate3d(-' + x * 40 + 'px,-' + y * 40 + 'px, 0px)'
    );
    $('.img4').css(
        'transform',
        'translate3d(-' + x * 35 + 'px,-' + y * 35 + 'px, 0px)'
    );
    $('.img5').css(
        'transform',
        'translate3d(-' + x * 30 + 'px,-' + y * 20 + 'px, 0px)'
    );
    $('.img6').css(
        'transform',
        'translate3d(-' + x * 25 + 'px,-' + y * 15 + 'px, 0px)'
    );
    $('.img7').css(
        'transform',
        'translate3d(-' + x * 20 + 'px,-' + y * 10 + 'px, 0px)'
    );
    $('.img8').css(
        'transform',
        'translate3d(-' + x * 5 + 'px,-' + y * 5 + 'px, 0px)'
    );
});

// счетчик
// $('.count').each(function() {
//     $(this).prop('Counter', 0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 9000,
//         easing: 'swing',
//         step: function(now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
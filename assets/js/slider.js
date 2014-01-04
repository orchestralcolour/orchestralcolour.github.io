$(function() {
    var speed = 300;

    $('.slide-right').click(function() {
        $(this).parent().addClass('active');
        $('.slide-left').parent().removeClass('active');

        $('.slider').animate({
            right: '100%',
        }, speed, function() {});

        $('.track-container').animate({
            opacity: 0.00,
        }, speed, function() {});

        $('#release-description').animate({
            opacity: 1.0,
        }, speed, function() {});
    });

    $('.slide-left').click(function() {
        $(this).parent().addClass('active');
        $('.slide-right').parent().removeClass('active');

        $('.slider').animate({
            right: '0%',
        }, speed, function() {});

        $('.track-container').animate({
            opacity: 1.0,
        }, speed, function() {});

        $('#release-description').animate({
            opacity: 0.0,
        }, speed, function() {});
    });
});
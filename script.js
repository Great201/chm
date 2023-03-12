// Toggle offcanvas
$('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
});

// Close offcanvas when link is clicked
$('.offcanvas-collapse .nav-link').on('click', function () {
    $('.offcanvas-collapse').removeClass('open')
});

// Close offcanvas when clicking outside of it
$(document).on('click', function (e) {
    if ($(e.target).closest('.offcanvas-collapse').length === 0) {
        $('.offcanvas-collapse').removeClass('open');
    }
});

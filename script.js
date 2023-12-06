$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Mobile menu toggle
    $('.mobile-menu-toggle').on('click', function () {
        $('nav ul').toggleClass('show');
    });

    // Example: Display the current year in the footer
    var currentYear = new Date().getFullYear();
    $("#current-year").text("© " + currentYear + " Your Digital Marketing AR Android App");

    // Add more JavaScript/jQuery functionality as needed
});

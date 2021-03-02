

$(document).ready(function () {
    if ($(window).scrollTop() > 145) {
        $('#back-to-top').fadeIn("slow");
        $("#logo").css('width', '80%')
        $("#navbar").fadeIn("slow");
    }
    $(document).on('scroll', function () {
        if ($(window).scrollTop() < 145) {
            $("#navbar").fadeOut("slow");
            $("#logo").css('width', '55%');
            $('#back-to-top').fadeOut("slow");
        }
        if ($(window).scrollTop() > 145) {
            $('#back-to-top').fadeIn("slow");
            $("#logo").css('width', '80%')
            $("#navbar").fadeIn("slow");
        }
    });
});


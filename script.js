$(document).ready(function(){
    $('#projectCarousel').carousel();

    $('#projectCarousel').hover(
        function() {
            $(this).carousel('pause');
        }, function() {
            $(this).carousel('cycle');
        }
    );
});
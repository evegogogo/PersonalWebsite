$(document).ready(function () {
    $(".lightbox_trigger").click(function (e) {
        if ($(window).width() > 812) {
            // Disable if on Mobile
            // Given it is unnecessary to have enlarged
            // view of image 
            e.preventDefault();
            var image_src = $(this).attr("src")
            if ($(".lightbox").length > 0) {
                $(".content").html('<img src="' + image_src + '" />');
                $(".lightbox").show();
            } else {
                var lightbox =
                    '<div class="lightbox">' +
                    '<p>Click to close</p>' +
                    '<div class="content">' +
                    '<img src="' + image_src + '" />' +
                    '</div>' +
                    '</div>';
                $('body').append(lightbox);
            }
        }
    });
    $('body').on('click', '.lightbox', function () {
        $('.lightbox').hide();
    });
});
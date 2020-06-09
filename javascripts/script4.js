$(document).ready(function () {
    console.log("This is going to work because jQuery is loaded.");

    $(document).click(function () {
        $("#events").append("<li> You clicked somewhere</li>");
    });

    $(".foo").click(function () {
        $("#events").append("<li>You clicked the foo div!</li>");
    });

    $(".bar").click(function () {
        $("#events").append("<li>You clicked the bar div!</li>");
    });

    $(".reddio").click(function (e) {
        if (e.button == 0) {
            $(".flibgibbet").text("You left clicked the pink part!");
        }

        $('<p/>', {
            text: " You have propably not clicked " + Math.floor(Math.random() * 100) + ' times! '
        }).appendTo(this);
    });
});
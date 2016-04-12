$(document).ready(function() {

    $("#the-textarea").keyup(function() {

        var remainingText = (140 - $(this).val().length)

        $("#character-counter").text(remainingText);

        if (remainingText > (140 * .2)) {
            $("#character-counter").addClass("green").removeClass("yellow");
        }
        else if (remainingText > (140 * .1)) {
            $("#character-counter").addClass("yellow").removeClass("red green");
        }
        else {
            $("#character-counter").addClass("red").removeClass("yellow");
        }

    });

});

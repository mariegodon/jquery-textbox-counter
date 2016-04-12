$(document).ready(function(){


    $("#the-textarea").keyup(function() {
        $("#character-counter").text($(this).val().length);

    });
    
});

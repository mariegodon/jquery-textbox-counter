$(document).ready(function(){


    $("#the-textarea").keyup(function() {
        $("#character-counter").text(140-$(this).val().length);

    });
    
});

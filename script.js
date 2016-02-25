$(document).ready(function(){
    //pig appears when button with id=showPig is pressed
    $("#showPig").click(function(){
        $("#pig").show();
    });

    //pig disappears when button with id=hidePig is pressed
    $("#hidePig").click(function(){
        $("#pig").hide();
    });
    //add a third button that makes the pig exit to the left when the new button is clicked
    $("#flyPig").click(function(){
        $("div").animate(right :'200');
    });
    //add a new event handler that causes the pig to slide up and down 3 times when the pig is clicked

    //add a new pig that flies away once the first pig has exited the screen

});

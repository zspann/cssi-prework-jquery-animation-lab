$(document).ready(function(){
    //pig appears when button with id=showPig is pressed
    $("#showPig").click(function(){
        $("#pig").show();
    });

    //pig disappears when button with id=hidePig is pressed
    $("#hidePig").click(function(){
        $("#pig").hide();
    });

    //I'd like to get this to toggle back and forth but I haven't figured our how yet.
    $("#slidePig").click(
      function() {
        $("#pig").animate({left: '2000px'}, "slow");
      }
    );

    $("img").click(function() {
      var i = 0
      while (i < 3) {
        $("#pig").animate({top: '+=10px'}, 100).animate({top: "-=10px"}, 100);
        i += 1
      }
    })
});

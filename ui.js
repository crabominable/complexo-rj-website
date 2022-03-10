$(document).ready(function(){
    setTimeout(function(){ 
        $('.loading-container').fadeOut("fast");}, 800); 
});

$("#ham-button").click(function(){
    if ($("#mobile-header").css("display") === 'none') {
        $("#ham-button").fadeOut("fast");
        $("#mobile-header").fadeIn("fast");
    } else {
        $("#mobile-header").fadeOut("fast");
    }
});

$("#ham-button-mobile-nav").click(function(){
    $("#mobile-header").fadeOut("fast");
    $("#ham-button").fadeIn("fast");
})
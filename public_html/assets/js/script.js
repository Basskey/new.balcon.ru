// window height detection
$(document).ready(function(){
    var hDetect = $(window).height();;
    if (hDetect >= 700) {
        $('.header').css('height',$(window).height()); }
});
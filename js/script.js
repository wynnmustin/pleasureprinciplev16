/*JavaScript here*/

/*Welcome to jQuery*/

$(document).ready(function(){
    /*automatic scroll*/
    $('#timeline-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#timeline").offset().top
		}, 1000);
    });
      $('#data2-back').click(function() {
        $('html, body').animate({
        scrollTop: $("#data1").offset().top
        }, 1000);
    });
    $('#data1-back').click(function() {
        $('html, body').animate({
        scrollTop: $("#home").offset().top
        }, 1000);
    });
     $('#data3-back').click(function() {
        $('html, body').animate({
        scrollTop: $("#data2").offset().top
        }, 1000);
    });
      $('#data4-back').click(function() {
        $('html, body').animate({
        scrollTop: $("#data3").offset().top
        }, 1000);
    });
       $('#data5-back').click(function() {
        $('html, body').animate({
        scrollTop: $("#data4").offset().top
        }, 1000);
    });
    $('#about-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#about").offset().top
		}, 1000);
    });
    $('#data-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#data-1").offset().top
		}, 1000);
    });
     $('#data1-link').click(function() {
        $('html, body').animate({
        scrollTop: $("#data-2").offset().top
        }, 1000);
    });
      $('#data2-link').click(function() {
        $('html, body').animate({
        scrollTop: $("#data-3").offset().top
        }, 1000);
    });
      $('#data3-link').click(function() {
        $('html, body').animate({
        scrollTop: $("#data-4").offset().top
        }, 1000);
    });
      $('#data4-link').click(function() {
        $('html, body').animate({
        scrollTop: $("#timeline").offset().top
        }, 1000);
    });
      $('#data5-link').click(function() {
        $('html, body').animate({
        scrollTop: $("#timeline").offset().top
        }, 1000);
    });
    //      $('timeline-link').click(function() {
    //     $('html, body').animate({
    //     scrollTop: $("#home").offset().top
    //     }, 1000);
    // });
});

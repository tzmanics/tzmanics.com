$(document).ready(function(){
	$('section').height(function(){
	    return $(window).height();
	});
	$('#camera_wrap_2').camera({
	});
	$('#camera_wrap_3').camera({
	});
	$('#camera_wrap_4').camera({
	});
	$('#camera_wrap_5').camera({
	});
	$('#info').on('click',function(evt){
		evt.preventDefault();
		$('html').animate({ scrollTop: 0 }, 1500);
	});
	$('#web').on('click',function(evt){
		evt.preventDefault();
		$("html, body").animate({
			scrollTop:$("#webSection").offset().top}, 1500);
	})
	$('#mobile').on('click',function(evt){
		evt.preventDefault();
		$("html, body").animate({
			scrollTop:$("#mobileSection").offset().top}, 1500);
	})
	$('#design').on('click',function(evt){
		evt.preventDefault();
		$("html, body").animate({
			scrollTop:$("#designSection").offset().top}, 1500);
	})
	$('#art').on('click',function(evt){
		evt.preventDefault();
		$("html, body").animate({
			scrollTop:$("#artSection").offset().top}, 1500);
	})
});
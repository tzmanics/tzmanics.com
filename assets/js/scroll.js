$(document).ready(function(){
	console.log('test');
	$(window).scroll(function() {
	    var image_url = '/assets/images/1.jpg'
	    if ($(window).scrollTop() > 10 && $(window).scrollTop() < 30) {
	        image_url = '/assets/images/2.jpg';
	    }
	    else if($(window).scrollTop() > 30 && $(window).scrollTop() < 50) {
	        image_url = '/assets/images/3.jpg';
	    }
	     else if($(window).scrollTop() > 50 && $(window).scrollTop() < 70) {
	        image_url = '/assets/images/4.jpg';
	    }
	     else if($(window).scrollTop() > 70 && $(window).scrollTop() < 90) {
	        image_url = '/assets/images/5.jpg';
	    }
	     else if($(window).scrollTop() <= -1) {
	        image_url = '/assets/images/8.jpg';
	    }
	    else {
	    	image_url = '/assets/images/1.jpg';
	    }
	    $('body').css('background-image', 'url("'+ image_url + '")');
	});

	function preloadImages(array) {
	    if (!preloadImages.list) {
	        preloadImages.list = [];
	    }
	    for (var i = 0; i < array.length; i++) {
	        var img = new Image();
	        img.src = array[i];
	        preloadImages.list.push(img);
	    }
	}

	var imageURLs = [
	    "/assets/images/1.jpg",
	    "/assets/images/2.jpg",
	    "/assets/images/3.jpg",
	    "/assets/images/4.jpg",
	    "/assets/images/5.jpg",
	    "/assets/images/6.jpg",
	    "/assets/images/7.jpg",
	    "/assets/images/8.jpg"
	];

	preloadImages(imageURLs);

});
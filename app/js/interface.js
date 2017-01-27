$(document).ready(function() {
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })
	var $svg = $('.svg-anim').drawsvg();
	$svg.drawsvg('animate');

	//MAIN-TOP-SLIDER
	if ($('.main-top__slider').length>0) {
		main_top_slider = $('.main-top__slider');
		// main_top_slider.on('init', function(){ 
  //   	   $('.slick-dots').insertBefore($('.main-top__events-title'))
	 //    });
		main_top_slider.slick({
			fade: true,
			dots:true,
			arrows: false,
			useTransform:true,
			accessibility: false,
			customPaging: function(slider, i) {
                return '<a href="javascript:void(0)">' + (i + 1) + '</a>';
            },
		});
	};

	if ($('.main-featured__slider').length>0) {
		$('.main-featured__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots:false,
			useTransform:true,
			accessibility: false
		});
	};

	if ($('.main-popular-events__slider').length>0) {
		$('.main-popular-events__slider').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots:false,
			useTransform:true,
			accessibility: false
		});
	};

	if ($('.main-services__slider').length>0) {
		$('.main-services__slider').slick({
			infinite: true,
			slidesToShow: 9,
			slidesToScroll: 3,
			dots:false,
			useTransform:true,
			accessibility: false
		});
	};

	if ($('.fs').length>0) {
		$('.fs').styler();
	};


	initMap();
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions

function initMap() {
    var googleMapOptions = {
        center: new google.maps.LatLng(53.9201691, 27.4997595),
        zoom: 15,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
    };
    var map = new google.maps.Map(document.getElementById("map"),
    googleMapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(53.9201691, 27.4997595),
    });

    marker.setMap(map);
    var infoBubble = new InfoBubble({
        content: '<div class="map-label"><div class="map-label__txt">Church Road, Wimbledon, London, SW19 5AE</div></div>',
        shadowStyle: 0,
        padding: 0,
        borderRadius: 0,
        minWidth: 500,
        minHeight: 70,
        arrowSize: 10,
        borderWidth: 0,
        borderColor: '#000000',
        disableAutoPan: false,
        hideCloseButton: true,
        arrowPosition: 50,
        backgroundClassName: 'label-wrap',
        backgroundColor: '#2fa6cf',
        arrowStyle: 0,
    });
	google.maps.event.addListener(infoBubble, 'domready', function() {
	    marker.setMap(null);
	});
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
    });

    infoBubble.open(map, marker);
}

// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="competition.html">Competition</a></li> \
		<li><a href="competition2.html">Competition2</a></li> \
		<li><a href="event.html">Event</a></li> \
	</ol> \
</div>');

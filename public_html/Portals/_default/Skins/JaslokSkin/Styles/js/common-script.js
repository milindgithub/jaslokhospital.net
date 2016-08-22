$(function () {
	carouseller = new carousel('.carouseller');
});
$("#myBtn").click(function () {
		$("#myModal").modal();
	});
});
$('.video-play').click(function () {

	$('.popup-back, .popup-div').fadeIn();
});

$('.close').click(function () {
	$('.popup-back, .popup-div').fadeOut();
});
$('.popup-back').click(function () {
	$('.popup-back, .popup-div').fadeOut();
});
(function ($) {

  $(function () {
	  var jcarousel = $('.jcarousel');
	  jcarousel
		  .on('jcarousel:reload jcarousel:create', function () {
			  var carousel = $(this),
				  width = carousel.innerWidth();
			  if (width >= 479) {
				  width = width / 2;
			  } else if (width >= 350) {
				  width = width / 1;
			  }
			  carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
		  })
		  .jcarousel({
			  wrap: 'circular'
		  });
	  $('.jcarousel-control-prev')
		  .jcarouselControl({
			  target: '-=1'
		  });
	  $('.jcarousel-control-next')
		  .jcarouselControl({
			  target: '+=1'
		  });
	  $('.jcarousel-pagination')
		  .on('jcarouselpagination:active', 'a', function () {
			  $(this).addClass('active');
		  })
		  .on('jcarouselpagination:inactive', 'a', function () {
			  $(this).removeClass('active');
		  })
		  .on('click', function (e) {
			  e.preventDefault();
		  })
		  .jcarouselPagination({
			  perPage: 1,
			  item: function (page) {
				  return '<a href="#' + page + '">' + page + '</a>';
			  }
		  });
  });
})(jQuery);

function pageLoad()
{
$(function () {
	  $('#datepicker1').datetimepicker();
  });
}

$("#myBtn").click(function () {
  $("#myModal").modal();
});
$(function () {
  carouseller = new carousel('.carouseller');
});
$(function () {
	$('#datepicker1').datetimepicker();
	$('#datepicker2').datetimepicker();

});

$("#myBtn").click(function () {
	$("#myModal").modal();
});
$(function () {
	carouseller = new carousel('.carouseller');
});
if ($(window).width() < 767) {
	$('#lispecialties').attr('href', '#');

	$('#licorporateProfile').attr('href', '#');

	$('#liinternational').attr('href', '#');
	$('#image-gallery').lightSlider({
		gallery: true,
		item: 1,
		slideMargin: 0,
		speed: 150,
		auto: true,
		loop: true,
		onSliderLoad: function () {
			$('#image-gallery').removeClass('cS-hidden');
		}
	});
} else {
	$('#image-gallery').lightSlider({
		gallery: true,
		item: 2,
		slideMargin: 0,
		speed: 150,
		auto: true,
		loop: true,
		onSliderLoad: function () {
			$('#image-gallery').removeClass('cS-hidden');
		}
	});
}
$('#image-gallery2').lightSlider({
	gallery: true,
	item: 1,
	slideMargin: 0,
	speed: 150,
	auto: true,
	loop: true,
	onSliderLoad: function () {
		$('#image-gallery2').removeClass('cS-hidden');
	}
});
$('#image-gallery3').lightSlider({
	gallery: true,
	item: 1,
	slideMargin: 0,
	speed: 150,
	auto: true,
	loop: true,
	onSliderLoad: function () {
		$('#image-gallery3').removeClass('cS-hidden');
	}
});
$('#CertificateImage-gallery').lightSlider({
	gallery: true,
	item: 1,
	slideMargin: 0,
	speed: 150,
	auto: false,
	loop: true,
	onSliderLoad: function () {
		$('#CertificateImage-gallery').removeClass('cS-hidden');
	}
});

if ($(window).width() > 991) {
jQuery(function($) {
	$('.navbar .dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

	}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

	});

	$('.navbar .dropdown > a').click(function() {
		location.href = this.href;
	});

});
}
/*---Right Side Find a doctor tab---*/
$(function () {

	$('.finder').on('mouseover', function (event) {
		$('.sliding-doc-info').stop().animate({ "top": "-230" }, 800, "easeOutCubic");
	});


	$('#gotoDocTab').on('click', function (event) {
		$('.sliding-doc-info').stop().animate({ "top": "-230" }, 800, "easeOutCubic");
	});



	$('.side-slider').on('mouseover', function (event) {
		$('.side-slider').stop().animate({ "right": "-78" }, 800, "easeOutCubic");
		$('.for').stop().animate({ "padding": "1.5em" }, 1500, "easeOutCubic");
	});

	$('.side-slider').on('mouseleave', function (event) {
		$('.side-slider').stop().animate({ "right": "-368px" }, 800, "easeOutCubic", function () {
			$('.for').stop().animate({
				"padding-top": "1.5em",
				"padding-right": "1.5em",
				"padding-bottom": "1.5em",
				"padding-left": "3em"
			}, 500, "easeOutCubic");
		});
	});

});
$('.collapse').on('shown.bs.collapse', function () {
	$(this).parent().find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
}).on('hidden.bs.collapse', function () {
	$(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
});

$(function(){ 
	
	$('.finder').on('mouseover', function(event){
		$('.sliding-doc-info').stop().animate({ "top" : "-230" }, 800, "easeOutCubic");
	});
	
	
	$('#gotoDocTab').on('click', function(event){
		$('.sliding-doc-info').stop().animate({ "top" : "-230" }, 800, "easeOutCubic");
	});
	
	
	
	$('.side-slider').on('mouseover', function(event){ 
		$('.side-slider').stop().animate({ "right" : "-78" }, 800, "easeOutCubic");
		$('.for').stop().animate({ "padding" : "1.5em"}, 1500, "easeOutCubic"); 		
	}); 
	
	$('.side-slider').on('mouseleave', function(event){ 
		$('.side-slider').stop().animate({ "right" : "-368px" }, 800, "easeOutCubic", function(){
			$('.for').stop().animate({ 
				"padding-top" : "1.5em", 
				"padding-right" : "1.5em", 
				"padding-bottom" : "1.5em", 
				"padding-left" : "3em"
			}, 500, "easeOutCubic");
		});
	}); 
});
          
$(window).scroll(function () {
	var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
	var div_top = $('#nav-anchor').offset().top;
	if (window_top > div_top) {
		$('nav.leftmenuweb').addClass('stick');
	} else {
		$('nav.leftmenuweb').removeClass('stick');
	}
});


/**
 * This part causes smooth scrolling using scrollto.js
 * We target all a tags inside the nav, and apply the scrollto.js to it.
 */
$("nav.leftmenuweb a").click(function (evn) {
	evn.preventDefault();
	$('html,body').scrollTo(this.hash, this.hash);
});



/**
 * This part handles the highlighting functionality.
 * We use the scroll functionality again, some array creation and 
 * manipulation, class adding and class removing, and conditional testing
 */
var aChildren = $("nav.leftmenuweb li").children(); // find the a children of the list items
var aArray = []; // create the empty aArray
for (var i = 0; i < aChildren.length; i++) {
	var aChild = aChildren[i];
	var ahref = $(aChild).attr('href');
	aArray.push(ahref);
} // this for loop fills the aArray with attribute href values

$(window).scroll(function () {
	var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
	var windowHeight = $(window).height(); // get the height of the window
	var docHeight = $(document).height();

	for (var i = 0; i < aArray.length; i++) {
		var theID = aArray[i];
		var divPos = $(theID).offset().top; // get the offset of the div from the top of page
		var divHeight = $(theID).height(); // get the height of the div in question
		if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
			$("a[href='" + theID + "']").addClass("nav-active");
		} else {
			$("a[href='" + theID + "']").removeClass("nav-active");
		}
	}

	if (windowPos + windowHeight == docHeight) {
		if (!$("nav.leftmenuweb li:last-child a").hasClass("nav-active")) {
			var navActiveCurrent = $(".nav-active").attr("href");
			$("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
			$("nav.leftmenuweb li:last-child a").addClass("nav-active");
		}
	}
});
$(document).ready(function(){
	var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
   $('ul.for-non-home li').each(function() {
    if (path == "http://vocomfest.com/news") {
     $('a.news-link').addClass('active');
	 } else if (path == "http://vocomfest.com/wdc" || path == "http://vocomfest.com/madc" || path == "http://vocomfest.com/icpc" || path == "http://localhost/vocomfest18/semnas") {
		$('a.events-link').addClass('active');
	}  else if (path == "http://vocomfest.com/gallery") {
		 $('a.gallery-link').addClass('active');
	 }
   });
	 // console.log(path);
  // navbar scroll
	$(window).scroll(function(){
	    	if($(window).scrollTop() >0){
	    		$('#main-navbar').addClass('navbar-scroll') ;
	    	}else{
	    		$('#main-navbar').removeClass('navbar-scroll') ;
	    	}
	    }) ;

  // slider slick
	 $('.testi-content').slick({
		 dots: true,
		 autoplay: true,
  	autoplaySpeed: 2000,
	 });

   // lightcase
	 $('a[data-rel^=lightcase]').lightcase();

   // nicescroll
	 $("body").niceScroll({
		 cursorcolor:"#95a5a6",
		 cursorwidth:"5px",
		 cursorborder:"1px solid transparent",
		 cursorborderradius:"0px"
	 });

	 // to ease when click '#' url
	$(document).on('click', 'li.nav-item > a', function(event){
	    // event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	});

   // video stop 
        jQuery('#video-trailer').on('hidden.bs.modal', function (e) {
	  // do something...
	  jQuery('#video-trailer iframe').attr("src", jQuery("#video-trailer iframe").attr("src"));
	});
	
	
	function countdown_wdc(){
		var now = new Date();
		var eventDate = new Date(2018, 2, 27);

		var currentTime = now.getTime();
		// console.log(now);
		// console.log(eventDate);
		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTime;

		var s = Math.floor(remTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);

		h %= 24;
		m %= 60;
		s %= 60;

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;

		//document.getElementById("wdc_days").textContent = d;
		document.getElementById("wdc_days").innerText = d;

		document.getElementById("wdc_hours").innerText = h;
		document.getElementById("wdc_minutes").innerText = m;
		document.getElementById("wdc_seconds").innerText = s;

		setTimeout(countdown_wdc, 1000);
	}
	function countdown_madc(){
		var now = new Date();
		var eventDate = new Date(2018, 2, 28);

		var currentTime = now.getTime();
		// console.log(now);
		// console.log(eventDate);
		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTime;

		var s = Math.floor(remTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);

		h %= 24;
		m %= 60;
		s %= 60;

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;

		//document.getElementById("madc_days").textContent = d;
		document.getElementById("madc_days").innerText = d;

		document.getElementById("madc_hours").innerText = h;
		document.getElementById("madc_minutes").innerText = m;
		document.getElementById("madc_seconds").innerText = s;

		setTimeout(countdown_madc, 1000);
	}
	function countdown_icpc(){
		var now = new Date();
		var eventDate = new Date(2018, 2, 31);

		var currentTime = now.getTime();
		// console.log(now);
		// console.log(eventDate);
		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTime;

		var s = Math.floor(remTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);

		h %= 24;
		m %= 60;
		s %= 60;

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;

		//document.getElementById("icpc_days").textContent = d;
		document.getElementById("icpc_days").innerText = d;

		document.getElementById("icpc_hours").innerText = h;
		document.getElementById("icpc_minutes").innerText = m;
		document.getElementById("icpc_seconds").innerText = s;

		setTimeout(countdown_icpc, 1000);
	}
	//countdown_wdc();
	//countdown_madc();
	countdown_icpc();
 });
$(function() {
	
	
	// Эффект ротации текста
	$(".rotate").textrotator({
		animation: "dissolve",
		separator: ",",
		speed: 2000
	});
	
	
	// Ноутбук, пока не используется
	/*function repositionImageNotebook() {
		var img = $(".notebook img");
		var notebook = $(".notebook");
		notebook.height(img.height());
		var left = Math.abs(notebook.width() - img.width()) / 2;
		img.css("left", -left);
	}
	repositionImageNotebook();
	$(window).resize(repositionImageNotebook);*/
	
	
	
	// Корректировка фрейма с демкой в модальном окне
	$("#demo").on("show.bs.modal", function() {
		$("#demo iframe").height(document.body.clientHeight - 180);
	});
	
	// Высота слайда
	var sections = $("section");
	sections.each(function(index, section) {
		$(section).height(document.body.clientHeight);
	});
	$(window).resize(function() {
		sections.each(function(index, section) {
			$(section).height(document.body.clientHeight);
		});
	});
	
	
	$("a[href='#offer']").click(function() {
		$(window).scrollTo("#offer", 500);
		return false;
	});
	
	
	$("#kpoffer").photobox("a");
	
	
	/*$(".page").onepage_scroll({
		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "ease-in-out",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
		                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
		pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
		loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		keyboard: true,                  // You can activate the keyboard controls
		responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
		                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
		                        // the browser's width is less than 600, the fallback will kick in.
		direction: "vertical"  
	});*/
	
});
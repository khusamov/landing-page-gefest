$(function() {
	
	
	// Эффект ротации текста
	$(".rotate").textrotator({
		animation: "dissolve",
		separator: ",",
		speed: 2000
	});
	
	
	
	
	// Корректировка фрейма с демкой в модальном окне
	$("#demo").on("show.bs.modal", function() {
		$("#demo iframe").height(document.body.clientHeight - 180);
	});
	
	// Высота слайда
	/*var sections = $("section");
	sections.each(function(index, section) {
		$(section).height(document.body.clientHeight);
	});
	$(window).resize(function() {
		sections.each(function(index, section) {
			$(section).height(document.body.clientHeight);
		});
	});*/
	
	
	
	
	// Главное меню
	$(".navbar-header a, nav.navbar ul.nav.navbar-nav > li > a").each(function(index, anchor) {
		$(anchor).click(function() {
			$(window).scrollTo($(this).attr("href"), 500);
			return false;
		});
	});
	
	
	
	/*$("a[href='#offer']").click(function() {
		$(window).scrollTo("#offer", 500);
		return false;
	});*/
	
	
	$("#kpoffer").photobox("a");
	
	
	$("nav.navbar button").tooltip({
		html: true,
		title: "Посмотреть<br/> Демо-версию калькулятора",
		placement: "bottom"
	});
	
});


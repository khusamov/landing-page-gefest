$(function() {
	
	// Эффект ротации текста
	$(".rotate").textrotator({
		animation: "dissolve",
		separator: ",",
		speed: 2000
	});
	
	
	
	
	// Корректировка фрейма с демкой в модальном окне
	$("#demo").on("show.bs.modal", function() {
		$("#demo iframe").height($(window).height() - 180);
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
	$("#kpoffer2").photobox("a");
	
	
	$("nav.navbar button[data-target='#demo']").tooltip({
		html: true,
		title: "Посмотреть<br/> демо-версию калькулятора",
		placement: "bottom"
	});
	
	$("nav.navbar button[data-target='#order']").tooltip({
		html: true,
		title: "Купить<br/> калькулятор",
		placement: "bottom"
	});
	
	$('[data-toggle="tooltip"]').tooltip();
	
	
	
	
	// Обработчик кнопки купить в модальном окне Заказ калькулятора.
	
	var modalOrder = $("div.modal#order");
	modalOrder.find("button.btn.btn-primary").click(function() {
		
		$.post("/sendmail/", {
			email: modalOrder.find("input#email").val(),
			phone: modalOrder.find("input#phone").val(),
			name: modalOrder.find("input#name").val()
		})
			.done(function(data) {
				if (data.success) {
					alert("Письмо отправлено успешно!");
				} else {
					alert("Ошибка при отправлении письма.");
				}
				modalOrder.modal("hide");
			});
		
		
	});
	
	
	
	
	
	
});


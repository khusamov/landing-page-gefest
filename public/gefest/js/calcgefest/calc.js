
//
// Функция: Загрузка курса евро из Центробанка РФ
//

/*
	В теге body обязательно прописать:
	
	<div style="display: none;">
		<div id='usrutd'></div>
		<div id='usrutm'></div>
		<div id='eurutd'></div>
		<div id='eurutm'></div>
		<div id='pfdt1'></div>
		<div id='pfdt2'></div>
		<a href="http://www.forexpf.ru/"></a>
		<script src='http://informers.forexpf.ru/php/cbrf.php?id=01'></script>
	</div>

*/

$(function() {
	
	var timeout;
	var eurutd = $("#eurutd");
	
	var timer = $.timer(100, function() {
		if (eurutd.text()) {
			timeout.stop();
			timer.stop();
			var eurutdValue = eurutd.text().replace(",", ".");
			kursEuroRub = Number(eurutdValue);
			evalPrices();
			console.log("Курс евро =", eurutdValue, "руб.");
		}
	});
	
	var timeout = $.timer(5000, function() {
		console.error("Курс евро не загружен. Используется значение по умолчанию =", kursEuroRub);
		timeout.stop();
		timer.stop();
	});
	
});

//
// Служебные функции
//

function setCookie (name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
}

function formatNum(param){return (param+'').replace(/(\d\d\d$)/i,'&nbsp;$1');}

function interpol(node1,node2,val) { delta = 150; return (node1+(node2-node1)/delta*(val%delta));}

//
// Обработчики событий
//

function bindEvents() {
	// Фурнитура
	$("#win-furn").bind('change',function(){
		var furn = $(this).val();
		calc.items.furn = furn;
		evalPrices(); 
	});
	calc.items.furn = $("#win-furn").val();
	// Стеклопакет
	$("#win-glass").bind('change',function(){
		var gl = $(this).val();
		calc.items.glass = gl;
		$("#win-glass-pattern img").attr('src',items.glasses[gl].pic);
//		$("#win-config-desc").html(items.profiles[calc.items.profile].gldesc[calc.items.glass]);
		setLimits();
		evalPrices();
	});
	// Профиль
	$("#win-sys").bind('change',function(){
		var psys = $(this).val();
		calc.items.profile = psys;
		fillGlassBox(psys);
		$("#win-glass").change();
		$("#win-corner img").attr('src',items.profiles[psys].pattern);
		$("#win-corner a.fancybox").attr('href',items.profiles[psys].patternFull);
	}).change();
	// Тип пластикового окна
	$(".wtype-block").hover(
		function(){ $(this).find(".wtype").css('background','silver').next().show(); },
		function(){ $(this).find(".wtype").css('background','none').next().hide(); }
	);
	$(".wsubtype div").hover(
		function(){ $(this).toggleClass('overed'); },
		function(){ $(this).toggleClass('overed'); }
	);
	$(".wsubtype div").click(function(){
		$(".wsubtype div").removeClass("clicked");
		$(this).addClass("clicked");
		calc.items.subtype = $(this).attr("id");
		//$("#stats #win-type").html("<strong>"+items.subtypes[calc.items.subtype].name+"</strong>");
		$("#win-type").html("<strong>"+items.subtypes[calc.items.subtype].name+"</strong>");
		var path = "./images/calc/win_types/";
		if (items.paths) path = "./data/" + items.paths.wtypes + "/";
		var im = path+items.subtypes[calc.items.subtype].pic;
		imw = items.subtypes[calc.items.subtype].w;
		imh = items.subtypes[calc.items.subtype].h;
		$("#win-example img").attr("src",im);
		if (items.onWindowTypeChange) items.onWindowTypeChange(calc.items.subtype);
		setLimits();
		evalPrices();
	});
}

//
// Инициализация комбо-боксов
//

// Выставить значением комбо-бокса первое значение из списка
function setDefaultValueBoxFirst(selectid) {
	var select = $("#" + selectid);
	var defaultValue = select.find("option[data-visible='yes']:eq(0)").val();
	select.val(defaultValue);
	select.change();
}

// Инициализация комбо-бокса Профиль
function fillProfileBox() {
	var profileBox = $("#win-sys"), profs = items.profiles;
	$(profileBox).html("");
	for (var item in profs) {
		var option = $("<option value='" + item + "'>" + profs[item].name + "</option>");
		$(profileBox).append(option);
		$.each(profs[item].pricePolicy, function(index, policy) {
			option.addClass("price-policy-" + policy);
		});
	}
}

// Инициализация комбо-бокса Стеклопакет
function fillGlassBox(profile) {
	var glassBox = $("#win-glass"), gls = items.glasses, profGls = items.profiles[profile].glasses;
	glassBox.html("");
	for (var i = 0; i < profGls.length; i++) {
		currentGlass = profGls[i];
		var option = $("<option value='" + currentGlass + "'>" + gls[currentGlass].name + "</option>");
		glassBox.append(option);
		$.each(gls[currentGlass].pricePolicy, function(index, policy) {
			option.addClass("price-policy-" + policy);
		});
	}
	applyPricePolicy("win-glass");
}

// Инициализация комбо-бокса Фурнитура
function fillFurnBox() {
	var furnBox = $("#win-furn"), furns = items.furns;
	for (var item in furns) {
		var option = $("<option value='" + item + "'>" + furns[item].name + "</option>");
		$(furnBox).append(option);
		$.each(furns[item].pricePolicy, function(index, policy) {
			option.addClass("price-policy-" + policy);
		});
	}
}

// Инициализация комбо-бокса со списком вариантов ламинации
function fillLaminationBox() {
	var type = "lamination";
	var types = "laminations";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#win-" + type);
	// Формирование комбо-бокса
	$.each(all, function(id, item) {
		select.append(
			"<option value='" + id + "'> " + 
				item.text +
			"</option>"
		);
	});
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		if (id == "none") {
			calc.items[type] = null;
		} else {
			calc.items[type] = { id: id, params: all[id] };
		}
		evalPrices();
	});
	// Значение по умолчанию
	calc.items[type] = { id: select.val(), params: all[select.val()] };
}

// Инициализация комбо-бокса со списком подоконников
function fillSillBox() {
	var type = "sill";
	var types = "sills";
	var textItemType = "Подоконник";
	var textNoSelect = "Подоконник не выбран";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#param-win-" + type + "-select");
	var length = $(".param-win-" + type + "-length");
	var params = $(".item-block-" + type + " .item-subparams div");
	// Параметры по умолчанию скрыты
	params.hide();
	// Формирование комбо-бокса
	select.append("<option value='none'>-- " + textNoSelect + " --</option>");
	for (var id in all) {
		item = all[id];
		select.append(
			"<option value='" + id + "'> " + 
				textItemType + " \"" + item.vendor + "\" (" + item.width + " мм.)" +
			"</option>"
		);
	}
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		//var params = $(".item-block-sill .item-subparams div");
		if (id == "none") {
			params.hide();
			calc.items[type] = null;
		} else {
			params.show();
			if (!parseInt(length.spinner("value"))) length.spinner("value", calc.sizes.width);
			calc.items[type] = { id: id, params: all[id], length: length.spinner("value") };
		}
		evalPrices();
	});
	// Обработчик события Изменение значения параметра
	var onchange = function(event, ui) {
		if (calc.items[type]) {
			calc.items[type].length = length.spinner("value");
			evalPrices();
		}
	};
	length.on("spinstop", onchange).on("spinchange", onchange);
}

// Инициализация комбо-бокса со списком отливов
function fillScarpBox() {
	var type = "scarp";
	var types = "scarps";
	var textItemType = "Отлив";
	var textNoSelect = "Отлив не выбран";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#param-win-" + type + "-select");
	var length = $(".param-win-" + type + "-length");
	var params = $(".item-block-" + type + " .item-subparams div");
	// Параметры по умолчанию скрыты
	params.hide();
	// Формирование комбо-бокса
	select.append("<option value='none'>-- " + textNoSelect + " --</option>");
	for (var id in all) {
		item = all[id];
		select.append(
			"<option value='" + id + "'> " + 
				textItemType + " \"" + item.vendor + "\" (" + item.width + " мм.)" +
			"</option>"
		);
	}
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		//var params = $(".item-block-sill .item-subparams div");
		if (id == "none") {
			params.hide();
			calc.items[type] = null;
		} else {
			params.show();
			if (!parseInt(length.spinner("value"))) length.spinner("value", calc.sizes.width);
			calc.items[type] = { id: id, params: all[id], length: length.spinner("value") };
		}
		evalPrices();
	});
	// Обработчик события Изменение значения параметра
	var onchange = function(event, ui) {
		if (calc.items[type]) {
			calc.items[type].length = length.spinner("value");
			evalPrices();
		}
	};
	length.on("spinstop", onchange).on("spinchange", onchange);
}

// Инициализация комбо-бокса со списком откосов
function fillOutflowBox() {
	var type = "outflow";
	var types = "outflows";
	var textItemType = "Откос";
	var textNoSelect = "Откос не выбран";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#param-win-" + type + "-select");
	var length = $(".param-win-" + type + "-length");
	var params = $(".item-block-" + type + " .item-subparams div");
	// Параметры по умолчанию скрыты
	params.hide();
	// Формирование комбо-бокса
	select.append("<option value='none'>-- " + textNoSelect + " --</option>");
	for (var id in all) {
		item = all[id];
		select.append(
			"<option value='" + id + "'> " + 
				textItemType + " \"" + item.vendor + "\" (" + item.width + " мм.)" +
			"</option>"
		);
	}
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		//var params = $(".item-block-sill .item-subparams div");
		if (id == "none") {
			params.hide();
			calc.items[type] = null;
		} else {
			params.show();
			if (!parseInt(length.spinner("value"))) length.spinner("value", calc.sizes.height * 2 + calc.sizes.width);
			calc.items[type] = { id: id, params: all[id], length: length.spinner("value") };
		}
		evalPrices();
	});
	// Обработчик события Изменение значения параметра
	var onchange = function(event, ui) {
		if (calc.items[type]) {
			calc.items[type].length = length.spinner("value");
			evalPrices();
		}
	};
	length.on("spinstop", onchange).on("spinchange", onchange);
}

// Инициализация комбо-бокса со списком вариантов демонтажа
function fillDeinstallationBox() {
	var type = "deinstallation";
	var types = "deinstallations";
	var textNoSelect = "Не выполнять";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#param-win-" + type + "-select");
	// Формирование комбо-бокса
	select.append("<option value='none'>" + textNoSelect + "</option>");
	for (var id in all) {
		item = all[id];
		select.append(
			"<option value='" + id + "'> " + 
				item.text +
			"</option>"
		);
	}
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		if (id == "none") {
			calc.items[type] = null;
		} else {
			calc.items[type] = { id: id, params: all[id] };
		}
		evalPrices();
	});
}

// Инициализация комбо-бокса со списком вариантов монтажа
function fillInstallationBox() {
	var type = "installation";
	var types = "installations";
	var textNoSelect = "Монтаж не выбран";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#param-win-" + type + "-select");
	// Формирование комбо-бокса
	select.append("<option value='none'>-- " + textNoSelect + " --</option>");
	for (var id in all) {
		item = all[id];
		select.append(
			"<option value='" + id + "'> " + 
				item.text +
			"</option>"
		);
	}
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		if (id == "none") {
			calc.items[type] = null;
		} else {
			calc.items[type] = { id: id, params: all[id] };
		}
		evalPrices();
	});
}

// Инициализация комбо-бокса со списком способов доставок
function fillDeliveryBox() {
	var type = "delivery";
	var types = "deliveries";
	var textNoSelect = "Доставка не выбрана";
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var all = items[types];
	var select = $("#param-win-" + type + "-select");
	var destination = $(".param-win-" + type + "-destination");
	var params = $(".item-block-" + type + " .item-subparams div");
	// Параметры по умолчанию скрыты
	params.hide();
	// Формирование комбо-бокса
	select.append("<option value='none'>-- " + textNoSelect + " --</option>");
	for (var id in all) {
		item = all[id];
		select.append(
			"<option value='" + id + "'> " + 
				item.text +
			"</option>"
		);
	}
	// Обработчик события Изменение значения комбо-бокса
	select.change(function() {
		var id = $(this).val();
		if (id == "none") {
			params.hide();
			calc.items[type] = null;
		} else {
			switch (id) {
				case "moscow": params.hide(); break;
				case "mo": params.show(); break;
			}
			calc.items[type] = { id: id, params: all[id], destination: destination.spinner("value") };
		}
		evalPrices();
	});
	// Обработчик события Изменение значения параметра
	var onchange = function(event, ui) {
		if (calc.items[type]) {
			calc.items[type].destination = destination.spinner("value");
			evalPrices();
		}
	};
	destination.on("spinstop", onchange).on("spinchange", onchange);
}

//
// Установка ограничений на слайдеры размеров окна
//

function setLimits() {
	
	if (calcData[calc.items.profile]) {
		var pdata = calcData[calc.items.profile].wsubtypes[calc.items.subtype];
			limits.hmin = /d[0-9]+/.test(calc.items.subtype)?1800:600;
		for (var obj in pdata) limits.hmax = obj;
		if (calc.sizes.height<limits.hmin) calc.sizes.height = limits.hmin;
		else if (calc.sizes.height>limits.hmax) calc.sizes.height = limits.hmax;
		ldelta = Math.floor(calc.sizes.height/150)*150;
		lowmax = pdata[ldelta][0]+150*(pdata[ldelta].length-2);
		if (ldelta == limits.hmax) {
			limits.wmin = pdata[ldelta][0];
			limits.wmax = lowmax;
		} else {
			udelta = ldelta+150;
			limits.wmin = pdata[udelta][0];
			upmax = pdata[udelta][0]+150*(pdata[udelta].length-2);
			limits.wmax = lowmax>upmax?upmax:lowmax;
		}
		if (calc.sizes.width<limits.wmin) calc.sizes.width = limits.wmin;
		else if (calc.sizes.width>limits.wmax) calc.sizes.width = limits.wmax;
	} else {
		var type_okna = calc.items.subtype;
		limits.wmin = calcData[type_okna].priceMin.width;
		limits.hmin = calcData[type_okna].priceMin.height;
		limits.wmax = calcData[type_okna].priceMax.width;
		limits.hmax = calcData[type_okna].priceMax.height;
	}
	
	var limitHmax = items.sliderHeightLimit ? items.sliderHeightLimit.value : limits.hmax;
	if (items.sliderHeightLimit) items.sliderHeightLimit._calchmax = limits.hmax;
	
	$("#winheight").slider("option","min",limits.hmin).slider("option","max",limitHmax).slider("value",calc.sizes.height);
	$("#winwidth").slider("option","min",limits.wmin).slider("option","max",limits.wmax).slider("value",calc.sizes.width);
}

//
// Инициализация слайдеров размеров окна
//

function initRulers() {
	function callOnSliderStop() {
		if (items.sliderHeightLimit) {
			items.sliderHeightLimit.onSliderStop.call(
				items.sliderHeightLimit, 
				calc.sizes.height, 
				items.sliderHeightLimit._calchmax
			);
		}
	}
	$("#winheight").slider({
		orientation:'vertical',
		min:600,
		max:2550,
		step:10,
		animate:true,
		slide:function(event,ui){ $("#vvalue").html(ui.value); },
		change:function(event,ui){ $("#vvalue").html(ui.value); },
		stop:function(){
			calc.sizes.height = $(this).slider("option","value");
			calc.sizes.width = $("#winwidth").slider("option","value");
			setLimits();
			evalPrices();
			callOnSliderStop();
		}
	}).slider("option","value",calc.sizes.height);
	
	callOnSliderStop();

	$("#winwidth").slider({
		step:10,
		min:600,
		max:2550,
		animate:true,
		slide:function(event,ui){ $("#hvalue").html(ui.value); },
		change:function(event,ui){ $("#hvalue").html(ui.value); },
		stop:function(){
			calc.sizes.width = $(this).slider("option","value");
			setLimits();
			evalPrices();
		}
	}).slider("option","value",calc.sizes.width);
}

//
// Обновление коммерческого предложения
//

function refreshOfferTable() {
	
	// Окно
	$("#kp-item-window span.price").text(Math.round(calc.prices.total));
	$("#kp-item-window span.kp-win-type").text(items.subtypes[calc.items.subtype].name);
	$("#kp-item-window span.kp-win-system").text(items.profiles[calc.items.profile].name);
	$("#kp-item-window span.kp-win-size-width").text(calc.sizes.width);
	$("#kp-item-window span.kp-win-size-height").text(calc.sizes.height);
	$("#kp-item-window span.kp-win-package").text(items.glasses[calc.items.glass].name);
	$("#kp-item-window span.kp-win-furniture").text(items.furns[calc.items.furn].name);
	$("#kp-item-window span.kp-win-lamination").text(calc.items.lamination.params.text);
	
	var type = null;
	
	// Подоконник
	type = "sill";
	if (calc.items[type]) {
		$("tr#kp-item-" + type).show();
		$("tr#kp-item-" + type + " span.price").text(Math.round(calc.prices[type]));
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-vendor").text(calc.items[type].params.vendor);
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-width").text(calc.items[type].params.width);
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-length").text(calc.items[type].length);
	} else {
		$("tr#kp-item-" + type).hide();
	}
	
	// Отлив
	type = "scarp";
	if (calc.items[type]) {
		$("tr#kp-item-" + type).show();
		$("tr#kp-item-" + type + " span.price").text(Math.round(calc.prices[type]));
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-vendor").text(calc.items[type].params.vendor);
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-width").text(calc.items[type].params.width);
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-length").text(calc.items[type].length);
	} else {
		$("tr#kp-item-" + type).hide();
	}
	
	// Откос
	type = "outflow";
	if (calc.items[type]) {
		$("tr#kp-item-" + type).show();
		$("tr#kp-item-" + type + " span.price").text(Math.round(calc.prices[type]));
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-vendor").text(calc.items[type].params.vendor);
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-width").text(calc.items[type].params.width);
		$("tr#kp-item-" + type + " span.kp-win-" + type + "-length").text(calc.items[type].length);
	} else {
		$("tr#kp-item-" + type).hide();
	}
	
	// Демонтаж
	type = "deinstallation";
	if (calc.items[type]) {
		$("tr#kp-item-" + type).show();
		$("tr#kp-item-" + type + " span.price").text(Math.round(calc.prices[type]));
		$("tr#kp-item-" + type + " span.caption").text(calc.items[type].params.text);
	} else {
		$("tr#kp-item-" + type).hide();
	}
	
	// Монтаж
	type = "installation";
	if (calc.items[type]) {
		$("tr#kp-item-" + type).show();
		$("tr#kp-item-" + type + " span.price").text(Math.round(calc.prices[type]));
		$("tr#kp-item-" + type + " span.caption").text(calc.items[type].params.text);
	} else {
		$("tr#kp-item-" + type).hide();
	}
	
	// Доставка
	type = "delivery";
	if (calc.items[type]) {
		$("tr#kp-item-" + type).show();
		$("tr#kp-item-" + type + " span.price").text(Math.round(calc.prices[type]));
		// Текст услуги (с учетом километража)
		var text = calc.items[type].params.text;
		switch (calc.items[type].id) {
			case "moscow": break;
			case "mo": text = text + " (" + calc.items[type].destination + " км.)"; break;
		}
		$("tr#kp-item-" + type + " span.caption").text(text);
	} else {
		$("tr#kp-item-" + type).hide();
	}
	
	// Расчет итоговой суммы
	var total = 0;
	$("#calcOk1TabItemOut table.pricelist tr.item:visible span.price")
		.each(function(index, price) {
			total += parseInt($(this).text());
		});
	$("tr#kp-item-total span.price").text(total);
	
	// Картинка окна
	
	var img = $("td#win-example img").clone();
	img.attr({ align: "right" });
	$("#calcOk1TabItemOut tr#kp-item-window .img").empty().append(img);
	
}

//
// Печать коммерческого предложения
//

var printableArea = null;

$(function() {
	$(".button-print button.print").click(function() {
		if (printableArea) printableArea.remove();
		printableArea = $("#calcOk1TabItemOut").clone();
		printableArea.addClass("printableArea").attr("style", "").appendTo("body");
		window.print();
	});
});

// 
// Режимы калькулятора (премиум, эконом)
//

var calcmodeDialodDiv = null;

$(function() {
	calcmodeDialodDiv = $("#dialog-select-calcmode");
	if (items.pricePolicyEnable) {
		var modesTable = $("#dialog-select-calcmode .modes");
		// Диалоговое окно выбора
		calcmodeDialodDiv.dialog({
			title: "Выберите класс профиля",
			autoOpen: false,
			closeOnEscape: false,
			resizable: false,
			width: 650,
			height: 410,
	      modal: true
		});
		calcmodeDialodDiv.parents(".ui-dialog").find(".ui-dialog-titlebar-close").remove();
		// Наполнение окна кнопками режимов калькулятора
		$.each(items.pricePolicies, function(id, pricePolicy) {
			var pricePolicyTr = $("<tr><td></td></tr>");
			modesTable.append(pricePolicyTr);
			pricePolicyTr.find("td")
				.attr("id", id)
				.text(pricePolicy.name)
				.hover(
					function() { $(this).addClass("hover"); },
					function() { $(this).removeClass("hover"); }
				)
				.click(function() {
					calcmodeDialodDiv.dialog("close");
					calc.pricePolicy = this.id;
					applyPricePolicy();
				});
		});
	} else {
		calcmodeDialodDiv.remove();
	}
});

function applyPricePolicy(selectid) {
	if (selectid) {
		selectid = [selectid];
	} else {
		selectid = ["win-sys", "win-glass", "win-furn"];
	}
	if (items.pricePolicyEnable) {
		$.each(selectid, function(index, id) {
			$("#" + id).find("option").each(function(index, option) {
				option = $(option);
				option.show();
				option.attr("data-visible", "yes");
				if (!option.hasClass("price-policy-" + calc.pricePolicy)) {
					option.hide();
					option.attr("data-visible", "no");
				}
			});
			setDefaultValueBoxFirst(id);
		});
	}
} 

// 
// Функция создания управляющего элемента "Тип пластикового окна"
//

function createControlWindowTypes() {
	var path = "./files/";
	if (items.paths) path = "./data/" + items.paths.wtypeicons + "/";
	var groups = {};
	$.each(items.subtypes, function(subtype, data) {
		if (!groups[subtype[0]]) groups[subtype[0]] = {};
		groups[subtype[0]][subtype] = data;
	});
	var wtypesDiv = $("#wtypes");
	$.each(groups, function(group, subtypes) {
		var groupDiv = $("<div/>").addClass("wtype-block").appendTo(wtypesDiv);
		$("<img/>").addClass("wtype").attr("src", path + group + ".png").appendTo(groupDiv);
		var wsubtypeDiv = $("<div/>").addClass("wsubtype").appendTo(groupDiv);
		$.each(subtypes, function(subtype, data) {
			var wsubtypeItemDiv = $("<div/>").attr("id", subtype).attr("title", data.name).appendTo(wsubtypeDiv);
			$("<img/>").attr("src", path + subtype + ".png").attr("alt", data.name).appendTo(wsubtypeItemDiv);
		});
	});
}

// 
// Наименование ламинации
//

function renameLamination() {
	var name = "Ламинация";
	if (items.renameLamination) name = items.renameLamination;
	name = name.toLowerCase();
	var name_fu = name[0].toUpperCase() + name.substr(1);
	$(".lamination-name-fu").text(name_fu);
	$(".lamination-name").text(name);
}

function renameWindowType() {
	var name = "Тип пластикового окна";
	if (items.renameWindowType) name = items.renameWindowType;
	$(".wintype-name-fu").text(name);
}

// 
// Кусочно-квадратичная интерполяция
// http://aco.ifmo.ru/el_books/numerical_methods/lectures/glava3.html
//

function interpol2(x, p) {
	var a21 = (p[2][1] - p[0][1]) / ((p[2][0] - p[0][0]) * (p[2][0] - p[1][0]));
	var a22 = (p[1][1] - p[0][1]) / ((p[1][0] - p[0][0]) * (p[2][0] - p[1][0]));
	var a2 = a21 - a22;
	var a1 = (p[1][1] - p[0][1]) / (p[1][0] - p[0][0]) - a2 * (p[1][0] + p[0][0]);
	var a0 = p[0][1] - a1 * p[0][0] - a2 * Math.pow(p[0][0], 2);
	return a0 + a1 * x + a2 * Math.pow(x, 2);
}

// 
// Переменные калькулятора
//

var 
	calc = {
		pricePolicy: null,
		items: { profile: '', glass: '', subtype: 'a1', furn: '' },
		sizes: { width: 1440, height: 1420 },
		prices: { montazh: 0, otdelka: 0 , credit: 0, total: 0 }
	},
	limits = { wmin: 0, wmax: 0, hmin: 0, hmax: 0 };
	
	
	if (!calcData[calc.items.subtype]) alert("Не найден тип окна " + calc.items.subtype);
	

//
// Инициализация калькулятора
//

$(document).ready(function(){
	
	// Отключение навигационного бара и футера
	if (document.location.hash == "#navoff") {
		$(".navbar").hide();
	}
	
	// Переключатель цена/коммерческое
	$("#calcOk1TabItemOut").hide();
	$(".switch-price-value a.pr").click(function() {
		$("#calcOk1PriceKreditProps").show();
		$("#calcOk1TabItemOut").hide();
		evalPrices();
	});
	$(".switch-price-value a.kp").click(function() {
		$("#calcOk1PriceKreditProps").hide();
		$("#calcOk1TabItemOut").show();
		evalPrices();
	});
	
	// Настройка коммерческого предложения
	if (items.commercialOffer) {
		if (items.commercialOffer.text) {
			if (items.commercialOffer.text.before) {
				$("#calcOk1TabItemOut .CommercialOfferText_Before").html(items.commercialOffer.text.before);
			}
			if (items.commercialOffer.text.after) {
				$("#calcOk1TabItemOut .CommercialOfferText_After").html(items.commercialOffer.text.after);
			}
		}
	}
	
	$(".fancybox").fancybox();
	createControlWindowTypes();
	renameLamination();
	renameWindowType();
	initRulers();
	fillProfileBox();
	fillFurnBox();
	fillSillBox();
	fillScarpBox();
	fillOutflowBox();
	fillDeinstallationBox();
	fillInstallationBox();
	fillDeliveryBox();
	fillLaminationBox();
	$(".param-win-sill-length").add(".param-win-scarp-length").add(".param-win-outflow-length").add(".param-win-delivery-destination").spinner();
	bindEvents();
	$(".wsubtype div[id=" + calc.items.subtype + "]").click();
	//$("#win-example img").attr("src","/images/calc/win_types/b34.png").width(screen.width*0.22);
	
	if (items.pricePolicyEnable) calcmodeDialodDiv.dialog("open");
	if (!items.viewOptions.outputPriceBlockEnable) $("#output-block-price").hide();
	if (!items.viewOptions.outputCreditBlockEnable) $("#output-block-credit").hide();
	if (!items.viewOptions.outputStatsBlockEnable) $(".output-block-stats").hide();
	if (!items.viewOptions.outputOfferBlockEnable) $("#calcOk1TabItemOut .paper").addClass("displayhide");
	
	if (items.viewOptions.outputGlassPatternBlockEnable) $("#win-glass-pattern").show();
	if (items.viewOptions.outputParamBlock) $("#win-corner").show();
	if (items.viewOptions.outputCornerBlockEnable) $(".paramblockMisc").show();
	
	$("#aboutcompany").html(items.company.about);
	
	$("span.items-company-page-nav-desctiption").text(items.company.pageNavDescription);
	$("span.items-company-copyright").html(items.company.copyright);
	$("span.items-company-mail").text(items.company.mail);
	$("span.items-company-phone").text(items.company.phone);
	$("head > title").text(items.company.pageTitle);
	$("a.navbar-brand").text(items.company.pageNavTitle);
	
});




//
// Функция расчета стоимости окон и прочих товаров/услуг
//

var evalPrices = function() {
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Глобальные переменные
	// items - база данных из файла params.js
	// calc.sizes - размеры окна в миллиметрах (исходные данные)
	// calc.items - все параметры, которые ввел пользователь в калькулятор (исходные данные)
	// calc.prices - текущие цены по разным позициям (выходные данные)
	// Основные исходные данные:
	// calc.items.profile - номер профиля
	// calc.items.glass - номер стеклопакета
	// calc.items.subtype - номер типа окна
	// calc.items.furn - номер фурнитуры
	//
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Константы
	// 
	
	var skidka = 0.1;
	var rise = 0.0;
	
	// Разрешить вычисление коэффициентов "тепло, тишина, дизайн"
	var koefsEnable = false;
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Рабочие переменные
	//
	
	var podok = 0; // Цена подоконника
	var scarp = 0; // Цена отлива
	var outflow = 0; // Цена откоса
	var otdelka = 0; // Цена отделки (подоконник + отлив + откос)
	var lamination = 0; // Цена ламинации (делается после расчета цены окна)
	var deinstallation = 0; // Цена демонтажа
	var installation = 0; // Цена монтажа
	var delivery = 0; // Цена доставки
	var price = 0; // Цена окна
	
	var 
		prof = calc.items.profile,
		height = calc.sizes.height, 
		width = calc.sizes.width,
		w = width / 1000, 
		h = height / 1000,
		koefs = {};
	
	if (calcData[calc.items.profile]) {
		var pd = calcData[prof].wsubtypes[calc.items.subtype];	
	}
	
	if (koefsEnable) {
		// Коэффициенты "тепло, тишина, дизайн"
		koefs = { 
			h: items.profiles[prof].koef.h, 
			s: items.profiles[prof].koef.s, 
			d: items.profiles[prof].koef.d
		};
	}


	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет демонтажа
	//
	
	deinstallation = 0;
	if (calc.items.deinstallation) deinstallation = calc.items.deinstallation.params.price;
		
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет монтажа
	//
	
	installation = 0;
	if (calc.items.installation) installation = w * h * calc.items.installation.params.price;
	if (installation < 1500) installation = 1500;
		
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет цены подоконника
	// Если подоконник выбран, то calc.items.sill == true
	// calc.items.sill.length - содержит длину подоконника, которую ввел пользователь
	// calc.items.sill.params - содержит параметры выбранного подоконника из базы данных (params.js - items.sills)
	//
	
	podok = 0;
	if (calc.items.sill) podok = (calc.items.sill.length / 1000) * calc.items.sill.params.price;
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет цены отлива
	// Если подоконник выбран, то calc.items.scarp == true
	// calc.items.scarp.length - содержит длину отлива, которую ввел пользователь
	// calc.items.scarp.params - содержит параметры выбранного отлива из базы данных (params.js - items.scarps)
	//
	
	scarp = 0;
	if (calc.items.scarp) scarp = (calc.items.scarp.length / 1000) * calc.items.scarp.params.price;
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет цены откоса
	// Если подоконник выбран, то calc.items.outflow == true
	// calc.items.outflow.length - содержит длину откоса, которую ввел пользователь
	// calc.items.outflow.params - содержит параметры выбранного откоса из базы данных (params.js - items.outflows)
	//
	
	outflow = 0;
	if (calc.items.outflow) outflow = (calc.items.outflow.length / 1000) * calc.items.outflow.params.price;
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет цены отделки (подоконник + отлив + откос)
	//
	
	otdelka = Math.round(outflow + podok + scarp);

	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Подгоняем коэффициенты "Тепло, тишина, дизайн"
	//
	
	if (koefsEnable) {
		koefs.h=koefs.h + 0.05; // Тепло
		koefs.h=(koefs.h*1.35)*koefs.h-0.1;
		koefs.h=koefs.h-(w*h)*0.1;
		koefs.s=((100-koefs.s)/100)*0.8;	// Тишина 
		if (koefs.h > 1) koefs.h = 1;
		if (koefs.s > 1) koefs.s = 1;
	}

	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет стоимости окна
	//
	
	if (calcData[calc.items.profile]) {
		// Cтарый способ расчета
		if (height in pd) {
			if (width%150 == 0) {
				koef = Math.floor((width-pd[height][0])/150)+1;
				price = pd[height][koef];
			} else {
				koef = Math.ceil((width-pd[height][0])/150);
				price = interpol(pd[height][koef],pd[height][koef+1],width);
			}
		} else {
			hlvec = pd[height-height%150]; hmvec = pd[height-height%150+150];
			wkoef = Math.floor((width-limits.wmin)/150)+1;
			if (width%150 == 0)
				price = interpol(hlvec[wkoef],hmvec[wkoef],height);
			else {
				wp1 = interpol(hlvec[wkoef],hmvec[wkoef],height);
				wp2 = interpol(hlvec[wkoef+1],hmvec[wkoef+1],height);
				price = interpol(wp1,wp2,width);
			}
		}
	} else {
		// Новый способ расчета
		var type_okna = calc.items.subtype;
		
		var selectPoints = {
			// Список типов окон для которых выбирается - расчет при помощи кусочно-квадратичной интерполяции по трем точкам
			a2: {
				lamination01: [
					// [площадь окна, цена в евро]
					[(calcData.a2.priceMin.width*calcData.a2.priceMin.height)/1000000, calcData.a2.priceMin.price],
					[2, 670],
					[(calcData.a2.priceMax.width*calcData.a2.priceMax.height)/1000000, calcData.a2.priceMax.price]
				],
				other: [
					// [площадь окна, цена в евро]
					[(calcData.a2.priceMin.width*calcData.a2.priceMin.height)/1000000, calcData.a2.priceMin.price],
					[2, 712],
					[(calcData.a2.priceMax.width*calcData.a2.priceMax.height)/1000000, calcData.a2.priceMax.price]
				]
			},
			
			a4: {
				lamination01: [
					// [площадь окна, цена в евро]
					[(calcData.a4.priceMin.width*calcData.a4.priceMin.height)/1000000, calcData.a4.priceMin.price],
					[2, 678],
					[(calcData.a4.priceMax.width*calcData.a4.priceMax.height)/1000000, calcData.a4.priceMax.price]
				],
				other: [
					// [площадь окна, цена в евро]
					[(calcData.a4.priceMin.width*calcData.a4.priceMin.height)/1000000, calcData.a4.priceMin.price],
					[2, 720],
					[(calcData.a4.priceMax.width*calcData.a4.priceMax.height)/1000000, calcData.a4.priceMax.price]
				]
			}
			
		};
		
		if (type_okna in selectPoints) {
			
			// Расчет при помощи кусочно-квадратичной интерполяции по трем точкам
			
			if (calc.items.lamination.id in selectPoints[type_okna]) {
				var points = selectPoints[type_okna][calc.items.lamination.id];
			} else {
				var points = selectPoints[type_okna]["other"];
			}
		
			var x = (width * height)/1000000; // площадь окна
			
			price = interpol2(x, points) * kursEuroRub;
			
			
			// DEBUG - вывод графика интерполяции 
			// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
			
				/*var from = 0.1;
				var to = 4;
				var graph = [];
				for (var i = from; i <= to;) {
					i += 0.01;
					graph.push([i, interpol2(i, points)]);
				}
				
				$.plot("#placeholder", [graph]);*/
				
			// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
			// / DEBUG
			
		} else {
			
			// Расчет по линейной зависимости
			
			var width_1 = calcData[type_okna].priceMin.width;
			var height_1 = calcData[type_okna].priceMin.height;
			var price_1 = calcData[type_okna].priceMin.price * kursEuroRub;
			
			var width_2 = calcData[type_okna].priceMax.width;
			var height_2 = calcData[type_okna].priceMax.height;
			var price_2 = calcData[type_okna].priceMax.price * kursEuroRub;
			
			var x = width * height;
			var x1 = width_1 * height_1
			var y1 = price_1
			var x2 = width_2 * height_2
			var y2 = price_2
			
			var a = y1 - y2;
			var b = x2 - x1;
			var c = x1 * y2 - x2 * y1;
			price = -(a * x + c) / b;
		}
		

	}
	

	

	
	
	
	/*
	
		// И-стекло
		
		if (/\d\di/.test(calc.items.glass)) {
			price += 100 * w * h;
			koefs.h += 0.1;
		}
	
	*/

	
	// Поправки
	//price *=0.892433;
	
	//Поправочный коэффициент разработчика
	//price *=0.9;
	
	/*price *= {	
		"REHAU SIB DESIGN": 1,
		"REHAU BRILLANT": 1.68578019,
		"REHAU GENEO": 2.351831587,
		"KBE EXPERT 70": 1.090208974,
		"REHAU BLITZ": 0.935754345,
		"KBE ETALON": 0.988272566,
		"REACHMOND ECO": 0.763975997,
		"NOVOTEX": 0.791329237
	}[prof];
	*/

//Фурнитура
/*
	switch (calc.items.furn) {
	  case "ROTO":
	   price*=1;
	   break;

	  case "VORNE":
	   price*=0.889633409;
	   break;
	   
	 }
*/	

//СП	
	switch (calc.items.glass) {
	  case "spd":
	   price*=1;
		koefs.h+=0.00;
		koefs.s+=0.00;
		break;
	
	}
/*	
	//if (prof == "REHAU SIB DESIGN") 
	price *= {
		a1: 1.24123832,
		a2: 1.00000000,
		a3: 1.03847718,
		a4: 0.98823781,
		b1: 0.79296962,
		b2: 1.03389424,
		b3: 1.00000000,
		b4: 1.02609744,
		c1: 1.00000000,
		c2: 1.00000000,
		c3: 1.00000000,
		c4: 1.00000000,
		c5: 1.00000000,
		c6: 1.00000000,
		c7: 1.00000000,
		d1: 1.00000000,
		d2: 1.00000000
	}[calc.items.subtype];
	

*/	  
	  
/*
	
	if (prof=='KBE Expert' || prof=='KBE Etalon' || prof=='KBE Engine') 
	  {
 	    if (calc.items.subtype=='b1' || calc.items.subtype=='b2') {price=price*0.95;}
		if (calc.items.subtype=='b3' || calc.items.subtype=='b4') {price=price*0.90;}
		if (calc.items.subtype=='d1' || calc.items.subtype=='d2') {price=price*0.95;}
	  }
*/

	
    //if (prof=='rehau-euro' && /d(32|40)*/.test(calc.items.glass))
	/*{
		price*=1.1;
		koefs.h+= 0.1;
		koefs.s+=0.1;
		koefs.d+=0.1;
	}*/
									// Выбор коэффициента цены в зависимости от разных типов окон
/*	var furn = $("#win-furn").val(), hiddenMKoef = {pov:1780,potk:1650};
	switch (furn)
	{
		case 'hidden':
			var conf = items.subtypes[calc.items.subtype].config;
			price += (conf.pov*hiddenMKoef.pov+conf.potk*hiddenMKoef.potk);
			break;
		case 'prot':
			switch (calc.items.subtype[0])
			{
				case 'a':
				case 'd':
					if (!(calc.items.subtype=='a1' || calc.items.subtype=='a2')) price*=1.05;
					break;
				case 'b':
					price*=1.086;
					break;
				case 'c':
					price*=1.095;
					break;
			}
			koefs.h+=0.05;
			koefs.d+=0.05;
			break;
	}*/
	
	
//	price = Math.ceil(price * (1 - skidka + rise));

//console.log(price);	

	// Расчет цены ламинации
	// Расчет делает после расчета цены окна (переменная price)
	lamination = 0;
	if (calc.items.lamination) lamination = price * calc.items.lamination.params.price;
	price += lamination;
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет кредита (руб/мес)
	//
	
	credit = Math.round(price / 6);
	
	// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 
	// Расчет цены доставки
	//
	
	delivery = 0;
	if (calc.items.delivery) {
		switch (calc.items.delivery.id) {
			case "moscow":
				delivery = calc.items.delivery.params.price;
				break;
			case "mo":
				// Цена за доставку по Москве складывается с...
				delivery = items.deliveries["moscow"].price;
				// ...с ценой за километры
				delivery += calc.items.delivery.params.price * calc.items.delivery.destination;
				break;
		}
	}
	
	
		
	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
	// Далее следует блок, который редактировать не стоит, 
	// так как он к самим вычислениям цены не имеет отношения
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
	
	/*
		intv - интервал изменения значений, в миллисекундах
		msecs - количество миллисекунд, в течение которых происходит изменение
		ticks - количество "тиков" таймера (количество изменений цен)
		deltas - значения, на которые должны измениться цены
		currents - текущие значения цен
	 */
	 
	var timer = null, intv = 25, msecs = 750, ticks = msecs / intv, totalTicks = ticks,
		currents = { m: calc.prices.installation, o: calc.prices.otdelka, p: calc.prices.total, cr: calc.prices.credit },
		deltas = { m: (installation-currents.m)/ticks, o: (otdelka-currents.o)/ticks, p: (price-currents.p)/ticks, cr: (credit-currents.cr)/ticks};
	timer = setInterval(function() {
		if (ticks<=0) clearInterval(timer);
		tickKoef = totalTicks - ticks;
		$("#calc #calc-prices")
			.find("#montazh-price").html(formatNum(Math.round(currents.m+tickKoef*deltas.m))).end()
			.find("#otdelka-price").html(formatNum(Math.round(currents.o+tickKoef*deltas.o))).end()
			.find("#price-sum").html(formatNum(Math.round(currents.p+tickKoef*deltas.p))).end()
			.find("#credit-sum .sum").html(formatNum(Math.round(currents.cr+tickKoef*deltas.cr)));
		ticks--;
	}, intv);
	
	//
	// Обновление текущих цен по разным позициям
	// Эти данные используются дальше, например при обновлении таблицы с коммерческим
	calc.prices.sill = podok; // Подоконник
	calc.prices.scarp = scarp; // Отлив
	calc.prices.outflow = outflow; // Откос
	calc.prices.otdelka = otdelka; // Отделка
	calc.prices.lamination = lamination; // Ламинация
	calc.prices.deinstallation = deinstallation; // Демонтаж
	calc.prices.installation = installation; // Монтаж
	calc.prices.delivery = delivery; // Доставка
	calc.prices.total = price; // Цена за окно
	calc.prices.credit = credit; // Расчет кредита (руб/мес)
	
	
	//setCookie("price", calc.prices.total);

	area = $("#stats .stat").filter(':first').width() - 60;
	if (koefsEnable) $("#stats")
		.find("#heat").width(50+area*koefs.h).end()
		.find("#silence").width(50+area*koefs.s).end()
		.find("#design").width(50+area*koefs.d);

	//
	// Обновить таблицу с ценами коммерческого предложения
	// Цены берутся из глобальной переменной calc.prices
	refreshOfferTable();
	
};







/* global items */

// Локальные настройки калькулятора

$.extend(true, items, {
	
	// Пути к картинкам
	
	paths: {
		wtypes: "demoversion/images/wtypes",
		wtypeicons: "demoversion/images/wtypes/icon"
	},
	
	// Данные о компании
	
	company: {
		name: "Оконная компания «Окна»",
		pageTitle: "Калькулятор расчета стоимости оконных изделий",
		pageNavTitle: "Калькулятор окон от компании «Окна»",
		pageNavDescription: "Москва и Московская область",
		phone: "+7 (495) 111-11-11",
		mail: "info@ognimoskvy.ru",
		copyright: "&copy; Оконный калькулятор «Окна», 2015 г.",
		about: "Текст о компании<br>\
		Текст о компании<br>\
		Текст о компании"
	},
	
	// Настройка слайдера по высоте
	
	sliderHeightLimit: { // @param boolean(false) | Object
		value: 3500,
		onSliderStop: function(selectedHeight, calcHeightMax) {
			// Скрыть/показать блок в коммерческом о спеццене
			if (selectedHeight >= calcHeightMax && selectedHeight <= this.value) {
				$("#calcOk1TabItemOut .price-tire").show();
				$("#calcOk1TabItemOut .price").hide();
				$("#calcOk1TabItemOut .total").hide();
				$("#calcOk1TabItemOut .heightlimit").show();
			} else {
				$("#calcOk1TabItemOut .price-tire").hide();
				$("#calcOk1TabItemOut .price").show();
				$("#calcOk1TabItemOut .total").show();
				$("#calcOk1TabItemOut .heightlimit").hide();
			}
		}
	},
	
	// Обработчик события Изменение типа окна
	
	onWindowTypeChange: function(type) {
		// Для глухого окна скрываем фурнитуру
		if (type == "a1") {
			$("#calcOk1TabItemOut .furnitura").hide();
			$(".kp-win-furniture-line").hide();
			$(".win-furn-selectblock").hide();
		} else {
			$("#calcOk1TabItemOut .furnitura").show();
			$(".kp-win-furniture-line").show();
			$(".win-furn-selectblock").show();
		}
	},
	
	// Визуальные настройки калькулятора
	
	viewOptions: {
		outputPriceBlockEnable: true,
		outputCreditBlockEnable: true,
		outputStatsBlockEnable: true,
		outputOfferBlockEnable: true,
		outputParamBlock: true,
		outputCornerBlockEnable: true,
		outputGlassPatternBlockEnable: true
	},
		
	// Переименование параметра Ламинация
	
	//renameLamination: "Покраска",
	//renameWindowType: "Тип деревянного окна",
		
	// Ценовая политика (режимы калькулятора)
	
	pricePolicyEnable: false,
	
	// Настройки коммерческого
	
	commercialOffer: {
		// Тексты в формате HTML
		text: {
			before: '\
				<img src="./data/demoversion/images/logotypegs.jpeg" width="100px;" align="right"/> \
				<div class="CommercialOfferTitle">Коммерческое предложение</div> \
				<p>Уважаемый Заказчик, мы рады предложить Вам программный продукт, \
				который позволит Вам определить стоимость окон в реальном времени. \
				Для расчета цены окна Вам необходимо определить: размеры оконного проема и типы открывания створок.</p> \
			',
			after: '\
				<p class="heightlimit"><b>Внимание!</b> Для уточнения стоимости выбранного размера изделия необходимо \
				обратиться к специалисту компании или инженеру мобильного офиса по телефону +7 (495) 111-11-11.</p> \
				\
				<p><b>Внимание!</b></p> \
				\
				<p>Стоимость окна определена в рублях, по курсу ЦБ РФ на момент подготовки расчёта.</p> \
				\
				<p>Срок действия предложения: 10 рабочих дней.</p> \
				\
				<p style="font-size: 80%;">Обращаем Ваше внимание на то, что данный расчет носит  \
				исключительно информационный характер и ни при каких условиях не является публичной  \
				офертой, определяемой положениями ч. 2 ст. 437 Гражданского кодекса Российской Федерации.</p> \
				\
				<p style="font-size: 80%;">Для получения подробной информации о стоимости  \
				и сроках выполнения услуг, пожалуйста, обращайтесь к специалисту компании  \
				или пригласите инженера мобильного офиса на замер по телефону <b>+7 (495) 111-11-11 или почте info@okna.ru.</b></p> \
			'
		}
	}
	
});


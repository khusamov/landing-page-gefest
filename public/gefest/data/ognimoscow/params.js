
// Локальные настройки калькулятора

$.extend(true, items, {
	
	// Пути к картинкам
	
	paths: {
		wtypes: "ognimoscow/images/wtypes",
		wtypeicons: "ognimoscow/images/wtypes/icons"
	},
	
	// Данные о компании
	
	company: {
		name: "Оконная компания «Огни Москвы»",
		pageTitle: "Калькулятор расчета стоимости оконных изделий",
		pageNavTitle: "Калькулятор окон от компании «Огни Москвы»",
		pageNavDescription: "Москва и Московская область",
		phone: "+7 (495) 255-03-02",
		mail: "info@ognimoskvy.ru",
		copyright: "&copy; Оконный калькулятор «Огни Москвы», 2015 г.",
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
		outputPriceBlockEnable: false,
		outputCreditBlockEnable: false,
		outputStatsBlockEnable: false,
		outputOfferBlockEnable: true,
		outputParamBlock: false,
		outputCornerBlockEnable: false,
		outputGlassPatternBlockEnable: false
	},
		
	// Переименование параметра Ламинация
	
	renameLamination: "Покраска",
	renameWindowType: "Тип деревянного окна",
		
	// Ценовая политика (режимы калькулятора)
	
	pricePolicyEnable: false,
	
	// Настройки коммерческого
	
	commercialOffer: {
		// Тексты в формате HTML
		text: {
			before: '\
				<img src="./data/ognimoscow/images/logotype.png" width="130px;" align="right"/> \
				<div class="CommercialOfferTitle">Предварительная стоимость конструкции</div> \
				<p>Уважаемый Заказчик, мы рады предложить Вам программный продукт, \
				который позволит Вам определить стоимость деревянных окон в реальном времени. \
				Для расчета цены окна Вам необходимо определить: размеры оконного проема, \
				используемый цвет и сорт древесины.</p> \
			',
			after: '\
				<p class="heightlimit"><b>Внимание!</b> Для уточнения стоимости выбранного размера изделия необходимо \
				обратиться к специалисту компании или инженеру мобильного офиса по телефону +7 (495) 255-03-02.</p> \
				\
				<p class="furnitura">Состав изделия: Оригинальная фурнитура, Roto Nt (Roto Frank AG (Германия)).</p> \
				\
				<p>Уплотнители на выбор: Devenver или Schlegel (Германия).</p> \
				\
				<p>Оригинальная окраска конструкций по выбранным образцам, Remmers (Германия).</p> \
				\
				<p><b>Внимание!</b></p> \
				\
				<p>Стоимость окна определена в рублях, по курсу ЦБ РФ на момент подготовки расчёта.</p> \
				\
				<p>Срок действия предложения: 10 рабочих дней.</p> \
				\
				<p style="font-size: 85%;">Обращаем Ваше внимание на то, что данный расчет носит  \
				исключительно информационный характер и ни при каких условиях не является публичной  \
				офертой, определяемой положениями ч. 2 ст. 437 Гражданского кодекса Российской Федерации.</p> \
				\
				<p style="font-size: 85%;">Для получения подробной информации о стоимости  \
				и сроках выполнения услуг, пожалуйста, обращайтесь к специалисту компании  \
				или пригласите инженера мобильного офиса на замер по телефону +7 (495) 255-03-02.</p> \
				\
				<p>info@ognimoskvy.ru<br/> \
				Тел./Факс +7 495 255 03 02</p> \
			'
		}
	}
	
});


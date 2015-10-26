
var items = {};
var calcData = {};
var kursEuroRub = 58; // Курс евро

// Настройки калькулятора

$.extend(true, items, {
	
	// Данные о компании
	
	company: {
		name: "",
		pageTitle: "Калькулятор расчета стоимости оконных изделий",
		pageNavTitle: "Калькулятор окон",
		pageNavDescription: "Москва и Московская область",
		phone: "+7 (495) 123-45-67",
		mail: "mail@mail.ru",
		copyright: "&copy; 2014"
	},
	
	// Настройка слайдера по высоте
	
	sliderHeightLimit: { // @param boolean(false) | Object
		value: 3500,
		text: "К сожалению, рассчитать стоимость такого окна сейчас не получиться. Пожалуйста, перезвоните в наш офис!",
		onSliderStop: function(selectedHeight, calcHeightMax) {
			if (selectedHeight >= calcHeightMax && selectedHeight <= this.value) {
				vex.dialog.alert(this.text);
			}
		}
	},
	
	// Обработчик события Изменение типа окна
	
	onWindowTypeChange: function(type) {},
	
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
	//renameWindowType: "",
		
	// Ценовая политика (режимы калькулятора)
	
	pricePolicyEnable: true,
	
	pricePolicies: {
		economical: { name: "окна ЭКОНОМ класс" },
		premium: { name: "окна ПРЕМИУМ класс" }
	},
	
	// Настройки коммерческого
	
	commercialOffer: {
		// Тексты в формате HTML
		text: {
			before: "",
			after: ""
		}
	}
	
});


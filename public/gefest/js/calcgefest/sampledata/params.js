
// Локальные настройки калькулятора

$.extend(true, items, {
	
	// Пути к картинкам
	
	paths: {
		wtypes: "ognimoscow/images/wtypes",
		wtypeicons: "ognimoscow/images/wtypes/icons"
	},
	
	// Данные о компании
	
	company: {
		name: "ИП «Будаев К.»",
		pageTitle: "Калькулятор расчета стоимости оконных изделий",
		pageNavTitle: "Калькулятор окон",
		pageNavDescription: "Москва и Московская область",
		phone: "+7 (916) 665-11-55",
		mail: "okna-bez-problem@mail.ru",
		copyright: "&copy; 2014"
	},
	
	// Визуальные настройки калькулятора
	
	viewOptions: {
		outputPriceBlockEnable: false,
		outputCreditBlockEnable: false,
		outputStatsBlockEnable: false,
		outputOfferBlockEnable: true
	},
		
	// Ценовая политика (режимы калькулятора)
	
	pricePolicyEnable: true,
	
	pricePolicies: {
		economical: { name: "окна ЭКОНОМ класс" },
		premium: { name: "окна ПРЕМИУМ класс" }
	}
	
});



// Локальные настройки калькулятора

$.extend(true, items, {
	
	// Данные о компании
	
	company: {
		name: "",
		pageTitle: "Калькулятор расчета стоимости оконных изделий",
		pageNavTitle: "Калькулятор окон",
		pageNavDescription: "Москва и Московская область",
		phone: "+7 (495) 123-45-67",
		mail: "mail@mail.ru",
		copyright: "&copy; Оконный калькулятор, 2014 г."
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


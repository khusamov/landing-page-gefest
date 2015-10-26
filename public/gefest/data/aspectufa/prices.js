
// Прайс-листы калькулятора

$.extend(true, items, {
	
	// Типы окон
	subtypes: {
		a1: {name: "Глухое", pic: "a1.png", w: 289, h: 372, config: {pov: 0, potk: 0}}, 
		a2: {name: "Поворотное", pic: "a2.png", w: 289, h: 372, config: {pov: 0, potk: 0}}, 
		a3: {name: "Фрамужное", pic: "a3.png", w: 289, h: 372, config: {pov: 1, potk: 0}}, 
		a4: {name: "Поворотно-откидное", pic: "a4.png", w: 289, h: 372, config: {pov: 0, potk: 1}}, 
		
		b1: {name: "Глухое + поворотное", pic: "b1.png", w: 365, h: 372, config: {pov: 1, potk: 0}}, 
		b2: {name: "Глухое + поворотно-откидное", pic: "b2.png", w: 365, h: 372, config: {pov: 0, potk: 1}}, 
		b3: {name: "Поворотное + поворотное", pic: "b3.png", w: 365, h: 372, config: {pov: 2, potk: 0}}, 
		b4: {name: "Поворотное + поворотно-откидное", pic: "b4.png", w: 365, h: 372, config: {pov: 1, potk: 1}}, 
		b5: {name: "Поворотно-откидное + поворотно-откидное", pic: "b5.png", w: 365, h: 372, config: {pov: 1, potk: 1}}, 
		
		c1: {name: "Поворотное + глухое + поворотно-откидное", pic: "c1.png", w: 363, h: 326, config: {pov: 1, potk: 0}}, 
		c2: {name: "Поворотно-откидное + глухое + поворотно-откидное", pic: "c2.png", w: 363, h: 326, config: {pov: 0, potk: 1}}, 
		c3: {name: "Глухое + поворотно-откидное + глухое", pic: "c3.png", w: 363, h: 326, config: {pov: 2, potk: 0}}, 
		c4: {name: "Поворотно-откидное + поворотное + поворотно-откидное", pic: "c4.png", w: 363, h: 326, config: {pov: 1, potk: 1}} 
	},
	
	// Стеклопакеты
	glasses: {
		spd: {name: "Стеклопакет 36 мм (двухкамерный)", pic: "./images/steklopacket/32mm2k.png", pricePolicy: ["economical", "premium"] } 
	},
	
	// Профиль
	profiles: {
		
		"Tree 78 mm": {
			name: "Древесина сосна 78 мм", 
			koef: {h: 0.72, s: 32, d: 0.6}, 
			pattern: "./images/calc/profiles/rsi.jpg", 
			patternFull: "./images/calc/profiles/rsi2.jpg", 
			glasses: ["spd"], 
			pricePolicy: ["premium"]
		}
	},
	
	// Фурнитура
	furns: {
		"ROTO": { name: "Roto NT", pricePolicy: ["economical", "premium"] }
	},
	
	// Варианты ламинации
	// Переменная price содержит процент стоимости ламинации от цены окна (= от 0 до 1)
	laminations: {
		lamination01: { text: "1 цвет", price: 0 },
		lamination02: { text: "2 цвета", price: 0.088635215 }
	},
	
	// Подоконники
	// Здесь width - ширина в мм, price - цена метра длины в руб.
	sills: {
		sill01: { vendor: "МЁЛЛЕР (Германия)", width: 150, price: 450 },
		sill02: { vendor: "МЁЛЛЕР (Германия)", width: 200, price: 600 },
		sill03: { vendor: "МЁЛЛЕР (Германия)", width: 250, price: 750 },
		sill04: { vendor: "МЁЛЛЕР (Германия)", width: 300, price: 900 },
		sill05: { vendor: "МЁЛЛЕР (Германия)", width: 350, price: 1050 },
		sill06: { vendor: "МЁЛЛЕР (Германия)", width: 400, price: 1200 },
		sill07: { vendor: "МЁЛЛЕР (Германия)", width: 450, price: 1350 },
		sill08: { vendor: "МЁЛЛЕР (Германия)", width: 500, price: 1500 },
		sill09: { vendor: "МЁЛЛЕР (Германия)", width: 550, price: 1650 },
		sill10: { vendor: "МЁЛЛЕР (Германия)", width: 600, price: 1800 },
		
		sill11: { vendor: "ВИТРАЖ (Россия)", width: 150, price: 500 },
		sill12: { vendor: "ВИТРАЖ (Россия)", width: 200, price: 500 },
		sill13: { vendor: "ВИТРАЖ (Россия)", width: 250, price: 500 },
		sill14: { vendor: "ВИТРАЖ (Россия)", width: 300, price: 500 },
		sill15: { vendor: "ВИТРАЖ (Россия)", width: 350, price: 500 },
		sill16: { vendor: "ВИТРАЖ (Россия)", width: 400, price: 500 },
		sill17: { vendor: "ВИТРАЖ (Россия)", width: 450, price: 500 },
		sill18: { vendor: "ВИТРАЖ (Россия)", width: 500, price: 500 },
		sill19: { vendor: "ВИТРАЖ (Россия)", width: 550, price: 500 },
		sill20: { vendor: "ВИТРАЖ (Россия)", width: 600, price: 500 },		
	},
	
	// Отливы
	// Здесь width - ширина в мм, price - цена метра длины в руб.
	scarps: {
		scarp01: { vendor: "уличный", width: 150, price: 150 },
		scarp02: { vendor: "уличный", width: 200, price: 200 },
		scarp03: { vendor: "уличный", width: 250, price: 250 },
		scarp04: { vendor: "уличный", width: 300, price: 300 },
		scarp05: { vendor: "уличный", width: 350, price: 350 },
		scarp06: { vendor: "уличный", width: 400, price: 400 },
		scarp07: { vendor: "уличный", width: 450, price: 450 },
		scarp08: { vendor: "уличный", width: 500, price: 500 },
		scarp09: { vendor: "уличный", width: 550, price: 550 },
		scarp10: { vendor: "уличный", width: 600, price: 600 },		
	},
	
	// Откосы
	// Здесь width - ширина в мм, price - цена метра длины в руб.
	outflows: {
		outflow01: { vendor: "тёплый", width: 150, price: 450 },
		outflow02: { vendor: "тёплый", width: 200, price: 450 },
		outflow03: { vendor: "тёплый", width: 250, price: 450 },
		outflow04: { vendor: "тёплый", width: 300, price: 650 },
		outflow05: { vendor: "тёплый", width: 350, price: 650 },
		outflow06: { vendor: "тёплый", width: 400, price: 650 },
		outflow07: { vendor: "тёплый", width: 450, price: 650 },
		outflow08: { vendor: "тёплый", width: 500, price: 850 },
		outflow09: { vendor: "тёплый", width: 550, price: 850 },
		outflow10: { vendor: "тёплый", width: 600, price: 850 },
		
	},
	
	// Варианты услуг по демонтажу 
	deinstallations: {
		deinstallation01: { text: "Демонтаж старого окна", price: 200 }
	},
	
	// Варианты монтажа оконных изделий
	installations: {
		//installation01: { text: "ЭКОНОМ", price: 900 },
		installation02: { text: "ПРЕМИУМ по ГОСТ Р 52749-2007", price: 1000 }
	},
	
	// Варианты доставки
	// В таблице обязательно должен присутствовать элемент moscow, 
	// так как цена по области складывается из цены по Москве плюс за километры
	deliveries: {
		moscow: {
			text: "Доставка по Москве",
			price: 1200 // Цена доставки по Москве в пределах МКАД
		},
		mo: {
			text: "Доставка по Московской области",
			price: 30 // Цена доставки за один километр от МКАД
		}
	}

});



$.extend(true, calcData, {
	
	a1: {
		priceMin: { width: 350, height: 350, price: 78.07 },
		priceMax: { width: 1500, height: 2500, price: 760.64 }
	},
	
	a2: {
		priceMin: { width: 425, height: 475, price: 224.92 },
		priceMax: { width: 1500, height: 2700, price: 1015.93 }
	},

	a3: {
		priceMin: { width: 475, height: 475, price: 243.72 },
		priceMax: { width: 2500, height: 1000, price: 826.59 }
	},

	a4: {
		priceMin: { width: 425, height: 475, price: 244.36 },
		priceMax: { width: 1500, height: 2700, price: 1015.56 }
	},

	b1: {
		priceMin: { width: 900, height: 475, price:  331.29},
		priceMax: { width: 2800, height: 2700, price: 1724.9 }
	},

	b2: {
		priceMin: { width: 1100, height: 1100, price: 3557.45 },
		priceMax: { width: 1700, height: 1700, price: 5642.77 }
	},

	b3: {
		priceMin: { width: 900, height: 475, price: 450.58 },
		priceMax: { width: 2900, height: 2700, price: 1946.28 }
	},

	b4: {
		priceMin: { width: 900, height: 475, price: 470.02 },
		priceMax: { width: 2900, height: 2700, price: 1945.91 }
	},

	b5: {
		priceMin: { width: 900, height: 475, price: 489.54 },
		priceMax: { width: 2900, height: 2700, price: 1945.6 }
	},

	c1: {
		priceMin: { width: 1260, height: 475, price: 556 },
		priceMax: { width: 4500, height: 2700, price: 2775.78 }
	},

	c2: {
		priceMin: { width: 1260, height: 475, price: 577.38 },
		priceMax: { width: 4500, height: 2700, price: 2791.52 }
	},

	c3: {
		priceMin: { width: 1260, height: 475, price: 438.3 },
		priceMax: { width: 4500, height: 2700, price: 2645.75 }
	},

	c4: {
		priceMin: { width: 1260, height: 475, price: 679.27 },
		priceMax: { width: 4500, height: 2700, price: 2976.38 }
	}
	
	
});




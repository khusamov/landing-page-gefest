
/* global items */

// Прайс-листы калькулятора

$.extend(true, items, {
	
	// Типы окон
	subtypes: {
		a1: {name: "Глухое", pic: "a1.png", w: 289, h: 372, config: {pov: 0, potk: 0}}, 
		a2: {name: "Глухое в створку", pic: "a2.png", w: 289, h: 372, config: {pov: 0, potk: 0}}, 
		a3: {name: "Поворотное", pic: "a34.png", w: 289, h: 372, config: {pov: 1, potk: 0}}, 
		a4: {name: "Поворотно-откидное", pic: "a34.png", w: 289, h: 372, config: {pov: 0, potk: 1}}, 
		
		b1: {name: "Поворотное с глухой створкой", pic: "b12.png", w: 365, h: 372, config: {pov: 1, potk: 0}}, 
		b2: {name: "Поворотно-откидное с глухой створкой", pic: "b12.png", w: 365, h: 372, config: {pov: 0, potk: 1}}, 
		b3: {name: "Двухстворчатое поворотное", pic: "b34.png", w: 365, h: 372, config: {pov: 2, potk: 0}}, 
		b4: {name: "Поворотное с поворотно-откидной створкой", pic: "b34.png", w: 365, h: 372, config: {pov: 1, potk: 1}}, 
		
		c1: {name: "Поворотное с двумя глухими створками", pic: "c12.png", w: 363, h: 326, config: {pov: 1, potk: 0}}, 
		c2: {name: "Поворотно-откидное с двумя глухими створками", pic: "c12.png", w: 363, h: 326, config: {pov: 0, potk: 1}}, 
		c3: {name: "Поворотное с глухой створкой", pic: "c34.png", w: 363, h: 326, config: {pov: 2, potk: 0}}, 
		c4: {name: "Поворотное с глухой и поворотно-откидной створкой", pic: "c34.png", w: 363, h: 326, config: {pov: 1, potk: 1}}, 
		c5: {name: "Трехстворчатое поворотное", pic: "c567.png", w: 363, h: 326, config: {pov: 3, potk: 0}}, 
		c6: {name: "Две поворотных с поворотно-откидной створкой", pic: "c567.png", w: 363, h: 326, config: {pov: 2, potk: 1}}, 
		c7: {name: "Поворотное с двумя поворотно-откидными створками", pic: "c567.png", w: 363, h: 326, config: {pov: 1, potk: 2}}, 
		
		d1: {name: "Балконная дверь", pic: "d12.png", w: 184, h: 371, config: {pov: 1, potk: 0}}, 
		d2: {name: "Балконная дверь поворотно-откидная", pic: "d12.png", w: 184, h: 371, config: {pov: 0, potk: 1}}
	},
	/*
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
	},*/
	
	// Стеклопакеты
	
	glasses: {
		spd: {name: "Стеклопакет 3 стекла (двухкамерный)", pic: "./images/steklopacket/32mm2k.png", pricePolicy: ["economical", "premium"] }, 
		tpd: {name: "Теплопакет 3 стекла (двухкамерный с энергостеклом)", pic: "./images/steklopacket/32mm2k-i.png", pricePolicy: ["premium"] }, 
		spo: {name: "Стеклопакет 2 стекла (однокамерный)", pic: "./images/steklopacket/32mm1k.png", pricePolicy: ["economical"] }
	},
	/*
	glasses: {
		spd: {name: "Стеклопакет 36 мм (двухкамерный)", pic: "./images/steklopacket/32mm2k.png", pricePolicy: ["economical", "premium"] } 
	},
	*/
	
	// Профиль
	profiles: {

"REHAU SIB DESIGN": {
			name: "REHAU SIB DESIGN", 
			koef: {h: 0.72, s: 32, d: 0.6}, 
			pattern: "./images/calc/profiles/rsi.jpg", 
			patternFull: "./images/calc/profiles/rsi2.jpg", 
			glasses: ["spd", "tpd"], 
			pricePolicy: ["premium"]
		}, 

		"REHAU BRILLANT": {
			name: "REHAU BRILLANT", 
			koef: {h: 0.79, s: 24, d: 1}, 
			pattern: "./images/calc/profiles/rbr.jpg", 
			patternFull: "./images/calc/profiles/rbr2.jpg", 
			glasses: ["spd", "tpd"], 
			pricePolicy: ["premium"]
		}, 

		"REHAU GENEO": {
			name: "REHAU GENEO", 
			koef: {h: 0.85, s: 32, d: 0.8}, 
			pattern: "./images/calc/profiles/rge.jpg",
			patternFull: "./images/calc/profiles/rge2.jpg", 
			glasses: ["spd", "tpd"], 
			pricePolicy: ["premium"]
		}, 

		"KBE EXPERT 70": {
			name: "KBE EXPERT 70", 
			koef: {h: 0.76, s: 45, d: 0.6}, 
			pattern: "./images/calc/profiles/kex.jpg", 
			patternFull: "./images/calc/profiles/kex2.jpg", 
			glasses: ["spd", "tpd"], 
			pricePolicy: ["premium"]
		}, 
		
		"REHAU BLITZ": {
			name: "REHAU BLITZ", 
			koef: {h: 0.64, s: 32, d: 0.6}, 
			pattern: "./images/calc/profiles/rbl.jpg", 
			patternFull: "./images/calc/profiles/rbl2.jpg", 
			glasses: ["spd", "spo"], 
			pricePolicy: ["economical"]
		}, 

		"KBE ETALON": {
			name: "KBE ETALON", 
			koef: {h: 0.71, s: 42, d: 0.6}, 
			pattern: "./images/calc/profiles/ket.jpg", 
			patternFull: "./images/calc/profiles/ket2.jpg", 
			glasses: ["spd", "spo"], 
			pricePolicy: ["economical"]
		}, 

   	"REACHMOND ECO": {
			name: "REACHMOND ECO", 
			koef: {h: 0.64, s: 32, d: 0.6}, 
			pattern: "./images/calc/profiles/rde.jpg",
			patternFull: "./images/calc/profiles/rde2.jpg", 
			glasses: ["spd", "spo"], 
			pricePolicy: ["economical"]
		}, 

		"NOVOTEX": {
			name: "NOVOTEX", 
			koef: {h: 0.64, s: 32, d: 0.6}, 
			pattern: "./images/calc/profiles/res.jpg", 
			patternFull: "./images/calc/profiles/res2.jpg", 
			glasses: ["spd", "spo"], 
			pricePolicy: ["economical"]
		}		

/*		"Tree 78 mm": {
			name: "Древесина сосна 78 мм", 
			koef: {h: 0.72, s: 32, d: 0.6}, 
			pattern: "./images/calc/profiles/rsi.jpg", 
			patternFull: "./images/calc/profiles/rsi2.jpg", 
			glasses: ["spd"], 
			pricePolicy: ["premium"]
		}
*/		
	},
	
	// Фурнитура
	furns: {
		"ROTO": { name: "Roto NT", pricePolicy: ["economical", "premium"] }
	},
	
	// Варианты ламинации
	// Переменная price содержит процент стоимости ламинации от цены окна (= от 0 до 1)
	laminations: {
		
		lamination01: { text: "Без ламинации", price: 0 },
		lamination02: { text: "Ламинация пленкой под дерево с одной стороны", price: 0.15 },
		lamination03: { text: "Ламинация пленкой под дерево с двух сторон", price: 0.25 }

/*		lamination01: { text: "Односторонняя", price: 0 },
		lamination02: { text: "Двусторонняя", price: 0.088635215 }
		*/
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
		priceMin: { width: 900, height: 475, price: 348.83 },
		priceMax: { width: 2800, height: 2700, price: 1724.52 }
	},

	b3: {
		priceMin: { width: 900, height: 475, price: 450.58 },
		priceMax: { width: 2900, height: 2700, price: 1946.28 }
	},

	b4: {
		priceMin: { width: 900, height: 475, price: 470.02 },
		priceMax: { width: 2900, height: 2700, price: 1945.91 }
	},

/*	b5: {
		priceMin: { width: 900, height: 475, price: 489.54 },
		priceMax: { width: 2900, height: 2700, price: 1945.6 }
	},*/

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
	},

	c5: {
		priceMin: { width: 1260, height: 475, price: 577.38 },
		priceMax: { width: 4500, height: 2700, price: 2791.52 }
	},

	c6: {
		priceMin: { width: 1260, height: 475, price: 438.3 },
		priceMax: { width: 4500, height: 2700, price: 2645.75 }
	},

	c7: {
		priceMin: { width: 1260, height: 475, price: 679.27 },
		priceMax: { width: 4500, height: 2700, price: 2976.38 }
	},
	
	d1: {
		priceMin: { width: 1260, height: 475, price: 438.3 },
		priceMax: { width: 4500, height: 2700, price: 2645.75 }
	},

	d2: {
		priceMin: { width: 1260, height: 475, price: 679.27 },
		priceMax: { width: 4500, height: 2700, price: 2976.38 }
	}	
	
	
	
});




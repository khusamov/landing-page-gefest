
"use strict";

let express = require("express");

let app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("public"));
app.use("vendor", express.static("bower_components"));

let menu = [{
	text: "Начало",
	href: "#"
}, {
	text: "Продолжение",
	href: "#"
}, {
	text: "Конец",
	href: "#",
	menu: [{
		text: "Пункт 1",
		href: "#"
	}, {
		text: "Пункт 2",
		href: "#"
	}]
}];

app.get("/", function(request, response) {
	response.render("index", {
		title: "Оконный калькулятор",
		menu: menu
	});
});

let server = app.listen(8080, function() {
	console.log("Сайт запущен.");
});

"use strict";

let express = require("express");

let app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("public"));
app.use("/vendor", express.static("bower_components"));



let menu = [{
	text: "Начало",
	href: "#begin"
}, {
	text: "Назначение",
	href: "#offer"
}, {
	text: "Функции",
	href: "#offer"
}, {
	text: "Особенность",
	href: "#offer"
}, {
	text: "Схема покупки",
	href: "#offer"
}, {
	text: "Совместимость",
	href: "#offer"
}, {
	text: "Контакты",
	href: "#",
}];

app.get("/", function(request, response) {
	response.render("index", {
		title: "Оконный калькулятор",
		menu: menu
	});
});


app.use(function(error, request, response, next) {
	console.error(error.stack);
	response.status(500).send(`<pre>${error.stack}</pre>`);
});



let server = app.listen(8080, function() {
	console.log("Сайт запущен.");
});
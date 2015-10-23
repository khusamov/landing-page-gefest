
"use strict";

let express = require("express");

let app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("public"));
app.use("/vendor", express.static("bower_components"));



let menu = [{
	text: "Назначение",
	href: "#goal"
}, {
	text: "Функции",
	href: "#features"
}, {
	text: "Особенности",
	href: "#offer"
}, {
	text: "Взаимодействие",
	href: "#compatible"
}, {
	text: "Схема покупки",
	href: "#scheme"
}, {
	text: "Контакты",
	href: "#contacts",
}];

app.get("/", function(request, response) {
	response.render("index", {
		title: "Оконный калькулятор",
		menu: menu
	});
});

app.get("/sendmail/", function(request, response) {
	
	let from = request.query.from;
	let mailer = require("nodemailer");
	
	/*let transporter = mailer.createTransport({
		host: "smtp.yandex.ru",
		port: 465,
		secure: true,
		auth: {
			user: "khusamov",
			pass: "renepjdbbalrasck"
		}
	});*/
	
	let transporter = mailer.createTransport({
		service: "gmail",
		auth: {
			user: "khusamov@gmail.com",
			pass: "renepjdbbalrasck"
		}
	});
	
	let mail = {
		from: "khusamov@gmail.com",
		to: "khusamov@yandex.ru",
		subject: "Заказ калькулятора",
		text: "Test"
	};
	if (from) mail.replyto = from;
	
	
	console.log("Начало отправки письма:", mail);
	transporter.sendMail(mail, function(error, info) {
		let result = {};
		if (error) {
			result.message = "Возникла ошибка при отправке письма.";
			result.success = false;
			result.error = error;
			console.error(result.message, mail, error);
		} else {
			result.message = "Письмо успешно отправлено.";
			result.success = true;
			result.info = info;
			console.log(result.message, mail, info);
		}
		response.send(result);
	});
	

});


app.use(function(error, request, response, next) {
	console.error(error.stack);
	response.status(500).send(`<pre>${error.stack}</pre>`);
});


// Запуск программы


let commander = require("commander");

commander.option("-l, --listen", "Запуск веб-сервера.").parse(process.argv);

if (commander.listen) {
	app.listen(8080, function() {
		console.log("Сайт запущен.");
	});
} else {
	module.exports = app;
}


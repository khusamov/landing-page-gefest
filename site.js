
"use strict";

let express = require("express");
let formidable = require("formidable");

let app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));
app.use("/vendor", express.static(__dirname + "/bower_components"));

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

app.post("/sendmail/", function(request, response) {
	let mailer = require("nodemailer");
	let form = new formidable.IncomingForm();
	form.parse(request, function(error, fields) {
		
		let from = fields.email;
		let phone = fields.phone;
		let name = fields.name;
		
		let transporter = mailer.createTransport({
			service: "gmail",
			auth: {
				user: "khusamov@gmail.com",
				pass: "renepjdbbalrasck"
			}
		});
		
		let text = [];
		
		text.push(`Заявка на калькулятор Гефест.`);
		text.push(`Почта: ${from}`);
		text.push(`Телефон: ${phone}`);
		text.push(`Имя: ${name}`);
		text.push(`http://кальк.рф/`);
		
		let mail = {
			from: "khusamov@gmail.com",
			to: "khusamov@yandex.ru",
			cc: "89296083361@mail.ru",
			subject: "Заказ калькулятора Гефест",
			text: text.join("\n")
		};
		if (from) mail.replyto = from;
		
		transporter.sendMail(mail, function(error, info) {
			let result = {};
			if (error) {
				result.message = "Возникла ошибка при отправке письма.";
				result.success = false;
				result.error = error;
			} else {
				result.message = "Письмо успешно отправлено.";
				result.success = true;
				result.info = info;
			}
			response.send(result);
		});
		
	});
});


app.use(function(error, request, response, next) {
	console.error(error.stack);
	response.status(500).send(`<pre>${error.stack}</pre>`);
});


// Запуск программы


let commander = require("commander");

commander
	.option("-l, --listen", "Запуск веб-сервера.")
	.option("-p, --port [number]", "Номер порта.", 8080)
	.parse(process.argv);

if (commander.listen) {
	app.listen(commander.port, function() {
		console.log("Сайт запущен.");
	});
} else {
	module.exports = app;
}


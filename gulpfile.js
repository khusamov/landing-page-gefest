
"use strict";

let gulp = require("gulp");

let concat = require("gulp-concat");
let concatCss = require("gulp-concat-css");
let git = require("gulp-git");
let postcss = require("gulp-postcss");
//let postcssUrl = require("postcss-url");
let copyAssets = require('postcss-copy-assets');
let assetsRebase = require('postcss-assets-rebase');

/**
 * Путь сборки.
 */

let buildPath = "public/build";

/**
 * Задача по умолчанию.
 * Создать общие js и css.
 */

gulp.task("default", ["js", "css"]);

/**
 * Задача Создать Js.
 */

gulp.task("js", function () {
	
	let src = [
		"bower_components/simple-text-rotator/jquery.simple-text-rotator.min.js",
		"bower_components/jquery.scrollTo/jquery.scrollTo.min.js",
		"bower_components/photobox/photobox/jquery.photobox.js"
	];
	
	gulp.src(src)
		.pipe(concat("all.js"))
		.pipe(gulp.dest(buildPath));
});

/**
 * Задача Создать Css.
 */

gulp.task("css", function () {
	
	let src = [
		"bower_components/photobox/photobox/photobox.css",
		"bower_components/bootswatch/united/bootstrap.css"
	];
	
	// https://github.com/shutterstock/postcss-copy-assets/issues/4
	// https://github.com/devex-web-frontend/postcss-assets-rebase/issues/8
	// https://toster.ru/q/260416
	// https://github.com/postcss/postcss
	
	/*gulp.src(src)
		.pipe(postcss([assetsRebase({ keepStructure: true, relative: true, assetsPath: "assets" })], { to: "public/build/all.css" }))
		.pipe(concatCss("all.css"))
		.pipe(gulp.dest("public/build"));*/
		
	gulp.src(src)
		.pipe(postcss([copyAssets({ base: "public/build" })], { to: "public/build/css/all.css" }))
		.pipe(concatCss("all.css"))
		.pipe(gulp.dest("public/build/css"));
	
	// После прогона в all.css меняем строку ../../bootswatch/ на ../
	
});

/**
 * Задача Скачать демку калькулятора.
 */

gulp.task("gefest", function() {
	git.clone("https://khusamov@bitbucket.org/khusamov/calc.gefest.git", {
		args: "public/gefest"
	}, function(error) {
		let fs = require("fs-extra");
		fs.remove(__dirname + "/public/gefest/.git");
		fs.remove(__dirname + "/public/gefest/data/aspectufa");
		fs.remove(__dirname + "/public/gefest/data/default");
		fs.remove(__dirname + "/public/gefest/data/ognimoscow");
	});
});





"use strict";

let gulp = require("gulp");

let concat = require("gulp-concat");
let concatCss = require("gulp-concat-css");
let git = require("gulp-git");

gulp.task("gefest", function() {
	git.clone("https://khusamov@bitbucket.org/khusamov/calc.gefest.git", {
		args: "public/gefest"
	}, function(error) {
		require("fs-extra").remove(__dirname + "/public/gefest/.git");
	});
});

gulp.task("default", ["js", "css"]);

gulp.task("js", function () {
	
	let src = [
		"bower_components/simple-text-rotator/jquery.simple-text-rotator.min.js",
		"bower_components/photobox/photobox/jquery.photobox.js",
		"bower_components/jquery.scrollTo/jquery.scrollTo.min.js"
	];
	
	gulp.src(src)
		.pipe(concat("all.js"))
		.pipe(gulp.dest("public"));
});

gulp.task("css", function () {
	
	let src = [
		"bower_components/photobox/photobox/photobox.css"
	];
	
	gulp.src(src)
		.pipe(concatCss("all.css"))
		.pipe(gulp.dest("public"));
});
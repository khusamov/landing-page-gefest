
/**
 * Переключатель темы Bootswatch for Twitter Bootstrap.
 * http://jsbin.com/momonupayu/1/edit?html,js,output
 * http://bootswatch.com/help/
 * 
 * Цепляется к событию change элемента select#themeswitch.
 * Меняет link содержащий bootswatch в аттрибуте href.
 */

$(function() {
	
	$.getJSON("https://bootswatch.com/api/3.json", function (data) {
	  var themes = data.themes;
	  var select = $("select#themeswitch");
	  select.show();
	  $(".alert").toggleClass("alert-info alert-success");
	  $(".alert h4").text("Success!");
	  
	  themes.forEach(function(value, index){
	    select.append($("<option />")
	          .val(index)
	          .text(value.name));
	  });
	  
	  select.change(function(){
	    var theme = themes[$(this).val()];
	    $("link[href*='bootswatch']").attr("href", theme.css);
	    //$("h1").text(theme.name);
	  });
	
	}, "json").fail(function(){
	    $(".alert").toggleClass("alert-info alert-danger");
	    $(".alert h4").text("Failure!");
	});
	
});
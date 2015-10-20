
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
	  
	  
		themes.push({
			css: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
			name: "Default"
		});
	    
		themes.forEach(function(value, index){
			select.append($("<option />")
				.val(index)
				.text(value.name));
		});
	  
		var link = $("link[href*='bootswatch']");
	  
		themes.forEach(function(theme, index) {
			if (link.attr("href") == theme.css) {
				select.val(index);
			}
		});
	          
	  
		select.change(function(){
			var theme = themes[$(this).val()];
			link.attr("href", theme.css);
		});
	
	}, "json").fail(function(){
	    
	});
	
});
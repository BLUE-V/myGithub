define(['angular','angular-resource','controllers','directives','services'],function(angular){
	var app=angular.module('myApp',['ngResource','myApp.controllers','myApp.directives','myApp.services']);
	//app.constant("baseUrl", "http://localhost:5500/products/");
	return app;
});
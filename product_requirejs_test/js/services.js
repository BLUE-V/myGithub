define(['angular'], function (angular) {
	'use strict';
	angular.module('myApp.services', [])
		.constant("baseUrl", "http://localhost:5500/products/");
});

require.config({
	paths:{
		'angular':'vendor/angular',
		'angular-resource':'vendor/angular-resource',		
	},
	shim:{
		'angular':{
			exports:'angular'
		},
		'angular-resource':{
			deps:['angular']
		}
	}
});
require(['angular','app'],function(angular){
	angular.bootstrap(document,['myApp']);// 参数1（element）：根作用域DOM元素，参数2（modules）：类型array
});
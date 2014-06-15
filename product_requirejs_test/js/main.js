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
	angular.bootstrap(document,['myApp']);// ����1��element������������DOMԪ�أ�����2��modules��������array
});
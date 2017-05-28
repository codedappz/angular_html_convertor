var editorApp = angular.module("editorApp", ["ngRoute","ui.bootstrap","textAngular"]);

editorApp.controller('editController',function($scope){
	$scope.editor='<h2>Try it!!!!<h2>';
	/* showing the editor panel*/
	$scope.showEditor=function(){
		$scope.editorPanel=true;
		$scope.htmlPanel=false;
	};
	/* showing the raw html*/
	$scope.showRawData=function(){
		$scope.htmlPanel=true;
		$scope.editorPanel=false;
	};
	/* changing the styles*/
	$scope.style=function(obj){
		 $scope.customStyle = {
			    "color" : obj.fontcolor,
			    "background-color" : obj.color,
			    "font-size" : obj.weight,
			    "padding":"10px"
			  }
	};
	
});

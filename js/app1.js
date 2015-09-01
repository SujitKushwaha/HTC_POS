var ionicApp = angular.module("starter",[]);

ionicApp.controller('MainController', ['$scope', function($scope) {
 
	$scope.btnstring="";
	$scope.hideRow2Flag=false;
	
	$scope.btnpress= function(btnid) 
    {	
		btnstring=$scope.btnstring;//Required if mixing both type of inputs at same time in same box
		btnstring+=btnid;
	   	$scope.btnstring=btnstring;
    }
	
	$scope.doubleZero=function()
	{
		if(btnstring.length>0)
		{
			btnstring=$scope.btnstring;
			btnstring+="00";
			$scope.btnstring=btnstring;
		}
	}
	$scope.cncpress= function() 
    {
		btnstring=btnstring.substring(0,btnstring.length-1);
		$scope.btnstring=btnstring;
    }
	
	$scope.cancelpress= function() 
    {
		btnstring="";
		$scope.btnstring=btnstring;
    } 
	
	$scope.okpress= function() 
    {
		if($scope.btnstring==="")
		{
		alert("Blank Fields Not Allowed");
		$scope.cancelpress();
		return;
		}
		// If planning to use input box type as text
		if(/^[a-zA-Z]+$/.test($scope.btnstring))
		{
			alert("Alphabets not allowed. Only Numbers");
			$scope.cancelpress();
		}
        $scope.btnstring=btnstring;
	}
	
	$scope.allCupsItems=function()
	{
		$scope.hideRow2Flag=true;
	}
}]);
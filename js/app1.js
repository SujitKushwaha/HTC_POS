var ionicApp = angular.module("starter",[]);

ionicApp.controller('MainController', ['$scope', function($scope) {
 
	$scope.btnstring="";
	$scope.hideRow2Flag=false;
	$scope.totalHideFlag=true;
	var myCart=[];
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
	
	var calculateTotal=function()
	{
		var total=0;
		for(var i=0;i<myCart.length;i++)
		{ 
			total+=myCart[i].rate;
		}
		return total;
	}
	
	$scope.addItemToCart=function(itemID)
	{
		var itemExistsFlag=0;
		if(myCart.length>0)
		{
			for(var i=0;i<myCart.length;i++)
			{
				if(myCart[i].Id==itemID)
			   {
					itemExistsFlag=1;
				    myCart[i].qty++;//Item present in cart,so increase its quantity
					myCart[i].rate=myCart[i].qty * myCart[i].price;
					$scope.myCart=myCart;
				    break;
			   }
		    }
		}
		if(itemExistsFlag==0)
		{
			var myItem=new Object();
			if(itemID==1)
			{
				myItem.Id=1;
				myItem.qty=1;
				myItem.name="Slurpee Small";
				myItem.rate=5.20;
				myItem.price=5.20;
			}
			if(itemID==2)
			{
				myItem.Id=2;
				myItem.qty=1;
				myItem.name="Slurpee Medium";
				myItem.rate=10.00;
				myItem.price=10.00;
			}
			if(itemID==3)
			{
				myItem.Id=3;
				myItem.qty=1;
				myItem.name="Slurpee Large";
				myItem.rate=25.00;
				myItem.price=25.00;
			}
			if(itemID==4)
			{
				myItem.Id=4;
				myItem.qty=1;
				myItem.name="Coffee Small";
				myItem.rate=7.20;
				myItem.price=7.20;
			}
			if(itemID==5)
			{
				myItem.Id=5;
				myItem.qty=1;
				myItem.name="Coffee Medium";
				myItem.rate=14.50;
				myItem.price=14.50;
			}
			if(itemID==6)
			{
				myItem.Id=6;
				myItem.qty=1;
				myItem.name="Coffee Large";
				myItem.rate=30.00;
				myItem.price=30.00;
			}
			myCart.push(myItem);
		}
		$scope.totalHideFlag=false;
		$scope.total=calculateTotal();
		$scope.myCart=myCart;
	}
}]);
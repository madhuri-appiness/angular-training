
var app = angular.module("app",[]);
app.controller('apartment', function($scope){
    
  $scope.arr = [{
    input1 : $scope.input1,
    submenu : [{
        name: "",
        id:"plot1"
    }]
  }];
  
  $scope.addApartment = function(){
    var id_value = $scope.arr[$scope.arr.length-1].submenu.length+1;
    console.log("clicked");
    console.log($scope.arr[$scope.arr.length-1].submenu);
    $scope.arr[$scope.arr.length-1].submenu.push({"name":'',"id":'plot'+id_value});
    console.log($scope.arr);
  };
    
  //copy apartment
  $scope.copy = function(){

    $scope.obj_Val = {
     
     input1 : $scope.arr[$scope.arr.length - 1].input1,
     submenu: $scope.copyObj($scope.arr[$scope.arr.length - 1].submenu)
   
    }

    $scope.arr.push($scope.obj_Val); 

  };
   
  $scope.delete = function(index){
    if($scope.arr.length > 1){
            $scope.arr.splice(index,1);
    }
      
  }
    
  $scope.copyObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
});
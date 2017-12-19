
var app = angular.module("app",[]);
app.controller('apartment', function($scope){
    
  $scope.arr = [{
      id : 1,
    input1 : $scope.input1,
    submenu : [{
        name: "",
        id:"plot1"
    }]
  }];
  
  $scope.addApartment = function(index_val){

    var id_value = $scope.arr[$scope.arr.length-1].submenu.length+1;
    console.log("clicked");
    console.log($scope.arr[$scope.arr.length-1].submenu);
    $scope.arr[index_val].submenu.push({"name":'',"id":'plot'+id_value});
   
  };
    
  //copy apartment
  $scope.copy = function(){
    var arr_id = $scope.arr.length + 1;
    $scope.obj_Val = {
     id : arr_id,
     input1 : $scope.arr[$scope.arr.length - 1].input1,
     submenu: $scope.copyObj($scope.arr[$scope.arr.length - 1].submenu)
   
    }
    $scope.arr.push($scope.obj_Val); 
    console.log($scope.arr);
  };

  $scope.deleteSubApart = function(arr_index, subindex){
    console.log(arr_index, subindex)
    if($scope.arr[arr_index].submenu.length >= 0){
      $scope.arr[arr_index].submenu.splice(subindex, 1);
    }
  }
  $scope.copyApart = function(apart,copysub){
    $scope.sec_Obj ={
        name:$scope.arr[apart].submenu[copysub].name,
        id:$scope.arr[apart].submenu[copysub].id
      //  submenu: $scope.copysubObj($scope.arr[apart].submenu)

    }
    $scope.arr[apart].submenu.push($scope.sec_Obj);
    console.log($scope.arr);
  }
  $scope.delete = function(index){
    if($scope.arr.length > 1){
            $scope.arr.splice(index,1);
    }
      
  }
  $scope.copysubObj = function(sec_obj) {
    return JSON.parse(JSON.stringify(sec_obj));
  }
  $scope.copyObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
});
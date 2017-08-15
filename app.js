var app = angular.module('app', []);
app.controller("main", function ($scope) {
    $scope.name = "Hello World !";
       $scope.email = "";
        $scope.password = "";
    $scope.login = function(email, password) {
     
        $scope.regux = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($scope.email == "") {
           alert("please enter email");
        }
        else if(!$scope.regux.test(email)) {
            alert("Please enter valid email")
        }
        else if($scope.password == ""){
            alert("enter password");
        }
        else{
            alert("Thank you");
        }
 
    }
    $scope.limit = 140;
    $scope.showval = true;
    $scope.show = function(){
        if($scope.showval == true){
            $scope.showval = false;
        }
        else{
            $scope.showval = true;
        }
    }

});
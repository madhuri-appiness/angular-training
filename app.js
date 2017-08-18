var app = angular.module('app', []);
app.controller("main", function ($scope) {
    $scope.name = "Hello World !";
       $scope.email = "";
        $scope.password = "";
    $scope.login = function(email, password) {
     
        $scope.regux = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($scope.email == "") {
          $scope.err1 = "Please enter email";
        }
        else if(!$scope.regux.test(email)) {
            $scope.err1 = "Please enter valid email";
        
        }
        else if($scope.password == ""){
           $scope.err3 = "Please password";
        }
        else{
            alert("Thank you");
        }
 
    }
    $scope.limit = 140;
    $scope.twitter = function(d){
        $scope.limit = 140;
            $scope.limit = $scope.limit - d.length;
    }
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
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
    // Twitter
    $scope.limit = 140;
    $scope.twitter = function(d){
        $scope.limit = 140;
            $scope.limit = $scope.limit - d.length;
    }

    //show text
    $scope.showval = true;
    $scope.show = function(){
        if($scope.showval == true){
            $scope.showval = false;
        }
        else{
            $scope.showval = true;
        }
    }
    // Angular-form
      	$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('Thank you');
			}

		};

});
//Nested controller
app.controller("mainCtrl",function($scope){
    $scope.name = "Madhuri";
});
app.controller('childCtrl',function($scope){
    $scope.profile = "UI Developer";
    $scope.mob = "7897369091";
})

// Counter Clock
app.controller("clock",function($scope, $interval){
    $scope.time = 0;
    $scope.totalEllapse = 0;
    function timer(){
        $scope.time++;
    }
  $scope.start = function(){
     $scope.t =  $interval(timer,1000);
  }
  $scope.stop = function(){
      $scope.nil = $interval.cancel($scope.t);

  }
    $scope.ellapse = function(){
        
        $scope.totalEllapse = $scope.time - $scope.nil-$scope.totalEllapse;
    }
});

// Add table content
app.controller("ctrl",function($scope){
     $scope.arr = [];
       $scope.data = [ 
        {city: 'Bangalore'},
       { city: 'Hubli'},
       { city: 'Dharwad'}
    ]
    $scope.add = function(one,two,three,four){
         var temp = {
             "name" : one,
            "profile" : two,
            "sex" : three,
            "city": four
         };
        $scope.arr.push(temp); 
    };
  $scope.reset= function(){
      $scope.input1 = "";
      $scope.input2 = "";
      $scope.result = false;
     
  }

})
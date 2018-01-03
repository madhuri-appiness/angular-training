
// var app = angular.module("app",[]);
app.controller('customsearch',function($scope){
    $scope.project_List= [  {
        "id": 736,
        "name": "Systems", 
        "image": {
            "link": "http://i.stack.imgur.com/8KA9j.jpg?s=32&g=1"
            }, 
        "groups": [
                {
                "id": 2168, 
                "name": "API",
                "url": "https://wwww.itschools.co.za/api/"
                },
                {
                "id": 11955,
                 "name": "Assets",
                "url": "https://wwww.itschools.co.za/assets/"
                },
                {
                "id": 3179,
                 "name": "Design",
                "url": "https://wwww.itschools.co.za/design/"
                },
                {
                "id": 207,
                "name": "Development",
                "url": "https://wwww.itschools.co.za/development/"
                },
                {
                "id": 70,
                "name": "Intranet",
                "url": "https://wwww.itschools.co.za/intranet/"
                }
            ],
        "url": "https://wwww.itschools.co.za/projects"
        },
        {
        "id": 44315,
        "name": "User Agents", 
        "image": {
            "link": "http://www.zerohedge.com/sites/default/files/pictures/picture- 5781.jpg"
            },
         "groups": [
                {
                "id": 191599,
                 "name": "Alchemy",
                "url": "https://wwww.itschools.co.za/tools/alchemy"
                },
                {
                "id": 86822,
                 "name": "Empathy",
                "url": "https://wwww.itschools.co.za/tools/empathy"
                },
                {
                "id": 86297,
                 "name": "Epiphany",
                "url": "https://wwww.itschools.co.za/tools/epiphany"
                },
                {
                "id": 131837,
                 "name": "Harmony",
                "url": "https://wwww.itschools.co.za/tools/hamony"
                },
                {
                "id": 174338,
                 "name": "Zagreb",
                "url": "https://wwww.itschools.co.za/tools/zagreb"
                }
            ],
        "url": "https://wwww.itschools.co.za/tools"
        }]
        $scope.select = function(element){
            angular.forEach($scope.project_List, function(value){
                value.selected = false;
            })
            angular.element(element).scope().data.selected = true;
            angular.element(element).scope().items.selected = true;
        }
});

app.filter('search',function(){
    return function(input,projectName){
        projectName = projectName?projectName.toLowerCase():"";
        // console.log(input);
        // console.log(projectName);
        var filtered = [];
      if(input){
        // var pattern = new RegExp(projectName,"gi")
        angular.forEach(input,function(value, key){
            //  console.log("hello" + value);
            
            var result = value.name.indexOf(projectName);
            // console.log(projectName);
         if(result>=0){
            filtered.push(value);
         }
         
            // angular.forEach(value.groups,function(value1,key1){
            //     console.log("hey" + value1);
            //     if(value1.name.indexOf(projectName)>=0){
            //         filtered.push(value1);
                    
            //     }
            // })
            // console.log("hiiii" + filtered);
         
        })
      }
      
        return filtered;
       
    }
    
});


// arrow functionality directive






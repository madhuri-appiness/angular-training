// var output = [];
app.filter('searchName',function(){
    
    return function(output,projectName){
        // console.log(projectName);
       
     if(projectName){
        // console.log(output);
          projectName = projectName.toLowerCase();
        // console.log(projectName);
         var match = new RegExp(projectName,"gi");
         var stringMatched = output.replace(match,'<span class="highlighted">' + projectName + '</span>');
         return stringMatched;
        //  console.log("hello" + stringMatched);
     }
     else{
         return output;
     }
    }
    
});

app.controller("formCtrl",['$scope','$http',
    function($scope,$http){
        
        $scope.url = 'app/php/message.php';
        //function for submiting a form    
        $scope.formsubmit = function(isValid){
                 if(isValid){
                     $http.post($scope.url,{"name":$scope.Name, "email": $scope.Email, "message": $scope.Message}, 
                       {'Content-type': 'application/json'})
                    .then(
                        function successCallback(response){
                    
                            $scope.result="<pre class='alert alert-success'><strong>Success:</strong> "+response.data+"</pre>";
                
                        },function errorCallback(response){
                
                            $scope.result="<pre class='alert alert-danger'><strong>Success:</strong> "+response.data+"</pre>";
            
                        }
                     )
        
            }else{
            
                $scope.result="Form is not valide";   
        
            }
        }
        //function for changing a view after form submition
        $scope.show = function(){
            
            if((!($scope.result) || 0===($scope.result).length)){
                return false;
            }else{
                return true;
            }
        }
        
        //function for returning all on default view
        $scope.back = function(){
            $scope.result="";
        }
    
    }]);
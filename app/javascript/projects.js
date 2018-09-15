app.controller("projectCtrl",['$scope','$http',
  function($scope,$http){

    var url="assets/pages/projects";
    var projectListUrl="assets/pages/projects/list.json"
    $scope.projects=[];
    $scope.project1="";
    $scope.project2="";
    $scope.project3="";
    $scope.project4="";
    $scope.project5="";
    $scope.gettingProjectList=function(){

      $http.get(projectListUrl)
        .then(
          function successCallback(response){
              var projectList=response.data.slice();
              $scope.includeProjects(projectList);
          },function errorCallback(response){
            console.log(response);
          }
        )
    }


  $scope.includeProjects=function(list){

      $scope.project1=list[0];
      $scope.project2=list[1];
      $scope.project3=list[2];
      $scope.project4=list[3];
      $scope.project5=list[4];
      $scope.projects=list.slice(5);

}
$scope.gettingProjectList();


  }]);

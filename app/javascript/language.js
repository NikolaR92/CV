app.controller("langCtrl",['$scope','$http',
    function($scope,$http){
        $scope.url="assets/language/";
        //function gets data file for each language
        //second argument is tels if file is for projects or for main site
        $scope.getLangFile=function(file,projects){
            $http.get(file)
                    .then(
                        function successCallback(response){
                            var data = response.data;
                            if(projects==0)
                              $scope.setSiteLanguageTranslation(data);
                            else {

                              $scope.setProjectLanguage(data);
                            }
                        },function errorCallback(response){
                           console.log(response);
                            $scope.url="assets/language/";
                        }
                     )


        }

        //depending on what language button is set we change site to it
        if($scope.lang == "SRB"){
                $scope.url=$scope.url+"SRB.json";
            }else if($scope.lang == "GR"){
                $scope.url=$scope.url+"GR.json";
            }else {
                $scope.url=$scope.url+"ENG.json";
            }

            $scope.getLangFile($scope.url,0);




        $scope.language = function(){
            if($scope.lang == "SRB"){
                $scope.url=$scope.url+"SRB.json";
            }else if($scope.lang == "GR"){
                $scope.url=$scope.url+"GR.json";
            }else {
                $scope.url=$scope.url+"ENG.json";
            }

            $scope.getLangFile($scope.url,0);

        }

        $scope.setSiteLanguageTranslation= function(data){
          $scope.homeTrans = data[0].homeTrans;
          $scope.workTrans = data[0].workTrans;
          $scope.resumeTrans = data[0].resumeTrans;
          $scope.contactTrans = data[0].contactTrans;
          $scope.hobbyTrans= data[0].hobbyTrans;
          $scope.aboutTrans=data[0].aboutTrans;
          $scope.aboutTextTrans=data[0].aboutTextTrans;
          $scope.work1Trans=data[0].work1Trans;
          $scope.work2Trans=data[0].work2Trans;
          $scope.swingByTrans=data[0].swingByTrans;
          $scope.contact1Trans=data[0].contact1Trans;
          $scope.contactGetInTrans=data[0].contactGetInTrans;
          $scope.contactNameTrans=data[0].contactNameTrans;
          $scope.requiredMessageTrans=data[0].requiredMessageTrans;
          $scope.contactEmailTrans=data[0].contactEmailTrans;
          $scope.invalidMessageTrans=data[0].invalidMessageTrans;
          $scope.contactMessageTrans=data[0].contactMessageTrans;
          $scope.contactSendTrans=data[0].contactSendTrans;
          $scope.contactBackTrans=data[0].contactBackTrans;
          $scope.close=data[0].close;
          $scope.tableYear=data[0].tableYear;
          $scope.tableTitle=data[0].tableTitle;
          $scope.tableWhere=data[0].tableWhere;
          $scope.cityState=data[0].cityState;
          $scope.tableRow1=data[0].tableRow1;
          $scope.tableRow2=data[0].tableRow2;
          $scope.tableRow3=data[0].tableRow3;
          $scope.tableRow4=data[0].tableRow4;
          $scope.tableRow5=data[0].tableRow5;
          $scope.tableRow6=data[0].tableRow6;
          $scope.cvLink=data[0].cvLink;
          $scope.url="assets/language/";
        }

        //Function sets descriptions
        $scope.setLangProjects=function(location){
            location=location+"/lang/";
            if($scope.lang == "SRB"){
              location=location+"SRB.json";
            }else if($scope.lang == "GR"){
              location=location+"GR.json";
            }else{
              location=location+"ENG.json";
            }

            $scope.getLangFile(location,1);
        }

        $scope.setProjectLanguage=function(data){
            $scope.modalTitle=data[0].modalTitle;
            $scope.modalContent=data[0].modalContent;
        }

    }]);

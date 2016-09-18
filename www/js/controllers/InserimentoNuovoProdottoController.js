/**
 * Created by SMascaretti on 17-Sep-16.
 */

myApp.controller('inserimentoNuovoProdottoController', function($scope,$http) {
	

	 $scope.chiudiTipo=function(){

    	 // $scope.goOpzioniClassificazione = false;
        $scope.goOpzioniTipo = ! $scope.goOpzioniTipo;
        
//        console.log("CLASS: "+$scope.goOpzioniClassificazione);
//        console.log("TIPO: "+$scope.goOpzioniTipo);

        if($scope.goOpzioniTipo)  {
            $scope.goOpzioniClassificazione = false;
            $scope.goOpzioniAllergene = false;
           
            $scope.goOpzioniCategoria = false;
            $scope.goOpzioniSottocategoria = false;
        }

    }
    
    
    $scope.chiudiClassificazione=function(){

        //$scope.goOpzioniClassificazione = false;
        $scope.goOpzioniClassificazione = ! $scope.goOpzioniClassificazione;
        
//        console.log("CLASS: "+$scope.goOpzioniClassificazione);
//        console.log("Classificazione: "+$scope.goOpzioniClassificazione);

        if($scope.goOpzioniClassificazione)  {
            $scope.goOpzioniTipo = false;
            $scope.goOpzioniAllergene = false;
           
            $scope.goOpzioniCategoria = false;
            $scope.goOpzioniSottocategoria = false;
        }
    }
    
    $scope.chiudiAllergene=function(){

        //$scope.goOpzioniClassificazione = false;
        $scope.goOpzioniAllergene = ! $scope.goOpzioniAllergene;
        
//        console.log("CLASS: "+$scope.goOpzioniClassificazione);
//        console.log("Classificazione: "+$scope.goOpzioniClassificazione);

        if($scope.goOpzioniAllergene)  {
            $scope.goOpzioniTipo = false;
            $scope.goOpzioniClassificazione = false;
            
            $scope.goOpzioniCategoria = false;
            $scope.goOpzioniSottocategoria = false;
        }
    }
    
  
    
    $scope.chiudiCategoria=function(){

        //$scope.goOpzioniClassificazione = false;
        $scope.goOpzioniCategoria = ! $scope.goOpzioniCategoria;
        
//        console.log("CLASS: "+$scope.goOpzioniClassificazione);
//        console.log("Classificazione: "+$scope.goOpzioniClassificazione);

        if($scope.goOpzioniCategoria)  {
            $scope.goOpzioniTipo = false;
            $scope.goOpzioniClassificazione = false;
            $scope.goOpzioniAllergene = false;
            
            $scope.goOpzioniSottocategoria = false;
        }
    }
    
    $scope.chiudiSottocategoria=function(){

        //$scope.goOpzioniClassificazione = false;
        $scope.goOpzioniSottocategoria = ! $scope.goOpzioniSottocategoria;
        
//        console.log("CLASS: "+$scope.goOpzioniClassificazione);
//        console.log("Classificazione: "+$scope.goOpzioniClassificazione);

        if($scope.goOpzioniSottocategoria)  {
            $scope.goOpzioniTipo = false;
            $scope.goOpzioniClassificazione = false;
            $scope.goOpzioniAllergene = false;
            $scope.goOpzioniCategoria = false;
            
        }
    }



    $scope.load = function(page) {
        $scope.mySplitterContent.load(page)
    }
    
    $scope.open = function() {
        $scope.mySplitterSide.open();
    }
    
    $scope.groups = [];
    for (var i = 0; i < 1; i++) { //5
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j = 0; j < 3; j++) { 
            $scope.groups[i].items.push(i + '-' + j);
        }
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    
    $scope.toggleoptions = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };

    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };


});
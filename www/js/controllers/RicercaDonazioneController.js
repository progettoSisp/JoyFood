/**
 * Created by Aerdna on 17-Sep-16.
 */
myApp.controller('ricercaDonazioneController', function($scope,$http) {
    $scope.chiudiTipo=function(){

        $scope.goOpzioniClassificazione = false;
        $scope.goOpzioniTipo = ! $scope.goOpzioniTipo;
        console.log("TIPO: "+$scope.goOpzioniTipo);
        console.log("CLASS: "+$scope.goOpzioniClassificazione);

        if($scope.goOpzioniTipo)  {
            $scope.goOpzioniClassificazione = false;
            $scope.goOpzioniAllergeni = false;
            $scope.goOpzioniProdotto = false;
            $scope.goOpzioniCategoria = false;
            $scope.goOpzioniSottocategoria = false;
        }
    }



    $scope.load = function(page) {
        $scope.mySplitterContent.load(page)
    }
    $scope.open = function() {
        $scope.mySplitterSide.open();
    }
    $scope.groups = [];
    for (var i = 0; i < 5; i++) {
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
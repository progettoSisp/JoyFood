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
    
//    $scope.groups = [];
// $http.get("https://joyfoodamministratore-sisp.rhcloud.com/listAllTipo")
//    
//	.then(function(response) {
//	$scope.myData = response.data;
//	console.log(response.data);
//		 $scope.groups[0] = {
//		            name: "Tipo",
//		            items: []
//		        };
//		 for(var i=0;i<response.data.length;i++){
//			  $scope.groups[0].items.push(response.data[i].descrizione);
//		 }
//		 
//	 });
//   
//
//    /*
//     * if given group is the selected group, deselect it
//     * else, select the given group
//     */
//    
   
    
    
    $scope.accordionPrimoLivello = ['Tipo','Classificazione', 'Categoria','Sottocategoria','Allergeni'];
    
    
    $scope.accordionSecondoLivello =
    	[['Carne','Pesce','Frutta e verdura','Grano e cereali','Latticini'],
    	 ['Vegano','Vegetariano','Celiaco','Non Specificato'],
    	 ['Prodotti sfusi e pronti per il consumo', 'Prodotti confezionati e pronti per il consumo', 'Prodotti confezionati'],
    	 ['n.d.'],
         ['Mais','Latteria','Uovo','Pesce','Aromi','Glutine','MSG','Arachidi','Solanaceae','Molluschi','Soia','Solfiti','Grassi Trans','Frutta a guscio','Grano']];
    
      
    
$scope.groups = [];
for (var i = 0; i < $scope.accordionPrimoLivello.length; i++) {
	
$scope.groups[i] = {
name: $scope.accordionPrimoLivello[i],
items: []
};

for (var j = 0; j < $scope.accordionSecondoLivello[i].length; j++) {
$scope.groups[i].items.push($scope.accordionSecondoLivello[i][j]);

}
}


    
    
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
myApp.controller('ricercaProdottoController', function($scope,$http) {
	$scope.opzioni="Più Opzioni";
    $scope.goOpzioni = false;
         
   $scope.cambio=function(){
        
             
             $scope.goOpzioni = ! $scope.goOpzioni;
             if( $scope.goOpzioni){
                  $scope.opzioni="Meno Opzioni";
             }else{
                   $scope.opzioni="Più Opzioni";  
             }
    }
   
   $scope.load = function(page) {
     $scope.mySplitterContent.load(page)
   }
   $scope.open = function() {
     $scope.mySplitterSide.open();
   }

   
// https://joyfoodamministratore-sisp.rhcloud.com/listAllCategoria
// https://joyfoodamministratore-sisp.rhcloud.com/listSottoCategoriaByCod?id=1

   
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

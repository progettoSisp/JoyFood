myApp.controller('ricercaDonazioneController', function($scope,$http,localDbService, $timeout,remoteApiService,filtriService) {
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
   
   
  // $scope.groups= [{key:"Tipo", values: [{ "name": "Carne","id": "01"},{ "name": "Pesce","id": "02"},{ "name": "Frutta","id": "id_carne"}]},
	//                  {key:"Classificazione",values: [{"name": "Vegano","id": "id_class_1"},{"name": "Celiaco","id": "id_class_1"},{"name": "Vegetariano","id": "id_class_1"}]},
	  //                {key:"Allergeni",values: [{"name": "Mais","id": "id_class_1"},{"name": "Latteria","id": "id_class_1"}]}
	    //              ];

   $timeout(callAtTimeout, 1000);

   function callAtTimeout() {

	   filtriService.Init();
		                  console.log(filtriService.getTipo() );
		                  console.log(filtriService.getClassificazione());
		                  console.log(filtriService.getAllergene());
	   $scope.groups= [{key:"Tipo", values: filtriService.getTipo() },
		                  {key:"Classificazione",values: filtriService.getClassificazione()},
		                  {key:"Allergeni",values:filtriService.getAllergene()}
		               ];
	 
	}

   // $scope.accordionPrimoLivello = ['Tipo','Classificazione','Allergeni'];

    
   // $scope.accordionSecondoLivello = [['Carne','Pesce','Frutta e verdura','Grano e cereali','Latticini'],['Vegano','Vegetariano','Celiaco','Non Specificato'],['Mais','Latteria','Uovo','Pesce','Aromi','Glutine','MSG','Arachidi','Solanaceae','Molluschi','Soia','Solfiti','Grassi Trans','Frutta a guscio','Grano']];
    
    
/*  $scope.groups = [];
for (var i = 0; i < $scope.accordionPrimoLivello.length; i++) {
$scope.groups[i] = {
name: $scope.accordionPrimoLivello[i],
items: []
};
for (var j = 0; j < $scope.accordionSecondoLivello[i].length; j++) {
$scope.groups[i].items.push($scope.accordionSecondoLivello[i][j]);

}
}
*/
   //<input name="{{name}}" value="{{array[i][j].id}}" type="checkbox"/> {{array[i][j].name}};
/*
   for(var i = 0; i<$scope.groups.length; i++)
   {
	   var name = $scope.groups[i].name;
	   for(var j = 0; j<$scope.groups[i].values.length;j++) 
	   {
		 items:[];
	     items.push
	   
	   }
	 }
*/
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
 

/* $scope.ricerca = function() {
	/*  $.each(".{active:isGroupShown(group)} checkbox__checkmark checkbox--list-item__checkmark"){
		    if checkbox is selected 
		    query = ""
		    }
		    $button onclick esegui query*/
	
//	ricercaForm
    /*console.log(document.getElementById('ricerca').value);
	console.log(document.getElementById('indirizzo').value);
	console.log(document.getElementById('dataMassima').value);*/
	
	//myNavigator.pushPage('registration.html');
	//console.log($("form.ricerca-form").serialize());
	//console.log(document.getElementById('ricercaForm').serialize());
	//};
$scope.richiesta={};


$scope.ricerca=function(richiesta){
	
console.log(richiesta);
console.log(filtriService.getClassificazione());	
remoteApiService.ricercaDonazione(richiesta).then(function (risultato) {

	
	
});

}
});
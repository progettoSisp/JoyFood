/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('registrationController', function(registrationService,$scope,$http) {

	$scope.master = {};
	$scope.dialogs = {};
	$scope.show = function(dlg) {
		if (!$scope.dialogs[dlg]) {
			ons.createDialog(dlg).then(function(dialog) {
				$scope.dialogs[dlg] = dialog;
				dialog.show();
			});
		} else {
			$scope.dialogs[dlg].show();
		}
	}
	 	
	$scope.next= function(user){
		var errore = false;
		if(user){
			if(!user.username || !user.password1 || !user.password2 || !user.cognome)
				errore = true;
				var passwordNumber = false;
				var passwordString = false;
				if(user.password1){
					passwordNumber = /\d/.test(user.password1);
					passwordString = /[a-zA-Z]/.test(user.password1);
				}else{
					$scope.passwordValida = false;
					errore =true;
				}
				if(passwordNumber&&passwordString){
					$scope.passwordValida = true;
				}else{
					$scope.passwordValida = false;
				}
				if(user.password1 != user.password2){
					$scope.passwordDueValida = false;
					errore = true;
				}else{
					$scope.passwordDueValida = true;
				}
				$scope.inviato = true;
				registrationService.saveUser(user);
				if(!errore){
					myNavigator.pushPage("html/MarcoNicola/registration_2.html")
				}
			}else{
				$scope.inviato = true;
			}
		}
	 
	$scope.pagina2= function(user2){
		var user1=registrationService.getUser();
		var errore = false;
		$scope.user_mail = false;
		if(user2){
			if(!user2.email1 || !user2.email2 || !user2.genere || !user2.codiceFiscale || !user2.comuneNascita || !user2.telefono){
				errore = true;
			}
			var settings = {
				"url": "https://joyfoodamministratore-sisp.rhcloud.com/user/checkUnique?user=" + user1.username + "&mail=" + user2.email1,
				"method": "GET",
				"headers": {
					"content-type": "application/x-www-form-urlencoded",
				},
			};
			$http(settings).then(function(response) {
				errore=false;
				$scope.user_mail=false;
				$scope.inviato2 = true;
				if(!errore){				 
					var settings = {
						"async": true,
						"crossDomain": true,
						"url": "http://joyfoodamministratore-sisp.rhcloud.com/user/register",
						"method": "POST",
						"headers": {
							"content-type": "application/x-www-form-urlencoded",
							"cache-control": "no-cache",
							"postman-token": "be255aa4-2a8f-b146-c05f-36b49a1acc31"
						},
						"data": {
							"user": user1.username,
							"password": user1.password1,
							"mail": user2.email1,
							"nome": user1.nome,
							"cognome": user1.cognome,
							"sesso": user2.genere,
							"codFiscale": user2.codiceFiscale,
							"statoNascita": "Italia",
							"provinciaNascita": "MI",
							"comuneNascita": user2.comuneNascita,
							"dataNascita": new Date(user2.dataNascita).getTime(),
							"provinciaResidenza": "MB",
							"capNascita": "20826",
							"comuneResidenza": user2.comune,
							"indirizzoResidenza": user2.indirizzo,
							"capResidenza": "20826",
							"telefono": user2.telefono,
						}
					}
					$.ajax(settings).done(function (response) {
						myNavigator.pushPage("html/MarcoNicola/conferma.html")
					});    
				}
			},function error(response) {
				errore=true;
				$scope.user_mail=true;
				$scope.inviato2 = true;
			});	
		}else{
			 $scope.inviato2 = true;	 
		}
	}
		
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
		$scope.user2 = angular.copy($scope.master);
		if($("#password1"))
			$("#password1").val("");
    	if($("#password2"))
    		$("#password2").val("");
    	if($("#codicefiscale"))
    		$("#codicefiscale").val("");
    	if($("#telefono"))
    		$("#telefono").val("");
    	if($("#email1"))
    		$("#email1").val("");
    	if($("#email2"))
    		$("#email2").val("");
    };
	
});


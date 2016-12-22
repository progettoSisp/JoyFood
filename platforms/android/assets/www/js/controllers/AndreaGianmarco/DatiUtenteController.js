myApp.controller('dettaglioUtenteController', function($scope,$http, userService) { 
	console.log("Dettaglio utente");
	$scope.user = userService.getUser();

	$scope.saveChanges= function(user){
		console.log("nome: "+user.nome);
		console.log("cognome: "+user.cognome);
		console.log("provinciaResidenza: "+user.provinciaResidenza);
		console.log("comuneResidenza: "+user.comuneResidenza);
		console.log("indirizzoResidenza: "+user.indirizzoResidenza);
		console.log("capResidenza: "+user.capResidenza);
		console.log("email: "+user.email);
		console.log("telefono: "+user.telefono);

		
		var settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://joyfoodamministratore-sisp.rhcloud.com/api/updateUser",
				"method": "POST",
				"headers": {
					"x-auth-token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJWaW5jZW56bzIifQ.wqDrxAW4dDudWO-9EaLTMrZ4vbbwdxzW7RG1FCHkAmG2bOq-Uiw-oFBEtlll684W92FfRPg5Agr4pHFxguxbHw",
					"content-type": "application/x-www-form-urlencoded",
					"cache-control": "no-cache",
					"postman-token": "8ef7df35-41df-8364-621e-5c0fdae67e96"
				},
				"data": {					  
					"nome": user.nome,
					"cognome": user.cognome,
					"provinciaResidenza": user.provinciaResidenza,
					"comuneResidenza": user.comuneResidenza,
					"indirizzoResidenza": user.indirizzoResidenza,
					"capResidenza": user.capResidenza,
					"email": user.email,
					"telefono": user.telefono
				}
		};

		$.ajax(settings).done(function (response) {
			console.log(response);
			ons.notification.alert('Your profile has been saved correctly');
		});

	}


});   

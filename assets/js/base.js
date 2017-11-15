function login(userid,password) {
	var data = {
		userid:userid,
		password:password
	};

	$.post( "/api/login", data)
	 .done(function( response ) {
	 	if(response)
	    	alert( "Response: " + response );
	    else {
	    	alert( "Userid or password incorrect");
	    }
	  });
}
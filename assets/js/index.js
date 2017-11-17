
$(document).ready(function() {
	$( "#user-login" ).click(function() {
		var userid = $("#userid").val();
		var password = $("#password").val();

		login(userid,password);
	});

	$().UItoTop({ easingType: 'easeOutQuart' });

});

//Login function
function login(userid,password) {
	var data = {
		userid:userid,
		password:password
	};

	$.post( "https://sailsstart.herokuapp.com/api/login", data)
	 .done(function( response ) {
	 	if(response)
	 		window.location.href = "user_home"
	    else {
	    	alert( "Userid or password incorrect");
	    }
	  });
}



 const createCredential = function (request, response) {

 	var userid = request.param("user-id");
 	var password = request.param("password");
 	
 	
 	var return_response = {
 		"message" : [],
 		"data" : {}
 	};

 	//Validataion
 	var temp_error = [];

 	if(!userid) {
 		temp_error.push("No iser id");
 	}

 	if(!password) {
 		temp_error.push("No password");
 	}

 	if(temp_error.length!=0) {
 		return_response.message = temp_error;
 		response.status(400);
 		response.send(return_response);
 		return;
 	}

 	//Valid request
 	createCredentialHelper(userid,password)
 	.then(function() {

 		//Logged in successfully 		
		sails.log("User created successfully");

		//TO DO - Fetch userdetails
		response.status(200);
		return_response.message.push("User credentials created");
		response.send(return_response);
 		
 	})
 	.catch(function (err) {
 		
 		response.status(500);
 		
 		return_response.message.push(temp_error);

 		response.send(return_response);
 		

 	});
 };


 const createCredentialHelper= function(userid,password) {
 	return new Promise(function(resolve, reject) {

 		User.create({userid:userid,password:password}).exec(function (db_err, db_resp) {
			if (db_err) {
				sails.log("Error occured in createHelper "+err);
				return reject(err);
			}
		  	
		  	return resolve();
		  
		});
 		
 	
 	});
 };


 const createUser = function (request, response) {

 	var userid = request.param("user-id");
 	var fname = request.param("fname");
 	var lname = request.param("lname");
 	var dob = request.param("dob");
 	var phone = request.param("phone");

 	
 	var return_response = {
 		"message" : [],
 		"data" : {}
 	};

 	//Validataion
 	var temp_error = [];

 	if(!userid) {
 		temp_error.push("No iser id");
 	}

 	if(!fname) {
 		temp_error.push("No first name");
 	}

 	if(!lname) {
 		temp_error.push("No last name");
 	}

 	if(!dob) {
 		temp_error.push("No dob");
 	}

 	if(!phone) {
 		temp_error.push("No phone");
 	}

 	if(temp_error.length!=0) {
 		return_response.message = temp_error;
 		response.status(400);
 		response.send(return_response);
 		return;
 	}

 	//Valid request
 	createHelper(userid,fname,lname,dob,phone)
 	.then(function() {

 		//Logged in successfully 		
		sails.log("User created successfully");

		//TO DO - Fetch userdetails
		response.status(200);
		return_response.message.push("User created");
		response.send(return_response);
 		
 	})
 	.catch(function (err) {
 		
 		response.status(500);
 		
 		return_response.message.push(temp_error);

 		response.send(return_response);
 		

 	});
 };


 const createHelper= function(userid,lname,fname,dob,phone) {
 	return new Promise(function(resolve, reject) {

 		UserDetails.create({userid:userid,fname:fname,lname:lname,dob:dob,phone:phone}).exec(function (db_err, db_resp) {
			if (db_err) {
				sails.log("Error occured in createHelper "+err);
				return reject(err);
			}
		  	
		  	return resolve();
		  
		});
 	});
 };

 module.exports = {
 	createUser	,
 	createCredential
 };
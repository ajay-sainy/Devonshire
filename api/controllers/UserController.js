const CREDENTIALS_CREATED = "User credentials created successfully";
const USER_CREATED = "User created successfully";

const createCredential = function (request, response) {

	var return_response = {
 		"message" : [], 		
 		"success" : false
 	};

 	var username = request.param("username");
	var password = request.param("password");
	var userid = request.param("userid");

 	var params = {
 		username:username,
 		password:password,
 		userid:userid,
 		active:true,
 		type:'user'
 	};

 	var validateResponse = UserService.validateCredentials(params);

 	//Validation fails
 	if(validateResponse.error.length!=0) {
 		return_response.success = false; 		
		return_response.message = validateResponse.error; 		

 		response.status(400);
 		response.send(return_response);
 		
 		return;
 	}

 	//Valid request
 	UserService.createCredentialsHelper(params)
 	.then(function() {

 		//Logged in successfully 		
		sails.log("User credentials created successfully");
		
		return_response.success = true;
		return_response.message.push(CREDENTIALS_CREATED);

		response.status(200);
		response.send(return_response); 		
 	})
 	.catch(function (err) {
 		sails.log.error("User credentials creation failed " + err);
 		
 		return_response.success = false;
 		return_response.message.push(err);
 		
 		response.status(500);
 		response.send(return_response);
 	});
 };


 /** User details creations **/
 const createUser = function (request, response) {

	var return_response = {
 		"message" : [], 		
 		"success" : false
 	};
 	
 	var fname = request.param("fname");
 	var lname = request.param("lname");
 	var dob = request.param("dob");
 	var phone = request.param("phone");
 	var type = request.param("type");
 	var email = request.param("email"); 	

 	var params = {
		fname:fname,
		lname:lname,
		dob:dob,
		phone:phone,
		type:type,
		email:email
	};
 	
 	//Validataion
 	var validateResponse = UserService.validateUserDetails(params);

 	if(validateResponse.error.length!=0) {
 		return_response.success = false;
 		return_response.message = validateResponse.error;

 		response.status(400); 		
 		response.send(return_response);
 		return;
 	}

 	//Valid request
 	UserService.createUserHelper(params)
 	.then(function() {

 		//Logged in successfully 		
		sails.log("User created successfully");

		//TO DO - Fetch userdetails
		return_response.success = true;
		return_response.message.push(USER_CREATED);
		
		response.status(200);
		response.send(return_response);
 		
 	})
 	.catch(function (err) {
 		sails.log.error("Error occured "+err);
 		
 		response.status(500);
 		temp_error.push(err);

 		return_response.success = false;
 		return_response.message.push(err);

 		response.send(return_response);
 	});
 };

 module.exports = {
 	createUser	,
 	createCredential
 };
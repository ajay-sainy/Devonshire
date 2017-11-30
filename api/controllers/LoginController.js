 const NO_USER_ID = "Please enter user id";
 const NO_PASSWORD = "Please enter password";
 const UNSUCCESSFUL_LOGIN = "Invalid user id or password";
 const TECHNICAL_ERROR_MSG = "Could not log you in. Please try again. If the problem persist, please contact customer care.";


 const login = function (request, response) {

 	var userid = request.param("userid");
 	var password = request.param("password");
 	
 	sails.log("UserId - "+userid);
 	sails.log("Password - "+password);

 	var return_response = {
 		"message" : [],
 		"data" : {}
 	};

 	//Validataion
 	var temp_error = [];

 	if(!userid) {
 		temp_error.push(NO_USER_ID);
 	}

 	if(!password) {
 		temp_error.push(NO_PASSWORD);
 	}

 	if(temp_error.length!=0) {
 		return_response.message = temp_error;
 		response.status(401);
 		response.send(return_response);
 		return;
 	}

 	//Valid request
 	loginHelper(userid,password)
 	.then(function() {

 		//Logged in successfully 		
		sails.log("User authenticated successfully");

		//TO DO - Fetch userdetails
		response.status(200);
		return_response.message.push("User authenticated, now fetch user details and return that");
		response.send(return_response);
 		
 	})
 	.catch(function (err) {
 		response.status(500);
 		temp_error.push(err);
 		return_response.message.push(temp_error);
 		response.send(return_response);
 	});
 };


 //TODO - password encrypt
 const loginHelper= function(userid,password) {
 	return new Promise(function(resolve, reject) {
 
 		User.findOne({ where: {userid:userid,password:password}, limit: 1,select:['userid']}).exec(function (db_err,db_resp) {
 			if (db_err) {
 				sails.log("Error occured "+db_err);
 				return reject(TECHNICAL_ERROR_MSG);
 			}
 			sails.log.debug("DB response "+db_resp);
 			//If db response contains id, credential correct  			
 			if(db_resp) {
 				return resolve();
 			} else {
 				return reject(UNSUCCESSFUL_LOGIN); //TODO - proper message
 			}
 			
 		});
 	});
 };

 module.exports = {
 	login, 	
 };
 const NO_USER_ID = "Please enter user id";
 const NO_PASSWORD = "Please enter password";
 const UNSUCCESSFUL_LOGIN = "Invalid user id or password";
 const TECHNICAL_ERROR_MSG = "Could not log you in. Please try again. If the problem persist, please contact customer care.";


 const login = function(request, response) {

   var return_response = {
     "message": [],
     "success": false
   };

   var username = request.param("username");
   var password = request.param("password");

   var params = {
     username: username,
     password: password
   };

   //Validataion
   var validateResponse = LoginService.validateLogin(params);

   if (validateResponse.error.length != 0) {
     sails.log("User login validation error");
     return_response.success = false;
     return_response.message = validateResponse.error;

     response.status(401);
     response.send(return_response);
     return;
   }

   //Valid request
   LoginService.loginHelper(params)
     .then(function(userid) { return SessionService.setSession(userid); })
     .then(function(sessionParam) {

       //Logged in successfully
       sails.log("User authenticated successfully");

       //TO DO - Fetch userdetails
       return_response.success = true;
       return_response.message.push(sessionParam.userid);

       //Add session
       request.session.userid = sessionParam.userid;
       request.session.token = sessionParam.token;

       //response.cookie('token', 'asd');
       //response.cookie('userid', 'ididid');

       response.status(200);
       response.send(return_response);
     })
     .catch(function(err) {
       sails.log.error("User login failed. error - " + err);

       return_response.success = false;
       return_response.message.push(err);
       response.status(500);
       response.send(return_response);
     });
 };

 module.exports = {
   login
 };

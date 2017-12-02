const CREDENTIALS_CREATED = "User credentials created successfully";
const USER_CREATED = "User created successfully";

const enrollUser = function(request, response) {

  var return_response = {
    "message": [],
    "success": false
  };  

  var params = {
       username : request.param("username"),
       password : request.param("password"),
       confirmPassword : request.param("confirmPassword"),
       userid : request.param("userid"),

       q1 : request.param("q1"),
       q2 : request.param("q2"),
       q3 : request.param("q3"),

       a1 : request.param("a1"),
       a2 : request.param("a2"),
       a3 : request.param("a3")
  };

  var validateResponse = UserService.validateEnroll(params);

  //Validation fails
  if (validateResponse.error.length != 0) {
    return_response.success = false;
    return_response.message = validateResponse.error;

    response.status(400);
    response.send(return_response);

    return;
  }

  //Valid request
  UserService.enrollHelper(params)
    .then(function() {

      //Logged in successfully 		
      sails.log("User enrolled successfully");

      return_response.success = true;
      return_response.message.push(CREDENTIALS_CREATED);

      response.status(200);
      response.send(return_response);
    })
    .catch(function(err) {
      sails.log.error("User enroll failed " + err);

      return_response.success = false;
      return_response.message.push(err);

      response.status(500);
      response.send(return_response);
    });
};

/** User details creations **/
const createUser = function(request, response) {

  var return_response = {
    "message": [],
    "success": false
  };

  var fname = request.param("fname");
  var lname = request.param("lname");
  var dob = request.param("dob");
  var phone = request.param("phone");
  var type = request.param("type");
  var email = request.param("email");

  var params = {
    fname: fname,
    lname: lname,
    dob: dob,
    phone: phone,
    type: type,
    email: email
  };

  //Validataion
  var validateResponse = UserService.validateUserDetails(params);

  if (validateResponse.error.length != 0) {
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
    .catch(function(err) {
      sails.log.error("Error occured in createUserHelper" + err);

      return_response.success = false;
      return_response.message.push(err);

      response.status(500);
      response.send(return_response);
    });
};

module.exports = {
  createUser,
  enrollUser
};

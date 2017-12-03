/** Verify Account during enroll **/
const ACCOUNT_VERIFIED = "User verified successfully";
const TECHNICAL_ERROR = "Some technical error occured";

const verifyAccount = function(request, response) {

  var return_response = {
    "message": [],
    "success": false
  };

  var params = {
    accountid: request.param("accountid"),
    pin: request.param("pin"),
    dob: request.param("dob")
  };

  //Validataion
  var validateResponse = AccountService.validateVerifyAccount(params);

  if (validateResponse.error.length != 0) {
    return_response.success = false;
    return_response.message = validateResponse.error;

    response.status(400);
    response.send(return_response);
    return;
  }

  //Valid request
  AccountService.verifyAccountHelper(params)
    .then(function(userid) {

      //Logged in successfully    
      sails.log("Account verified successfully");

      //TO DO - Fetch userdetails
      return_response.success = true;
      return_response.message.push(userid);

      response.status(200);
      response.send(return_response);

    })
    .catch(function(err) {
      sails.log.error("Error occured during account verification " + err);
      response.status(500);

      return_response.success = false;
      return_response.message.push(err);

      response.send(return_response);
    });
};

const getFromAccounts = function(request, response) {

  var return_response = {
    "message": [],
    "success": false
  };

  var params = {
    'userid': request.session.userid,
    'token': request.session.token,
  };

  SessionService.isValidSession(params)
    .then(function() { return AccountService.getAccounts(params.userid); })
    .then(function(return_response) {
      sails.log(return_response);
      response.send(return_response);
      return;
    })
    .catch(function(err) {
      sails.log('Error '+err);
      response.status(500);

      return_response.success = false;
      return_response.message.push(TECHNICAL_ERROR);

      response.send(return_response);
      return;
    });
};

module.exports = {
  verifyAccount,
  getFromAccounts
};

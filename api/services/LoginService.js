const NO_USERNAME = "No username";
const NO_PASSWORD = "No password";
const UNSUCCESSFUL_LOGIN = "Userid or password incorrect";

module.exports = {
  validateLogin: function(params) {
    var username = params.username;
    var password = params.password;

    var result = {
      "error": [],
    };

    if (!username) {
      result.error.push(NO_USERNAME);
    }

    if (!password) {
      result.error.push(NO_PASSWORD);
    }

    return result;
  },

  //TODO - password encrypt
  loginHelper: function(params) {
    return new Promise(function(resolve, reject) {

      Credentials.findOne({ where: params, limit: 1, select: ['userid'] }).exec(function(db_err, db_resp) {
        if (db_err) {
          return reject(db_err);
        }

        //If db response contains id, credential correct  		 			
        if (db_resp)
          return resolve(db_resp.userid);

        return reject(UNSUCCESSFUL_LOGIN); //TODO - proper message

      });
    });
  }
};

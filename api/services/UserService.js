const NO_USERNAME = "No username";
const NO_PASSWORD = "No password";
const NO_USERID = "No userid";
const NO_FIRSTNAME = "No first name";
const NO_LASTNAME = "No lastname";
const NO_DOB = "No dob";
const NO_PHONE = "No phone";
const NO_TYPE = "No user type";
const NO_EMAIL = "No email";

module.exports = {
  validateCredentials: function(params) {
    var result = {
      "error": [],
    };

    var username = params.username;
    var password = params.password;
    var userid = params.userid;

    //Validataion
    if (!username) {
      result.error.push(NO_USERNAME);
    }

    if (!password) {
      result.error.push(NO_PASSWORD);
    }

    //TODO - Make foreign key validation here
    if (!userid) {
      result.error.push(NO_USERID);
    }

    return result;
  },

  createCredentialsHelper: function(params) {
    return new Promise(function(resolve, reject) {
      Credentials.create(params).exec(function(db_err, db_resp) {
        if (db_err) {
          return reject(db_err);
        }

        return resolve();

      });
    });
  },

  validateUserDetails: function(params) {
    var result = {
      "error": [],
    };

    var fname = params.fname;
    var lname = params.lname;
    var dob = params.dob;
    var phone = params.phone;
    var type = params.type;
    var email = params.email;

    if (!fname) {
      result.error.push(NO_FIRSTNAME);
    }

    if (!lname) {
      result.error.push(NO_LASTNAME);
    }

    if (!dob) {
      result.error.push(NO_DOB);
    }

    if (!phone) {
      result.error.push(NO_PHONE);
    }

    if (!type) {
      result.error.push(NO_TYPE);
    }

    if (!email) {
      result.error.push(NO_EMAIL);
    }

    return result;

  },

  createUserHelper: function(params) {
    return new Promise(function(resolve, reject) {

      Users.create(params).exec(function(db_err, db_resp) {
        if (db_err) {          
          return reject(db_err);
        }

        return resolve();

      });
    });
  }
};

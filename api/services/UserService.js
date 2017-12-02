const NO_USERNAME = "No username";
const NO_PASSWORD = "No password";
const NO_CONFIRM_PASSWORD = "No confirmPassword";
const PASSWORD_NOT_MATCH = "Password does not match with confirm password";
const NO_Q1 = "Question 1 not selected";
const NO_Q2 = "Question 1 not selected";
const NO_Q3 = "Question 1 not selected";
const NO_A1 = "Answer 1 not provided";
const NO_A2 = "Answer 2 not provided";
const NO_A3 = "Answer 3 not provided";
const NO_USERID = "No userid";
const NO_FIRSTNAME = "No first name";
const NO_LASTNAME = "No lastname";
const NO_DOB = "No dob";
const NO_PHONE = "No phone";
const NO_TYPE = "No user type";
const NO_EMAIL = "No email";

module.exports = {
  validateEnroll: function(params) {
    var result = {
      "error": [],
    };

    var username = params.username;
    var password = params.password;
    var confirmPassword = params.confirmPassword;
    var userid = params.userid;
    var q1 = params.q1;
    var q2 = params.q2;
    var q3 = params.q3;
    var a1 = params.a1;
    var a2 = params.a2;
    var a3 = params.a3;

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

    if (!confirmPassword) {
      result.error.push(NO_CONFIRM_PASSWORD);
    }

    if (password !== confirmPassword) {
      result.error.push(PASSWORD_NOT_MATCH);
    }

    if (q1 === 'Security Question 1') {
      result.error.push(NO_Q1);
    }

    if (q2 === 'Security Question 2') {
      result.error.push(NO_Q2);
    }

    if (q3 === 'Security Question 3') {
      result.error.push(NO_Q3);
    }

    if (!a1) {
      result.error.push(NO_A1);
    }

    if (!a2) {
      result.error.push(NO_A2);
    }

    if (!a3) {
      result.error.push(NO_A3);
    }

    return result;
  },

  enrollHelper: function(params) {
    return new Promise(function(resolve, reject) {
      Credentials.create({ 'username': params.username, 'password': params.password, 'type': 'user', 'userid': params.userid, 'active': true }).exec(function(db_err, db_resp) {
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

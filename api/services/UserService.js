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
      result.error.push("No username");
    }

    if (!password) {
      result.error.push("No password");
    }

    //TODO - Make foreign key validation here
    if (!userid) {
      result.error.push("No userid");
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
      result.error.push("No first name");
    }

    if (!lname) {
      result.error.push("No last name");
    }

    if (!dob) {
      result.error.push("No dob");
    }

    if (!phone) {
      result.error.push("No phone");
    }

    if (!type) {
      result.error.push("No type");
    }

    if (!email) {
      result.error.push("No email");
    }

    return result;

  },

  createUserHelper: function(params) {
    return new Promise(function(resolve, reject) {

      Users.create(params).exec(function(db_err, db_resp) {
        if (db_err) {
          sails.log("Error occured in createHelper " + db_err);
          return reject(db_err);
        }

        return resolve();

      });
    });
  }
};

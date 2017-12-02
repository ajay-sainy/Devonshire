const NO_ACCOUNT_NO = "No account number";
const NO_PIN = "No pin";
const NO_DOB = "No dob";
const ACCOUNT_NOT_FOUND = "Provided detail is not present in our database";

module.exports = {

  // Method to check valid verify request during enroll.
  validateVerifyAccount: function(params) {
    var result = {
      "error": [],
    };

    var accountid = params.accountid;
    var dob = params.dob;
    var pin = params.pin;

    //Validataion
    if (!accountid) {
      result.error.push(NO_ACCOUNT_NO);
    }

    if (!dob) {
      result.error.push(NO_DOB);
    }

    //TODO - Make foreign key validation here
    if (!pin) {
      result.error.push(NO_PIN);
    }

    return result;
  },
  verifyAccountHelper: function(params) {
    return new Promise(function(resolve, reject) {
      Accounts.findOne({ where: {'accountid' : params.accountid, 'pin' : params.pin} }).exec(function(db_err, db_resp) {
        if (db_err) {
          return reject(db_err);
        }

        if(db_resp)
        	return resolve();

        return reject(ACCOUNT_NOT_FOUND);


      });
    });
  }
};
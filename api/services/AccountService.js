const NO_ACCOUNT_NO = "No account number";
const NO_PIN = "No pin";
const NO_DOB = "No dob";
const ACCOUNT_NOT_FOUND = "Provided detail is not present in our database";
const INSUFFICIENT_FUND = "Funds not sufficient";

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
      Accounts.findOne({ where: { 'accountid': params.accountid, 'pin': params.pin }, select: ['userid'] }).exec(function(db_err, db_resp) {
        if (db_err) {
          return reject(db_err);
        }

        if (db_resp)
          return resolve(db_resp.userid);

        return reject(ACCOUNT_NOT_FOUND);


      });
    });
  },

  getAccounts: function(userid) {
    return new Promise(function(resolve, reject) {
      var query = 'SELECT accounts.accountid, accounts.balance, refaccounts.type FROM accounts ' +
        'LEFT JOIN refaccounts ON accounts.ref_accountid = refaccounts.accounttypeid ' +
        'WHERE accounts.userid = "' + userid + '"';

      Accounts.query(query, function(db_err, db_resp) {
        if (db_err) {
          sails.log("Error in getAccounts " + db_err);
          return reject(db_err);
        }

        if (db_resp) {
          return resolve(db_resp);
        }

        return reject(ACCOUNT_NOT_FOUND);
      });
    });
  },

  transerFunds: function(params) {
    return new Promise(function(resolve, reject) {
      //1. Subtract amount
      //2. Add amount
      //3. Add to transaction
    });
  },

  updateAccountBalance: function(params, add) {
    return new Promise(function(resolve, reject) {
      sails.log("updateAccount start = " + params);
      var query = '';
      if (add) {
        query = 'UPDATE accounts ' +
          'SET balance = balance +' + params.amount + ' ' +
          'WHERE accountid = ' + params.to;
      } else {
        query = 'UPDATE accounts ' +
          'SET balance = balance -' + params.amount + ' ' +
          'WHERE accountid = ' + params.from;
      }
      sails.log("update query " + query);
      Accounts.query(query, function(db_err, db_resp) {
        if (db_err) {
          sails.log('Error in updateAccount - ' + db_err);
          return reject(db_err);
        }

        if (db_resp) {
          sails.log(db_resp);
          return resolve(db_resp);
        }

        return reject(ACCOUNT_NOT_FOUND);
      });
    });
  },

  addToTransaction: function(params) {
    return new Promise(function(resolve, reject) {
      sails.log("addToTransaction start - amount = " + params.amount);
      var row = {
        'from_account': params.from,
        'to_account': params.to,
        'type': params.type,
        'amount': params.amount,
        'category': params.category,
        'debit': params.debit,
      };

      console.log(row);

      Accounts.findOne({ where: { 'accountid': params.from }, select: ['balance'] }).exec(function(db_err, db_resp) {
        if (db_err) {
          sails.log("Error in addToTransaction - " + db_err);
          return reject(db_err);
        }

        if (db_resp) {
          row.balance = db_resp.balance;
          TransactionHistory.create(row).exec(function(db_err1, db_resp1) {
            if (db_err1) {
              sails.log('Error in addToTransaction 1 - ' + db_err1);
              return reject(db_err1);
            }
            return resolve();
          });
        } else {
          return reject(ACCOUNT_NOT_FOUND);
        }
      });
    });
  },

  isTransferValid: function(params) {
    return new Promise(function(resolve, reject) {
      sails.log("isTransferValid start");
      var query = 'SELECT accountid FROM accounts ' +
        'WHERE accountid = "' + params.from + '" ' +
        'AND userid = "' + params.userid + '" AND balance >= ' + params.amount;

      Accounts.query(query, function(db_err, db_resp) {
        if (db_err) {
          sails.log('Error in isTransferValid - ' + db_err);
          return reject(db_err);
        }
        if (db_resp) {
          return resolve(db_resp);
        }
        sails.log('Error in isTransferValid - ' + INSUFFICIENT_FUND);
        return reject(INSUFFICIENT_FUND);
      });
    });
  },

  //Export this error as it is being used in AccountController
  ACCOUNT_NOT_FOUND: ACCOUNT_NOT_FOUND,
  INSUFFICIENT_FUND: INSUFFICIENT_FUND,

};

module.exports = {
  getTransactions: function(accountid) {
    return new Promise(function(resolve, reject) {

      TransactionHistory.find({ where: { 'from_account': accountid } }).exec(function(db_err, db_resp) {
        if (db_err) {
          sails.log("Error in TransactionHistory - " + db_err);
          return reject(db_err);
        }
        return resolve(db_resp);
      });
    });
  }
};

const INVALID_SESSION = "Session invalid";
module.exports = {
  setSession: function(userid) {
    return new Promise(function(resolve, reject) {
      var token = Math.random();
      var sessionParam = { 'userid': userid, 'token': token };
      Sessions.create(sessionParam).exec(function(db_err, db_resp) {
        if (db_err) {
          return reject(db_err);
        }
        sails.log('token' + token);
        return resolve(sessionParam);
      });
    });
  },

  isValidSession: function(params) {

    return new Promise(function(resolve, reject) {
      try {
        
        Sessions.findOne({ where: { 'userid': params.userid, 'token': params.token } }).exec(function(db_err, db_resp) {
          if (db_err) {
            sails.log('error in isValidSession');
            return reject(db_err);
          }
          if (db_resp) {
            return resolve();
          }

          return reject(INVALID_SESSION);
        });
      } catch (e) {
      	sails.log("Exception in isValidSession - "+e);
        return reject(INVALID_SESSION);
      }
    });
  }
};

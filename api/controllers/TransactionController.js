const TECHNICAL_ERROR = "Some technical error occured";
const getTransactionHistory = function(request, response) {

  var return_response = {
    "message": [],
    "success": false
  };

  var params = {
    'userid': request.session.userid,
    'token': request.session.token,
    'accountid' : request.param('accountid')
  };

  SessionService.isValidSession(params)
    .then(function() { return TransactionService.getTransactions(params.accountid); })
    .then(function(fetchedTransactions) {
      fetchedTransactions.forEach(function(transaction) {
        sails.log(transaction);
        var row = {
        	'date' : transaction.createdAt,
        	'desc' : transaction.description,
        	'debit' : transaction.debit,
        	'category' : transaction.category,
        	'balance' : transaction.balance,
        	'amount' : transaction.amount
        };
        return_response.message.push(row);
      });
      return_response.success = true;
      response.status(200);
      response.send(return_response);
      return;
    })
    .catch(function(err) {
      sails.log('Error - ' + err);
      response.status(500);

      return_response.success = false;
      return_response.message.push(TECHNICAL_ERROR);

      response.send(return_response);
      return;
    });
};

module.exports = {
  getTransactionHistory
};

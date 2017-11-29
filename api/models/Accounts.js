module.exports = {
  attributes: {
    accountid: {
      type: 'string',
      primaryKey: true,
      unique: true
    },
    open_date: {
    	type:'datetime'
    },
    close_date: {
    	type:'datetime'
    },
    active: {
      type: 'boolean',
    },
    balance: {
      type: 'float'
    },
    
    user: {
      model: 'Users'
    },  

    account_ref: {
    	model: 'RefAccounts'
    },


    transactions: {
      collection:'TransactionHistory',
      via:'account'
    }

  }
};

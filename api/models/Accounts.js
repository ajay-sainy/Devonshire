module.exports = {
  attributes: {
    accountid: {
      type: 'string',
      primaryKey: true,
      unique: true,
      required: true,
      autoIncrement: true
    },
    open_date: {
    	type:'datetime',
      required: true
    },
    close_date: {
    	type:'datetime',
      required: true
    },
    active: {
      type: 'boolean',
      required: true
    },
    balance: {
      type: 'float',
      required: true
    },
    
    user: {
      model: 'Users',
      required: true
    },  

    account_ref: {
    	model: 'RefAccounts',
      required: true
    },


    transactions: {
      collection:'TransactionHistory',
      via:'account'
    }

  }
};

module.exports = {
  attributes: {
  	accountTypeId: {
	    type: 'string',
	    primaryKey: true,
	    unique: true,
	    size:20
	},
	type: {
		type: 'string',
		size:20
	},
	minBalance: {
		type:'integer',
		size:5
	},	
	
	accounts: {
		collection: 'Accounts',
      	via: 'account_ref'
	}
  }
};
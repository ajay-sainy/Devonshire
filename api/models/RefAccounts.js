module.exports = {
  attributes: {
  	accountTypeId: {
	    type: 'string',
	    primaryKey: true,
	    unique: true,
	    size:20,
	    required: true,
	    autoIncrement:true
	},
	type: {
		type: 'string',
		size:20,
		required: true
	},
	minBalance: {
		type:'integer',
		size:5,
		required: true
	},	
	
	accounts: {
		collection: 'Accounts',
      	via: 'account_ref'
	}
  }
};
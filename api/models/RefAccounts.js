module.exports = {
  attributes: {
  	accountTypeId: {
	    type: 'integer',
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
	}
  }
};
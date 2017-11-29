module.exports = {
  attributes: {
  	userid: {
	    type: 'string',
	    primaryKey: true,
	    unique: true,
	    size:20
	  },
	password: {
		type: 'string',
		size:20
	},
	type: {
		type:'string',
		size:10
	},
	active: {
		type:'boolean',
		size:'5'
	}
  }
};


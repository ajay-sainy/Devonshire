module.exports = {
  attributes: {
  	username: {
	    type: 'string',
	    primaryKey: true,
	    unique: true,
	    size:20,
	    required: true
	},
	password: {
		type: 'string',
		size:20,
		required: true
	},
	type: {
		type:'string',
		size:10,
		required: true
	},
	active: {
		type:'boolean',
		required: true		
	},

	userid: { //Foreign key
		type:'string',
		required:true,
		size:20,
	}
  }
};


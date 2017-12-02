module.exports = {
  attributes: {
  	payeeid: {
	    type: 'integer',
	    primaryKey: true,
	    unique: true,
	    
	    autoIncrement:true
	 },
	 type: {
	 	type:'string',
	 	size:20,
		required: true
	 },
	fname: {
		type: 'string',
		size: 50,
		required: true,
	},
	lname: {
		type: 'string',
		size: 50,
		required: true,
	},
	phone: {
		type: 'string',
		size:11,
		required: true,
	},
	email: {
		type: 'string',
		size: '20',
		required: true,
	}
  }
};


/**
 * UserDetails.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	userid: {
	    type: 'string',
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
	dob: {
		type: 'string',
		size:11,
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
	},

	accounts: {
      collection: 'Accounts',
      via: 'user'
    },

    addresses: {
    	collection: 'Addresses',
      	via: 'user'	
    },

    credentials: {
    	collection: 'Credentials',
    	via:'userid'
    }
  }
};


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
	    unique: true
	 },
	 type: {
	 	type:'string',
	 	size:20
	 },
	fname: {
		type: 'string',
		size: 50
	},
	lname: {
		type: 'string',
		size: 50
	},
	dob: {
		type: 'string',
		size:11
	},
	phone: {
		type: 'string',
		size:11
	},
	email: {
		type: 'string',
		size: '20'
	},

	accounts: {
      collection: 'Accounts',
      via: 'user'
    },

    addresses: {
    	collection: 'Addresses',
      	via: 'user'	
    }
  }
};


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
	fname: {
		type: 'string' 
	},
	lname: {
		type: 'string' 
	},
	dob: {
		type: 'string' 
	},
	phone: {
		type: 'string' 
	}
  }
};


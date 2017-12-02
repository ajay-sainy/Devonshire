	/**
 * UserDetails.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	userid: {
	    type: 'integer',
	    primaryKey: true,
	    unique: true,
	    size:20,
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
	}
  }
};


module.exports = {
  attributes: {
  	ref_questionid: {
	    type: 'integer',
	    primaryKey: true,
	    unique: true,	    
	    autoIncrement:true
	 },
	 question: {
	 	type:'string',
	 	size:100,
		required: true
	 }
  }
};


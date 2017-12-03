module.exports = {
	attributes : {
		userid: {
			type:'integer',
			size:20,
			required:true
		},
		token : {
			type:'string',
			size:256,
			required : true,
		}
	}
};

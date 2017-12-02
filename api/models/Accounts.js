module.exports = {
  attributes: {
    accountid: {
      type: 'string',      
      unique: true,
      required: true,
      size:20      
    },
    open_date: {
    	type:'datetime',
      required: true
    },
    close_date: {
    	type:'datetime',
      required: true
    },
    active: {
      type: 'boolean',
      required: true
    },
    balance: {
      type: 'float',
      required: true
    },
    
    userid: { //Foreign key
      type: 'integer',
      required: true,
      size:20
    },  
    pin : {
      type:'string',
      size:10
    },
    account_ref: { //Foreign key
    	type: 'integer',
      required: true
    }
  }
};

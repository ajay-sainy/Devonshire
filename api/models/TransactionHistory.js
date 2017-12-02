module.exports = {
  attributes: {
    transactionid:{
      type:'string',
      size:20,
      required: true,
      unique:true,
      autoIncrement:true,
      primaryKey: true
    },
    type: {
      type:'string',
      size:20,
      required: true
    },
    from_account: {
      type: 'string',
      size:20,
      required: true
    },
    payeeid: {
      type:'integer',
      size:20
    },
    amount: {
      type: 'double',
      required: true
    }    
  }
};

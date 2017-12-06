module.exports = {
  autoPK: true,
  attributes: {
    transactionid:{
      type:'integer',
      size:20,      
      unique:true,
      autoIncrement:true,
      primaryKey: true      
    },
    type: {
      type:'string',
      size:20,
      required: true
    },
    category: {
      type:'string',
      size:50,
      required: true
    },
    debit : {
      type:'boolean',
      required : true
    },
    from_account: {
      type: 'string',
      size:20,
      required: true
    },
    to_account: {
      type: 'string',
      size:20,
      required:true
    },
    payeeid: {
      type:'integer',
      size:20
    },
    description: {
      type:'string',
      size:100
    },
    amount: {
      type: 'string',
      required: true
    },
    balance : {
      type: 'string',
      required:true
    }
  }
};

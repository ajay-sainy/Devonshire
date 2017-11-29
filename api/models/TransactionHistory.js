module.exports = {
  attributes: {
    transactionid:{
      type:'string',
      size:20
    },
    type: {
      type:'string',
      size:20
    },
    from_account: {
      type: 'string',
      size:20
    },
    to_account: {
      type:'string',
      size:20
    },
    amount: {
      type: 'double'
    },
    
    account: {
      model:'Accounts'
    }
  }
};

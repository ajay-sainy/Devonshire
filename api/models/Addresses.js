module.exports = {
  attributes: {
    addressid: {
      type: 'string',
      primaryKey: true,
      unique: true
    },
    type: {
      type:'string',
      size:20
    },
    line1 : {
      type:'string',
      size:20
    },
    line2 : {
      type:'string',
      size:20
    },
    city: {
      type:'string',
      size:20
    },
    zipcode: {
      type:'string',
      size:20
    },
    country: {
      type:'string',
      size:20
    },    
    state: {
      type:'string',
      size:20
    },
    
    address_ref : {
      model: 'RefAddresses'
    },    
    
    user: {
      model: 'Users'
    }
  }
};

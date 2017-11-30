module.exports = {
  attributes: {
    addressid: {
      type: 'string',
      primaryKey: true,
      unique: true,
      required: true,
      autoIncrement: true
    },
    type: {
      type:'string',
      size:20,
      required: true,
    },
    line1 : {
      type:'string',
      size:20,
      required: true,
    },
    line2 : {
      type:'string',
      size:20,      
    },
    city: {
      type:'string',
      size:20,
      required: true,
    },
    zipcode: {
      type:'string',
      size:6,
      required: true,
    },
    country: {
      type:'string',
      size:20,
      required: true,
    },    
    state: {
      type:'string',
      size:20,
      required: true,
    }, 
    
    user: {
      model: 'Users',
      required: true,
    }
  }
};

module.exports = {
  attributes: {
    questionid: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    ref_questionid: {
      type: 'integer',
      size: 20,
      required: true
    },
    answer: {
      type: 'string',
      size: 20,
      required: true,
    },
    userid: {
      type: 'integer',
      size: 20,
      required: true,
    }
  }
};

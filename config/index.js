module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
  useNewUrlParserL true,
  useFindAndModify: true,
  useUnifiedTopology: true
});
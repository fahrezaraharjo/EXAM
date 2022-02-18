var mongoose = require('mongoose');
// var Loc = mongoose.model('Location');

var sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};
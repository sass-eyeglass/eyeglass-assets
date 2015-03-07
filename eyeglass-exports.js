'use strict';

var path = require('path');

module.exports = function(eyeglass, sass) {
  return {
    functions: {
      'asset-url($path)': function(path, done) {
        done(sass.types.String("url(" + path.getValue() + ")"));
      }
    }
  };
};

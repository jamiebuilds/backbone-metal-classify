var Metal = require('backbone-metal');
var _ = require('underscore');

module.exports = function classify(target) {
  if (target.prototype instanceof Metal.Class) {
    return target;
  }

  return Metal.Class.extend(
    _.extend({ constructor: target },
      _.omit(target.prototype, _.keys(Metal.Class.prototype))
    ),
    _.omit(target, _.keys(Metal.Class))
  );
};

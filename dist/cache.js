'use strict';

var storage = new Map();

var set = function set(key, value) {
  var ttl = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];

  storage.set(key, {
    time: Date.now(),
    ttl: ttl,
    value: value
  });

  return value;
};

var get = function get(key) {
  var val = storage.get(key);

  if (val !== undefined) {
    var isAlive = Date.now() - val.time <= val.ttl;

    if (isAlive) {
      return val.value;
    } else {
      storage.delete(key);
    }
  }

  return undefined;
};

var del = function del(key) {
  return storage.delete(key);
};
var clear = function clear() {
  return storage.clear();
};

module.exports = {
  get: get,
  set: set,
  del: del,
  clear: clear
};

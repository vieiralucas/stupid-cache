'use strict';

let storage = new Map();

const set = (key, value, ttl = Infinity) => {
  storage.set(key, {
    time: Date.now(),
    ttl: ttl,
    value: value
  });

  return value;
};

const get = key => {
  const val = storage.get(key);

  if (val !== undefined) {
    const isAlive = Date.now() - val.time <= val.ttl;

    if (isAlive) {
      return val.value;
    } else {
      storage.delete(key);
    }
  }

  return undefined;
};

const del = key => storage.delete(key);
const clear = () => storage.clear();

module.exports = {
  get: get,
  set,
  del,
  clear
};

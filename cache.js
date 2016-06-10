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

  if (val !== undefined && (Date.now() - val.time <= val.ttl)) {
    return val.value;
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

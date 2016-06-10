const assert = require('assert');
const cache = require('./cache');

assert.equal(cache.get('key'), undefined);

cache.set('key', 'value', 100);
assert.equal(cache.get('key'), 'value');

setTimeout(() => {
  assert.equal(cache.get('key'), undefined);
}, 200);

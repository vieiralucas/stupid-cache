'use strict';

const assert = require('assert');
const cache = require('./cache');

// get of undefined key works
assert.equal(cache.get('key'), undefined);

// get works
cache.set('key', 'value', 100);
assert.equal(cache.get('key'), 'value');

// ttl works
setTimeout(() => {
  assert.equal(cache.get('key'), undefined);
}, 200);

// del works
cache.set('key2', 'value');
cache.del('key2');
assert.equal(cache.get('key2'), undefined);

// clear works
cache.set('key3', 'value');
cache.set('key4', 'value');
cache.clear();
assert.equal(cache.get('key3'), undefined);
assert.equal(cache.get('key4'), undefined);

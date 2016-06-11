# stupid-cache
A stupid cache implementation

```javascript
const cache = require('stupid-cache');

const ttl = 1000 * 60 * 60 * 2; // 2 hours
// set value
cache.set('key1', 'value1', ttl);

// retrieve value
cache.get('key1'); // => 'value1'

setTimeout(() => {
  cache.get('key1'); // => undefined 'ttl expired'
}, ttl + 1000);

// delete value
cache.set('key2', 'value2'); // => default ttl is Infinity
cache.del('key2'); // deletes value
cache.get('key2'); // => undefined

// clear entire cache
cache.set('key3', 'value3');
cache.set('key4', 'value4');

cache.clear(); // deletes all keys

cache.get('key3'); // => undefined
cache.get('key4'); // => undefined
```

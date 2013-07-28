var byteslice = require('./index')
  , bytewise = require('bytewise')
  , assert = require('assert')
  , eq = assert.deepEqual
  ;

var b = byteslice(['yes', 1])

eq(bytewise.decode(b.encode(['x'])), ['yes', 1, 'x'])
eq(bytewise.decode(b.encode(['x', ['y']])), ['yes', 1, 'x', ['y']])

b = b.concat('no')

eq(bytewise.decode(b.encode(['x'])), ['yes', 1, 'no', 'x'])
eq(bytewise.decode(b.encode(['x', ['y']])), ['yes', 1, 'no', 'x', ['y']])

console.log('all passed.')
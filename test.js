var byteslice = require('./index')
  , bytewise = require('bytewise')
  , assert = require('assert')
  , eq = assert.deepEqual
  , encdec = function (b, x) {eq(x, b.decode(b.encode(x)))}
  ;

var b = byteslice(['yes', 1])

eq(bytewise.decode(b.encode(['x'])), [['yes', 1], ['x']])
encdec(b, ['x'])
eq(bytewise.decode(b.encode(['x', ['y']])), [['yes', 1], ['x', ['y']]])
encdec(b, ['x', ['y']])

b = b.concat(['no'])

eq(bytewise.decode(b.encode(['x'])), [['yes', 1], ['no'], ['x']])
encdec(b, ['x'])
eq(bytewise.decode(b.encode(['x', ['y']])), [['yes', 1], ['no'], ['x', ['y']]])
encdec(b, ['x', ['y']])
console.log('all passed.')
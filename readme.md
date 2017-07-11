## byteslice

[![Greenkeeper badge](https://badges.greenkeeper.io/mikeal/byteslice.svg)](https://greenkeeper.io/)

Simple way to concat and slice arrays through bytewise encoding and decoding.

```javascript
var b = byteslice(['yes', 1])

bytewise.decode( b.encode(['x']) )
// [['yes', 1], ['x']]
b.decode(b.encode(['x']))
// ['x']

bytewise.decode( b.encode(['x', ['y']]) )
// [['yes', 1], ['x', ['y']]]
b.decode(b.encode(['x', ['y']]))
// ['x', ['y']]

b = b.concat(['no', 0])

bytewise.decode( b.encode(['x']) )
// [['yes', 1], ['no', 0], ['x']]
b.decode(b.encode(['x']))
// ['x']

bytewise.decode( b.encode(['x', ['y']]) )
// [['yes', 1], ['no', 0], ['x', ['y']]]
b.decode(b.encode(['x', ['y']]))
// ['x', ['y']]
```

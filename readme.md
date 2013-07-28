## byteslice

Simple way to concat and slice arrays through bytewise encoding and decoding.

```javascript
var b = byteslice(['yes', 1])

bytewise.decode( b.encode(['x']) )
// ['yes', 1, 'x']

bytewise.decode( b.encode(['x', ['y']]), )
// ['yes', 1, 'x', ['y']]

b = b.concat('no')

bytewise.decode( b.encode(['x']) )
// ['yes', 1, 'no', 'x']
bytewise.decode( b.encode(['x', ['y']]) )
// ['yes', 1, 'no', 'x', ['y']]
```
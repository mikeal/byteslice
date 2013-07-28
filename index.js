var bytewise = require('bytewise')

function byteslice (prefix, nowrap) {
  if (!Array.isArray(prefix)) throw new Error('prefix must be an array.')
  if (!nowrap) prefix = [prefix]
  var ret =
    { prefix: prefix
    , _encode: function (enc) { return ret.prefix.concat([enc]) }
    , encode: function (enc) { return bytewise.encode(ret._encode(enc)) }

    , _decode: function (decoded) { return decoded.slice(ret.prefix.length)[0] }
    , decode: function (buffer) { return ret._decode(bytewise.decode(buffer)) }

    , concat: function (arr) { return byteslice(ret.prefix.concat([arr]), true) }
    , bytewise: bytewise
    }
  return ret
}

module.exports = byteslice
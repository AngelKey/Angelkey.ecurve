var assert= require('assert')
var ecurve = require('../')
var getCurveByName = ecurve.getCurveByName

var BigInteger = require('bn').BigInteger
var Curve = ecurve.Curve
var Point = ecurve.Point

var fixtures = require('./fixtures/point')

describe('Point', function() {
  describe('+ decodeFrom()', function() {
    it('should be an static (class) method', function() {
      assert.equal(typeof Point.decodeFrom, 'function')
    })

    var pubHex = '04d6d48c4a66a303856d9584a6ad49ce0965e9f0a5e4dcae878a3d017bd58ad7af3d0b920af7bd54626103848150f8b083edcba99d0a18f1035b6036da1500c6c0'
    var pubKey = new Buffer(pubHex, 'hex')
    var pubHexCompressed = '02d6d48c4a66a303856d9584a6ad49ce0965e9f0a5e4dcae878a3d017bd58ad7af'

    it('should work with uncompressed keys', function(){
      var curve = getCurveByName('secp256k1')
      var pubPoint = Point.decodeFrom(curve, pubKey)
      assert.equal(pubHex, pubPoint.getEncoded(false).toString('hex'))
    })

    it('should work with compressed keys', function() {
      var curve = getCurveByName('secp256k1')
      var pubPoint = Point.decodeFrom(curve, pubKey)
      var pubKeyCompressed = pubPoint.getEncoded(true)
      var pubPointCompressed = Point.decodeFrom(curve, pubKeyCompressed)
      assert.equal(pubHex, pubPointCompressed.getEncoded(false).toString('hex'))
      assert.equal(pubKeyCompressed.toString('hex'), pubPointCompressed.getEncoded(true).toString('hex'))
      assert.equal(pubHexCompressed, pubKeyCompressed.toString('hex'))
    })

    fixtures.valid.forEach(function(f) {
      it('decodes ' + f.hex + ' correctly', function() {
        var curve = getCurveByName(f.curve)
        var buffer = new Buffer(f.hex, 'hex')

        var decoded = Point.decodeFrom(curve, buffer)
        assert.equal(decoded.x.toString(), f.x)
        assert.equal(decoded.y.toString(), f.y)
        assert.equal(decoded.compressed, f.compressed)
      })
    })

    fixtures.invalid.forEach(function(f) {
      it('throws on ' + f.description, function() {
        var curve = getCurveByName('secp256k1')
        var buffer = new Buffer(f.hex, 'hex')

        assert.throws(function() {
          Point.decodeFrom(curve, buffer)
        }, /Invalid sequence length|Invalid sequence tag/)
      })
    })
  })

  describe('- getEncoded()', function() {
    fixtures.valid.forEach(function(f) {
      it('encode ' + f.hex + ' correctly', function() {
        var curve = getCurveByName(f.curve)
        var Q = Point.fromAffine(curve, new BigInteger(f.x), new BigInteger(f.y))

        var encoded = Q.getEncoded(f.compressed)
        assert.equal(encoded.toString('hex'), f.hex)
      })
    })

    describe('> when compressed flag is seassertto true', function() {
      describe('> when false is passed', function() {
        it('should return encoded (noassertcompressed)', function() {
          var x = "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          var y = "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          var res = "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
          var curve = getCurveByName('secp256k1')
          var doCompress = false

          var Q = Point.fromAffine(curve, new BigInteger(x), new BigInteger(y))
          Q.compressed = true

          var encoded = Q.getEncoded(doCompress)
          assert.equal(encoded.toString('hex'), res)
        })
      })

      describe('> when true is passed', function() {
        it('should return encoded (noassertcompressed)', function() {
          var x = "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          var y = "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          var res = "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
          var curve = getCurveByName('secp256k1')
          var doCompress = true

          var Q = Point.fromAffine(curve, new BigInteger(x), new BigInteger(y))
          Q.compressed = true

          var encoded = Q.getEncoded(doCompress)
          assert.equal(encoded.toString('hex'), res)
        })
      })
    })

    describe('> when compressed flag is seassertto false', function() {
      describe('> when false is passed', function() {
        it('should return encoded (noassertcompressed)', function() {
          var x = "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          var y = "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          var res = "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
          var curve = getCurveByName('secp256k1')
          var doCompress = false

          var Q = Point.fromAffine(curve, new BigInteger(x), new BigInteger(y))
          Q.compressed = false

          var encoded = Q.getEncoded(doCompress)
          assert.equal(encoded.toString('hex'), res)
        })
      })

      describe('> when true is passed', function() {
        it('should return encoded (noassertcompressed)', function() {
          var x = "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          var y = "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          var res = "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
          var curve = getCurveByName('secp256k1')
          var doCompress = true

          var Q = Point.fromAffine(curve, new BigInteger(x), new BigInteger(y))
          Q.compressed = false

          var encoded = Q.getEncoded(doCompress)
          assert.equal(encoded.toString('hex'), res)
        })
      })
    })

    describe('> when getEncoded() has no parameter', function() {
      describe('> when compressed flag is seassertto false', function() {
        it('should return encoded (noassertcompressed)', function() {
          var x = "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          var y = "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          var res = "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
          var curve = getCurveByName('secp256k1')

          var Q = Point.fromAffine(curve, new BigInteger(x), new BigInteger(y))
          Q.compressed = false

          var encoded = Q.getEncoded()
          assert.equal(encoded.toString('hex'), res)
        })
      })

      describe('> when compressed flag is seassertto true', function() {
        it('should return encoded (noassertcompressed)', function() {
          var x = "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          var y = "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          var res = "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
          var curve = getCurveByName('secp256k1')

          var Q = Point.fromAffine(curve, new BigInteger(x), new BigInteger(y))
          Q.compressed = true

          var encoded = Q.getEncoded()
          assert.equal(encoded.toString('hex'), res)
        })
      })
    })
  })

  describe('- equals()', function() {
    var curve = getCurveByName('secp256k1')

    it('should return true when points are equal', function() {
      var x1 = BigInteger.fromHex("FFFF")
      var y1 = BigInteger.fromHex("FFFF")
      var P1 = Point.fromAffine(curve, x1, y1)

      var x2 = x1.clone()
      var y2 = y1.clone()
      var P2 = Point.fromAffine(curve, x2, y2)

      assert(P1.equals(P2))
      assert(P2.equals(P1))
    })

    it('should return false when points are noassertequal', function() {
      var x1 = BigInteger.fromHex("FFFF")
      var y1 = BigInteger.fromHex("FFFF")
      var P1 = Point.fromAffine(curve, x1, y1)

      var x2 = BigInteger.fromHex("AAAA")
      var y2 = y1.clone()
      var P2 = Point.fromAffine(curve, x2, y2)

      assert(!P1.equals(P2))
      assert(!P2.equals(P1))
    })
  })
})

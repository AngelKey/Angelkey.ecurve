##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTm1tgAAoJEJgKPw0B/gTfZpUH/ROLrtxkpvu92BvzZg2qER7z
0Q9wCCU7SOUmVLOOpgoPUTJotSo0cTGLdl9SuCGExa46V4JwQJo2sKCCILl8pbSY
TLMGuZ839SIYhoknDxajCgf0pKMJc/KyyQLvkILfx9RUUWY/hl7s4GAyQAvI4y72
SackerlShJixGIsJt5zuKYkSjd8+lS+RcHrSHWzVz3lKkwr2B+eJrQ92DDXYmh2c
GzUUV+ycr9LnnPVY8UwGA0/2uURcqgilPpKChm90YEyhCIG+KPONz3OvB1SX0UMf
ucZ8pAWf274HKQSxAhqDWECKhhVhHNvPOakWCB3byarRDHvc1nAAI745gJz9NVg=
=boGM
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file               contents                                                        
            ./                                                                                 
33            .gitignore       044a875c16eed65b7485565a6eef29167ffab92b5ee4247a5e9f3b8203faf405
103           .min-wd          5b779cd77bc3f45bce80c1f7d4aeea4b11ff874e6eafebd2ebac6657c378e219
72            .npmignore       013421fd6eee4c2812a4342b3c944349b1f64ee94f3eeaa152825003731a4181
172           .travis.yml      51a676eeaf009d3eea6773b6efc828f4807185cd950895a85b865fdf51758c45
4623          CHANGELOG.md     3e4dcf1938585dd3ac2ba0bca5a1f9db83feec4f9d8833a9f4a477cd4bcae397
159           Makefile         26c6343df0ac899866055d5ebf76251b81bf93581a81a31cb9a0dc2ae6c9ba59
599           README.md        bb8247bf8afff378db42dea36408955b4c7b9b07407689ecc212be21f3363d01
              lib/                                                                             
1462            curve.js       d45bfb32033dc71ac7d39f6f2d5de9e5332520ce3540ca540c919c86f77175c6
190             index.js       c5bd5761f0fdbd7a11d0755e33bc36cd15ed78b3089f9c92ac3d929ec2828cba
4734            names.js       a041265ec0f3dddd212bb9285edea3bac72eaebede3c5354213bf38e040ed7c9
6901            point.js       906616ecbb91315c47ae561262d8a02b897760f469a4d5a4671625e4e38e90ff
1140          package.json     6eb33f01db5d15e5650103a240d9f8efe6444d4702b27f5dc4dca2d6e5865a96
276           patch.sh         378e7b47c88c843a39ad22d0017f7bb98f783d5891553f1054cd6cab6ba4fc1f
              test/                                                                            
8817            curve.test.js  32420fd56b6d7906fb6a8fa8fca6ede5f3b09fa49f1ea40054217b24fc3dd8ce
                fixtures/                                                                      
932               curve.json   5ec54a330cfca970f7953616bd3d3426e1792b1345a8cb030b0b99ca5e79c853
3674              point.json   83f68fcf38b49766031e7ffc4b458a4c3d50fd4600e705be875e01b1c01a19af
39              mocha.opts     74ff3e60361757523c9cacc452540490fb2deec1bace92f82b12c06702a4e1ba
1513            names.test.js  d4c9826f92e467658a4ffe0de6c5718e378713a0c82386a0b672ab00dfef27f5
8230            point.test.js  9d679f4441a4cdf3fb48068b522de6f768b140ed836644d16c9fdb858b49a6c3
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing
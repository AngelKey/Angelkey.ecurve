#!/bin/sh

# Run this on fresh checkout for our patches...

FIND="require('bigi')"
REPLACE="require('bn').BigInteger"
regex="s/${FIND}/${REPLACE}/"

find test lib -type f -regex '.*\.js' -exec sed -i.bak ${regex} {} \;
find test lib -type f -regex '.*\.js.bak' -exec rm {} \;

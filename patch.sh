#!/bin/sh

FIND="require('bigi')"
REPLACE="require('bn').BigInteger"
regex="s/${FIND}/${REPLACE}/"

sed -i.bak ${regex} lib/*.js
rm lib/*.js.bak

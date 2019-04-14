#!/bin/bash

SCRIPTS_JSON=$1
PACKAGE=$PWD/package.json
ORIG=${PACKAGE}.orig

cp $PACKAGE $PACKAGE.orig
jq -s add $SCRIPTS_JSON $ORIG > $PACKAGE

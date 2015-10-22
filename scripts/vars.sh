#!/usr/bin/env bash

ORG="bower-registry"
NAME=$(echo 'console.log(require("./package.json").name)' | node)
REPO="$NAME"
DESC=$(echo 'console.log(require("./package.json").description)' | node)
HOMEPAGE=$(echo 'console.log(require("./package.json").homepage)' | node)
VERSION=$(echo 'console.log(require("./package.json").version)' | node)

echo ORG=$ORG
echo NAME=$NAME
echo REPO=$REPO
echo DESC=$DESC
echo HOMEPAGE=$HOMEPAGE
echo VERSION=$VERSION

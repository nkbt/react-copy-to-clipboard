#!/usr/bin/env bash

. $(dirname $0)/vars.sh

echo
read -p "Register $NAME on Bower with repo http://github.com/$ORG/$REPO? [y/N] " REPLY
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
  exit 0
fi

bower register $NAME https://github.com/$ORG/$REPO.git

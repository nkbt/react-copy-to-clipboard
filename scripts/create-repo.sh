#!/usr/bin/env bash

. $(dirname $0)/vars.sh

echo
read -p "Create new repository http://github.com/$ORG/$REPO? [y/N] " REPLY
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
  exit 0
fi

# Run only once to create repo (need ~/.github/github.token available)
curl -i -X POST https://api.github.com/orgs/$ORG/repos -H "Authorization: token `cat ~/.github/github.token`" \
  --data "{\"name\":\"$REPO\",\"description\":\"$DESC\",\"homepage\":\"$HOMEPAGE\",\"private\":false,\"has_issues\":true,\"has_wiki\":false,\"has_downloads\":false}"

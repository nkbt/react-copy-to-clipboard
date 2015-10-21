#!/usr/bin/env bash

. $(dirname $0)/vars.sh

echo
read -p "Publish $NAME@$VERSION to http://github.com/$ORG/$REPO? [y/N] " REPLY
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
  exit 0
fi

pushd .
rm -rf /tmp/$ORG/$REPO
mkdir -p /tmp/$ORG/$REPO
git clone git@github.com:$ORG/$REPO.git /tmp/$ORG/$REPO
npm run build
cp -f ./build/* /tmp/$ORG/$REPO
cp -f ./bower.json /tmp/$ORG/$REPO
cd /tmp/$ORG/$REPO
git add .
git commit -m "Release $VERSION"
bower version $VERSION
git push && git push --tags
popd


#!/bin/sh


echo `npm install`
if [ -e private.json ]
then
echo "private.json found starting bot."
echo `npm start`
else
echo "no private.json found"
echo "put your token here";
read TOKEN;
cat >./private.json <<EOF
	{
		"token": "$TOKEN"
	}
EOF
echo "private.json created with token ${TOKEN}"
echo "starting Bot"
echo `npm start`
fi
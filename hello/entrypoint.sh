#!/bin/sh

set -e

echo "The app is starting ..."

source /vault/secrets/config 

yarn run start

#!/usr/bin/env bash

set -ex

export NODE_ENV=develop
export REACT_APP_NOT_SECRET_CODE=TEST123

yarn clean

yarn develop

#!/usr/bin/env bash

set -ex

yarn clean
yarn build

firefox http://localhost:9000/zh/ &

yarn serve

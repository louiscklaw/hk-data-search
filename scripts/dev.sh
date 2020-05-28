#!/usr/bin/env bash

set -ex

nodemon -w src --exec scripts/_dev_build.sh

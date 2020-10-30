#!/usr/bin/env bash
cd `dirname "$BASH_SOURCE"`/..
rm -rf dist/*.{html,js,ts} node_modules/ package-lock.json main.ts

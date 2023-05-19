#! /bin/bash

if [ -z "$1"]; then
    echo "----------- Error: Please provide a filename -----------"
    exit 1
fi

if [ -d "content/blog/$1" ]; then
  echo " ----------- Error: Directory already exists -----------"
  exit 1
fi

echo "Creating template for file: $1"
mkdir -p "content/blog/$1"
touch "content/blog/$1/index.md"

echo "---
title: '$1'
date: $(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ" | sed 's/NZ/Z/g')
tags: []
---

### overview

### a

### b

" >> "content/blog/$1/index.md"

echo " ----------- success! post = $1 -----------"
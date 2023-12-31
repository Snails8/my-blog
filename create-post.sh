#! /bin/bash
post_path="_posts"

# 引数が提供されていない場合のエラーチェック
if [ -z "$1" ]; then
    echo "----------- Error: Please provide a filename: sh create-post.sh filename -----------"
    echo "----------- please run : sh create-post.sh filename -----------"
    exit 1
fi

# ファイル名を YYYYMMDD_引数 の形式で生成
filename=$(date -u +"%Y%m%d")_$1.md

# 既に同名のディレクトリが存在するかどうかのチェック
if [ -d "$post_path/$filename" ]; then
  echo " ----------- Error: Directory already exists: "$post_path/$filename" -----------"
  exit 1
fi

echo "Creating template for file: $filename"
# mkdir -p "$post_path/$filename"
touch "$post_path/$filename"

echo "---
title: '$1'
excerpt: ''
coverImage: ''
date: '$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ" | sed 's/NZ/Z/g')'
tags: []
---

### overview

### a

### b

" >> "$post_path/$filename"

echo " ----------- success! post = $filename -----------"

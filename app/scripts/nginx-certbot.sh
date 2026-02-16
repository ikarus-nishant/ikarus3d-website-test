#!/bin/sh

apk add certbot certbot-nginx 
certbot -d "ikarus3d.com" -m "ikarus.nest@ikarus3d.com" -y

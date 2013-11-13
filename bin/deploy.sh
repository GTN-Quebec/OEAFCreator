#!/bin/sh

# Copy all the files into a folder that is accessible via a web server (like Apache, Tomcat, etc.).

: ${OEAF_CREATOR_WWW:?'Need to set OEAF_CREATOR_WWW environment variable before depoying.'}

rsync -tr src/* $OEAF_CREATOR_WWW/

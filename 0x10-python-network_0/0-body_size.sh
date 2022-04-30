#!/bin/bash
# send a request to that URL and display the size of the body
curl -sLI -- "$1" | grep -i 'content-length' | tr -s '\t ' ' ' | cut -d ' ' -f 2

#!/bin/bash
# send a POST request to a URL and display the body
curl -sL -d 'email=hr@holbertonschool.com'  -d 'subject=I will always be here for PDL' -- "$1"

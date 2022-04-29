#!/usr/bin/python3
'''
send an email to URL using POST request and display the response body
'''

import sys
import requests

if __name__ == '__main__':

    if len(sys.argv) != 3:
        print('Usage: ', __file__, 'URL', 'email', file=sys.stderr)
        sys.exit(1)

        resp = requests.post(sys.argv[1], data={'email': sysargv[2]})
        print(resp.text)

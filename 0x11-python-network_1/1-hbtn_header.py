#!/usr/bin/python3
'''
makes a request to a URL and displays the values of id header
'''

import sys
from urllib.request import urlopen

if __name__ == '__main__':

    if len(sys.argv) != 2:
        print('Usage: ', __file__, 'URL', file=sys.stderr)
        sys.exit(2)

        with urlopen(sys.argv[1]) as resp:
            print(resp.getheader('X-request-Id'))

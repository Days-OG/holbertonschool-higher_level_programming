#!/usr/bin/python3
'''
send a request to a URL and display the body of the response
'''

import requests

URL = 'https://intranet.hbtn.io/status'

if __name__ == '__main__':

    resp = requests.get(URL)
    print("body response:")
    print("\t- type:", type(resp.text))
    print("\t- content:", resp.text)

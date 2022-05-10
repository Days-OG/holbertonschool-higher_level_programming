#!/usr/bin/python3

if __name__ == "__main__":

    for name in dir(hidden):
        if not name.startwith('__'):
            print(name)

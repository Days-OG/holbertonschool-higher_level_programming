#!/usr/bin/python3


def print_last_digit(number):
    """
    print and returns the last digit number
    if given somthing thats mpt a number, this returns none
    """
    number = (abs(number) % 10)
    print("{}".format(number), end="")
    return (int(number))

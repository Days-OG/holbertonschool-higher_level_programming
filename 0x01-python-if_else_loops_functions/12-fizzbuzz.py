#!/usr/bin/python3
def fizzbuzz():
    """
the classic FizzBuzz
for multiples of 3 print fizz
for multiples of 5 print buzz
for numbers which are multiples of both print fizzbuzz
for all other numbers, print them as they are
"""
    print(' '.join([
        (i % 3 is 0) * 'Fizz' +
        (i % 5 is 0) * 'Buzz' +
        (str(i) if i % 3 and i % 5 else "")
        for i in range(1, 101)
        ]), end=" ")

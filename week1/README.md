## Quicksort

Run with command

`node quicksort.js`

to run 10 iterations of sorting a table of size 1000000 with random numbers between 0-1000000 in it.

Alternatively run with parameters 

`node quicksort.js a b`

where a is an integer deciding the size of the array and b is and integer of the maximum value of the numbers in the table.

After running it prints 
 - average of the duration of each run the algorithm. 
 - average of the amount of comparisons made during each run
 - the amount of comparisons that should happen (1.386 n log n)

It seems that with big variance in the values in the table results the number of comparisons to be very similar.
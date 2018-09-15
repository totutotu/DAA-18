## Recursive Matrix Multiplication


The program prints two predefined matrices and prints out their multiplication.

To run:

`Rscript matrixMultiplication.R`


## K-way Merge

The program combines, sorts and print a (predefined) array of arrays of sorted numbers recursively.

The code includes two versions of the algorithm;

One that iteratively merges two of the k arrays using a 2-way merge until only a single array is left.

The solutions running time is O(kn), where k is the number of arrays and n is the total number of elements in the resulting array.

To run the simple version run:

```node k-wayMerge.js```

The better solution is to combine first and second, third and fourth etc arrays and then combine those intermediate arrays with each other until only one array is left.

The solutions running time is reduced to O(nlogk)

To run the better one, run:

```node k-wayMerge.js better```

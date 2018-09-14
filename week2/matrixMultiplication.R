A = matrix(
  c(-1,-2,3,4,5,6,7,8,9,10,11,12,13,14,15,16),
  nrow=4,
  ncol=4
)

B = matrix(
  c(3,2,5,4,5,6,7,8,9,10,11,12,13,14,15,16),
  nrow=4,
  ncol=4
)

print(A)
print(B)

matrixMultiplication <- function(A, B) {
  if(is.matrix(A)) {
    n = length(A[1,])
  } else {
    n = 1
  }
  C = matrix(, nrow=n, ncol=n)
  if(n == 1) {
    C = A * B
  } else {
    C[c(1:(n/2)), c(1:(n/2))] = matrixMultiplication(A[c(1:(n/2)),c(1:(n/2))], B[c(1:(n/2)),c(1:(n/2))]) +
      matrixMultiplication(A[c(1:(n/2)),c(((n/2)+1):n)], B[c(((n/2)+1):n),c(1:(n/2))])
      
    C[c(1:(n/2)),c(((n/2)+1):n)] = matrixMultiplication(A[c(1:(n/2)),c(1:(n/2))], B[c(1:(n/2)),c(((n/2)+1):n)]) +
      matrixMultiplication(A[c(1:(n/2)),c(((n/2)+1):n)], B[c(((n/2)+1):n),c(((n/2)+1):n)])

    C[c(((n/2)+1):n),c(1:(n/2))] = matrixMultiplication(A[c(((n/2)+1):n),c(1:(n/2))], B[c(1:(n/2)),c(1:(n/2))]) +
      matrixMultiplication(A[c(((n/2)+1):n),c(((n/2)+1):n)], B[c(((n/2)+1):n),c(1:(n/2))])

    C[c(((n/2)+1):n),c(((n/2)+1):n)] = matrixMultiplication(A[c(((n/2)+1):n),c(1:(n/2))], B[c(1:(n/2)),c(((n/2)+1):n)]) +
      matrixMultiplication(A[c(((n/2)+1):n),c(((n/2)+1):n)], B[c(((n/2)+1):n),c(((n/2)+1):n)])
  }
  C
}

print(matrixMultiplication(A, B))



const arrays = [
  [3,8,23,67,622,762,793,1400],
  [1,87,88,99,101,230,670,800],
  [2,3,4,5,11,144,352,6222],
  [100,101,102,103,199,200,201,211],
  [2,6,33,42,100,246,247,399],
  [0,10,44,110,123,333,336,600],
  [23,55,55,59,100,111,235,236],
  [12,53,63,79,81,83,662,665]
]

// const arrays = [
//   [3,8,23,675],
//   [1,87,88,99],
//   [2,3,4,5],
//   [100,101,102,103]
// ]

const merge = (A,B) => {
  const C = []
  while (A && B && A.length > 0 && B.length > 0) {
    if (A[0] < B[0]) {
      C.push(A.shift())
    } else {
      C.push(B.shift())
    }
  }
  while(A && A.length > 0) C.push(A.shift())
  while(B && B.length > 0) C.push(B.shift())
  return C
} 

const mergeK = (A, B) => {
  if (B.length === 1) return merge(A, B[0])
  return mergeK(merge(A, B[0]), B.splice(1))
}

const mergeKBetter = (Arr) => {
  if (Arr.length === 1) return Arr[0]
  const A = Arr.splice(0, Arr.length / 2)
  const B = Arr.splice(Arr.length / 2 - 1)
  return merge(mergeKBetter(A), mergeKBetter(B))
}


const run = () => {
  const args = process.argv.slice(2)
  const sorted = args[0] ? mergeKBetter(arrays): mergeK(arrays[0], arrays.splice(1))
  console.log(sorted)
}


run()


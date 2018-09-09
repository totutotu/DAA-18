const DEFAULT_SIZE = 1000000
const DEFAULT_MAX = 1000000
let comparisons = 0
const randomIntBetween = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

const exchange = (table, a, b) => {
  let ex = table[a]
  table[a] = table[b]
  table[b] = ex
  return table
}

const partition = (table, p, r) => {
  const x = table[r]
  let i = p - 1
  for (let j = p; j < r; j++) {
    comparison++
    if (table[j] <= x) {
      i = i + 1
      table = exchange(table, i, j)
    }
  }
  exchange(table, i + 1, r)
  return i + 1
}

const randomizedPartition = (table, p, r) => {
  const i = randomIntBetween(p, r)
  table = exchange(table, r, i)
  return partition(table, p, r)
}

const randomizedQuicksort = (table, p, r) => {
  if (p < r) {
    const q = randomizedPartition(table, p, r)
    randomizedQuicksort(table, p, q - 1)
    randomizedQuicksort(table, q + 1, r)
  }
  return table
}

const generateTable = (size, max) => {
  if (!Number(size)) size = DEFAULT_SIZE
  if (!Number(max)) max = DEFAULT_MAX
  const table = []
  for (var i = 0; i < size; i++) {
    table.push(randomIntBetween(0, max));
  }
  return table
}



let comparison, started

const run = () => {
  const args = process.argv.slice(2)
  const size = args[0] ? args[0] : DEFAULT_SIZE
  const max = args[1] ? args[1] : DEFAULT_MAX
  
  const comparisons = []
  const durations = []
  
  for (let i = 0; i < 10; i++) {
    comparison = 0
    const table = generateTable(size, max)
    started = Date.now()
    randomizedQuicksort(table, 0, table.length - 1)
    durations.push((Date.now() - started) / 1000)
    comparisons.push(comparison)
  }
  console.log(comparisons)
  console.log(`Quicksort ran with  a table of size ${size} consisting of elements between 0 and ${max}`)
  console.log(`Average duration in 10 iterations: ${Math.round(durations.reduce((p, c) => p + c, 0) / durations.length * 1000) / 1000}`) 
  console.log(`Average comparisons in 10 iterations: ${comparisons.reduce((p, c) => p + c, 0) / comparisons.length}`)
  console.log('Comparison should be near (1.386 n log n):')
  console.log(Math.round(size * Math.log2(size) * 1.386 * 100) / 100)
}


run()

module.exports = {
  run
}
// sets => lists with unique values

const set = new Set();
// const setFromList = new Set(list);

// set.add(el) -> O(1)
// set.has(el) -> O(1)
// set.delete(el) -> Amortized O(1)
// set.size -> O(1)

// set.clear()
// set.entries()

// amortization
// n operations
// out of which n - 1 operations take 1 sec
// but the last operation takes n sec
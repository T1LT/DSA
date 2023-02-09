// def binarysearch(arr, target)
//     mid = arr.length / 2
//     return nil if arr.empty?
//     return mid if arr[mid] == target
//     if arr[mid] > target
//         return binarysearch(arr[0...mid], target)
//     else
//         rightsearch = binarysearch(arr[(mid + 1)..-1], target)
//         return nil if rightsearch.nil?
//         return rightsearch + mid + 1
//     end
//     nil
// end

const binarysearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) return binarysearch(arr, target, low, mid - 1);
    else return binarysearch(arr, target, mid + 1, high);
  } else return -1;
};

console.log(binarysearch([1, 2, 3, 4, 5], 4));
console.log(binarysearch([1, 2, 3, 4, 5], 2));
console.log(binarysearch([1, 2, 3, 4, 5], 6));
console.log(binarysearch([1, 2, 3, 4, 5], 3));

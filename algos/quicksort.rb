def quicksort(arr)
    return arr if arr.length <= 1
    pivot = arr.first
    left = arr[1..-1].select { |el| el < pivot }
    right = arr[1..-1].select { |el| el >= pivot }
    quicksort(left) + [pivot] + quicksort(right)
end
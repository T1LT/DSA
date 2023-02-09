def mergesort(arr)
    mid = arr.length / 2
    return [arr[0]] if arr.length == 1
    merge(mergesort(arr[0...mid]), mergesort(arr[mid..-1]))
end

def merge(arr1, arr2)
    i, j = 0, 0
    res = []
    while i < arr1.length && j < arr2.length
        if arr1[i] < arr2[j]
            res << arr1[i]
            i += 1
        else
            res << arr2[j]
            j += 1
        end
    end
    if i >= arr1.length
        res += arr2[j..-1]
    end
    if j >= arr2.length
        res += arr1[i..-1]
    end
    res
end

p mergesort((1..10).to_a.shuffle)
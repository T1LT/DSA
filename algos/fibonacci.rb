def fibonacci(n, res = [0, 1])
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    res << res[-1] + res[-2]
    fibonacci(n - 1, res)
    res
end

# p fibonacci(5)
t = int(input())
 
for _ in range(t):
    r = input().strip()
    
 
    for ch in r:
        assert ch == 's' or ch == 'u'
    
    n = len(r)
    ans = 0
    i = 0
 
  
    while i < n and r[i] == 'u':
        ans += 1
        i += 1
 
 
    j = n - 1
    while j >= 0 and r[j] == 'u':
        ans += 1
        j -= 1
 
 
    k = i
    while k <= j:
        if r[k] == 'u':
            length = 0
            while k <= j and r[k] == 'u':
                length += 1
                k += 1
            ans += length // 2
        else:
            k += 1
 
    print(ans)
t = int(input())

for i in range(t):
    s = input()
    count = 0

    for ch in s:
        if ch == 'Y':
            count += 1

    if count >= 2:
        print("NO")
    else:
        print("YES")

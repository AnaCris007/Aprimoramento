

# your code goes here

def grade(n):
    MOD = 10**9 + 7

    cores_dif, cores_igu = 6, 6

    for x in range(2, n + 1):
        novo_cores_difx = (2*cores_dif + 2 * cores_igu)
        novo_cores_igu = (2*cores_dif + 3 * cores_igu) 
        cores_dif = novo_cores_difx
        cores_igu = novo_cores_igu
    return (cores_dif + cores_igu) % MOD

n = int(input())
while n < 1 or n > 5000:
    n = int(input())

print(grade(n))
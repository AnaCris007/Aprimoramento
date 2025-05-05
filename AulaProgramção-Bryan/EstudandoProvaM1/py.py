try:
    import pylint
except:
    print('error') 

# your code goes here
modulo = 10**9 + 7
n = int(input())
if n < 1 or n > 5000:
    print('Erro! Valor inválido, tente novamente.')
else: 
    jeito1, jeito2 = 6, 6
    if n == 1:
        print(12)
    # jeito1: pintar cada linha usando todas as 3 cores diferentes
    # jeito2: pintar cada linha usando só 2 cores diferentes
    #Quando n é igual a 1, que é o mínimo possível, tem 6 formas de pintar 
    # com o jeito1 e 6 formas de pintar usando o jeito 2
    # Para cada nova linha adicionada você pode pintá-la usando o jeito1 ou o jeito2
    else:
        for x in range(n - 1):
            novo_jeito1 = (2*jeito1+ 2*jeito2) % modulo
            novo_jeito2 = (2*jeito1 + 3*jeito2) % modulo
            jeito1, jeito2 = novo_jeito1, novo_jeito2  # Atualiza para os próximos cálculos
        total = (novo_jeito1 + novo_jeito2) % modulo
        print(total)
def bubblesort(lista):
    # Ordena uma lista
    n = len(lista)
    print(lista)

    for i in range(n - 1):
        for j in range(n - 1):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
        print(lista)  # Se quiser ver o progresso a cada passo

# Lista desordenada
lista_desordenada = [
    503, 87, 512, 61, 908, 170, 897, 275, 653, 426, 154,
    509, 612, 677, 765, 703
]

bubblesort(lista_desordenada)

valor = float(input('Qual é o valor da casa? R$'))
salario = float(input('Qual é o seu salário? R$'))
anos = int(input('Em quantos anos voçe deseja pagar? '))
prestacao = valor/(anos*12)
limite = 0.3*salario
if prestacao > limite:
    print('Empréstimo negado!')
else:
    print('Empréstimo aceito e o valor de cada prestção é R${:.2f}'.format(prestacao))
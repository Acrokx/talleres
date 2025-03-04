a=2
if a ==2:
    print('a vale 2')
else:
    print('a es diferente de 2')

#Concatenar condiciones 

Nombre = 'Cristhian'
Edad = 32
Pais='Colombia'

if Nombre =='Cristhian' and Edad == 32 and Pais =='Colombia':
    print('Su nombre es', Nombre,'tiene',Edad,'y es de',Pais) 
elif Nombre == 'Cristhian'and not Edad==32:
    print('Su nombre es Cristhian y no tiene 32 años')
elif Nombre != 'Cristhian'and Edad == 32:
    print('Su nombre no es Cristhian y tiene 32 años')
else:
    print('No se llama Cristhian ni tiene 32 años')         
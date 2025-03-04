nombres=['Lopez','Sara','Pablo','Cesar \n\n']
for nombre in nombres:
    print(nombre)
#Diccionarios
Personas=[]#lista vacia se llena con a y b
a={'nombre':'Lopez', 'Edad': 45}
b={'nombre':'Sara', 'Edad': 11}
c={'nombre':'Pablo', 'Edad': 32}
d={'nombre':'Cesar', 'Edad': 39}
Personas.append(a)#append: permite que los datos se agregen a la lista vacia
Personas.append(b)
Personas.append(c)
Personas.append(d)
for persona in Personas:
    print(persona['nombre'], persona['Edad'])

#Operar con valores de diccionarios

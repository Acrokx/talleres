# Lista de días de la semana
lista = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

# Imprimir el valor en la posición 4
puts lista[4]  # Esto imprimirá 'Viernes'

# Imprimir la lista completa
puts lista

# Imprimir una porción de la lista (índices 0 a 2)
puts lista[0..2]

# Lista con elementos adicionales
lista = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 1, 2, 3, ['Cristhian', 0.2, 2.25, true]]

# Imprimir una porción de la lista y los primeros 3 elementos del subarray en la posición 9
puts "#{lista[0..3]} #{lista[9][0..2]}"

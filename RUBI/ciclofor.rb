# Solicitar el primer valor
print 'Por favor ingrese el primer valor: '
A = gets.to_i

# Inicializar B (aunque no se usa en el código original)
B = 0

# Solicitar el segundo valor
print 'Por favor ingrese el segundo valor: '
C = gets.to_i

# Calcular y mostrar la potencia
valor = A**C
puts "La potencia de #{A} sobre #{C} es: #{valor}"

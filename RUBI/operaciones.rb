# Solicitar los valores de entrada
print 'Ingrese valor: '
a = gets.to_i

print 'Ingrese valor: '
b = gets.to_i

# Realizar las operaciones
suma = a + b
puts "La suma de los números es: #{suma}"

res = a - b
puts "La resta de los números es: #{res}"

multi = a * b
puts "La multiplicación de los números es: #{multi}"

div = a.to_f / b.to_f  # Usamos to_f para asegurar la división con decimales
puts "La división de los números es: #{div}"

# Comparaciones
igual = a == b
puts "Los números son iguales: #{igual}"

mayor = a > b
puts "El número mayor es: #{a}" if mayor
puts "El número menor es: #{b}" unless mayor

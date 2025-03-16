# Solicitar los datos al usuario
print 'Escriba sus nombres completos: '
a = gets.chomp

print 'Escriba sus apellidos completos: '
b = gets.chomp

print 'Escriba su profesión: '
c = gets.chomp

print 'Escriba su año de nacimiento: '
d = gets.to_i

# Calcular la edad
e = 2025 - d

# Imprimir el resultado
puts "El (La) #{c} #{a} #{b} tiene #{e} años"

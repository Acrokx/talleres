# Asignación de variables
a = 10
b = 4

# Multiplicación
puts "La primera variable es: #{a}"
puts "El signo de la operación es: *"
puts "La segunda variable es: #{b}"
c = a * b
puts "El resultado es: #{c}"
puts "Tipo de c: #{c.class}"

# División
puts "La primera variable es: #{a}"
puts "El signo de la operación es: /"
puts "La segunda variable es: #{b}"
c = a.to_f / b  # Usamos to_f para asegurar la división con decimales
puts "El resultado es: #{c}"
puts "Tipo de c: #{c.class}"

# Suma
puts "La primera variable es: #{a}"
puts "El signo de la operación es: +"
puts "La segunda variable es: #{b}"
c = a + b
puts "El resultado es: #{c}"
puts "Tipo de c: #{c.class}"

# Resta
puts "La primera variable es: #{a}"
puts "El signo de la operación es: -"
puts "La segunda variable es: #{b}"
c = a - b
puts "El resultado es: #{c}"
puts "Tipo de c: #{c.class}"

# Potencia
puts "La primera variable es: #{a}"
puts "El signo de la operación es: **"
puts "La segunda variable es: #{b}"
c = a ** b
puts "El resultado es: #{c}"
puts "Tipo de c: #{c.class}"

# Módulo
puts "La primera variable es: #{a}"
puts "El signo de la operación es: %"
puts "La segunda variable es: #{b}"
c = a % b
puts "El resultado es: #{c}"
puts "Tipo de c: #{c.class}"

# Contador con while
contador = 0
while contador < 30
  contador += 1
  puts "Iteración #{contador}"
end

# Combinado con if-else
loop do
  puts 'Introduzca un valor mayor a 10'
  a = gets.to_i  # Convertir la entrada a un número entero
  if a > 10
    puts 'Es correcto'
  else
    puts 'Es incorrecto, pruebe de nuevo'
    break
  end
end

# Solicitar selección de la figura
puts 'Seleccione la figura a calcular su área:'
puts '1 para rombo'
puts '2 para rectángulo'
puts '3 para cuadrado'
puts '4 para trapecio'

figura = gets.chomp

pi = 3.1416
const = 2

case figura
when '1'
  # Área del rombo
  print 'Ingresa el valor de la diagonal mayor: '
  dmayor = gets.to_i
  print 'Ingresa el valor de la diagonal menor: '
  dmenor = gets.to_i
  area = (dmayor + dmenor / const)
  puts "El área del rombo es: #{area}"

when '2'
  # Área del rectángulo
  print 'Ingresa el valor del largo del rectángulo: '
  largo = gets.to_i
  print 'Ingresa el valor del ancho del rectángulo: '
  ancho = gets.to_i
  area = largo * ancho
  puts "El área del rectángulo es: #{area}"

when '3'
  # Área del cuadrado
  print 'Ingresa el valor del lado del cuadrado: '
  lado = gets.to_i
  area = lado * lado
  puts "El área del cuadrado es: #{area}"

when '4'
  # Área del trapecio
  print 'Ingresa el valor de la base mayor: '
  bmayor = gets.to_i
  print 'Ingresa el valor de la base menor: '
  bmenor = gets.to_i
  print 'Ingresa la altura del trapecio: '
  h = gets.to_i
  area = ((bmayor + bmenor) * h) / 2
  puts "El área del trapecio es: #{area}"

else
  # Caso para un valor no válido
  area = pi * 1  # Se usa pi por defecto en el caso de una figura no válida
  puts "Área por defecto: #{area}"
end

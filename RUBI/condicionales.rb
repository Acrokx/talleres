# Condicional simple
a = 2
if a == 2
  puts 'a vale 2'
else
  puts 'a es diferente de 2'
end

# Concatenar condiciones
nombre = 'Cristhian'
edad = 32
pais = 'Colombia'

if nombre == 'Cristhian' && edad == 32 && pais == 'Colombia'
  puts "Su nombre es #{nombre}, tiene #{edad} años y es de #{pais}"
elsif nombre == 'Cristhian' && edad != 32
  puts 'Su nombre es Cristhian y no tiene 32 años'
elsif nombre != 'Cristhian' && edad == 32
  puts 'Su nombre no es Cristhian y tiene 32 años'
else
  puts 'No se llama Cristhian ni tiene 32 años'
end

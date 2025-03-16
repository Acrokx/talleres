# Creación de un diccionario (hash en Ruby)
coche = {'marca' => 'Mustang', 'color' => 'plateado', 'modelo' => 'inglish', 'placa' => 'SNA025'}

# Acceder a un valor
puts coche['color']

# Cambiar el valor
coche['color'] = 'verde'
puts coche['color']

# Acceder y cambiar otro valor
puts coche['marca']
coche['marca'] = 'Mazda'
puts coche['marca']

# Mostrar el hash completo
puts coche

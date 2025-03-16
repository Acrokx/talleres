# Lista de nombres
nombres = ['Lopez', 'Sara', 'Pablo', 'Cesar \n\n']
nombres.each { |nombre| puts nombre }

# Diccionarios (Hashes en Ruby)
personas = [] # Lista vacía

# Crear los diccionarios
a = {'nombre' => 'Lopez', 'Edad' => 45}
b = {'nombre' => 'Sara', 'Edad' => 11}
c = {'nombre' => 'Pablo', 'Edad' => 32}
d = {'nombre' => 'Cesar', 'Edad' => 39}

# Agregar los diccionarios a la lista
personas << a
personas << b
personas << c
personas << d

# Imprimir los valores de los diccionarios
personas.each do |persona|
  puts "#{persona['nombre']} #{persona['Edad']}"
end

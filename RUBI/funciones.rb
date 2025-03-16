# Multiplicación de elementos de dos tuplas (arrays en Ruby)
a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9, 10]
c = []

# Multiplicación de elementos correspondientes de las listas
a.each_with_index do |valor, contador|
  c.append(valor * b[contador])
end
puts c

# Funciones en Ruby

# Definición y llamada de función
def mostrar_texto
  puts 'hola'
end

mostrar_texto

# Función multiplicar
def multiplicar
  a = 7
  b = 9
  puts a * b
end

multiplicar

# Ámbito de las variables
def multiplicar
  puts a * b
end

a = 7
b = 9
multiplicar

# Función que devuelve un valor
def multiplicar
  a = 7
  b = 9
  return a * b
end

resultado = multiplicar
puts resultado + 5

# Función que valida un dato
def validar_dato
  if a == 7
    return true
  else
    return false
  end
end

a = 9
dato = validar_dato
puts dato

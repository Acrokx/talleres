# Solicitar los valores de voltaje y resistencia
print 'Ingrese el valor del voltaje del circuito: '
voltaje = gets.to_i

print 'Ingrese el valor de la resistencia del circuito: '
resistencia = gets.to_i

# Calcular la intensidad (amperaje)
intensidad = voltaje / resistencia

# Imprimir el resultado
puts "Al conectar un resistor de R #{resistencia} ohm a una fuente de V #{voltaje} voltage circulará una corriente de #{intensidad} amperios"

# Definición de la clase Usuario
class Usuario
    attr_accessor :nombre, :pin, :saldo
  
    def initialize(nombre, pin, saldo)
      @nombre = nombre
      @pin = pin
      @saldo = saldo
    end
  end
  
  # Definición de la clase Banco
  class Banco
    def initialize(usuarios = [])
      @usuarios = usuarios
    end
  
    def autenticar(nombre, pin)
      @usuarios.each do |usuario|
        if usuario.nombre == nombre
          if usuario.pin == pin
            puts 'Estás Logeado'
            return true
          else
            puts 'Pin o nombre incorrecto'
            return false
          end
        end
      end
      puts 'El usuario no existe'
      false
    end
  
    def sacar_dinero(nombre, saldo)
      @usuarios.each do |usuario|
        if usuario.nombre == nombre
          if usuario.saldo < saldo
            puts 'Saldo insuficiente'
            break
          elsif usuario.saldo >= saldo
            usuario.saldo -= saldo
            puts "El saldo disponible es #{usuario.saldo}"
          end
        end
      end
    end
  end
  
  # Creación de objetos Usuario
  ana = Usuario.new('Ana', 9872, 450)
  pablo = Usuario.new('Pablo', 5555, 200)
  cristhian = Usuario.new('Cristhian', 1234, 900)
  
  # Creación de objeto Banco
  banco = Banco.new([ana, pablo, rodrigo])
  
  # Bucle de inicio de sesión
  loop do
    puts 'Bienvenido al Banco, por favor, identifíquese.'
    print 'Introduzca el nombre: '
    nombre = gets.chomp
    print 'Introduzca el pin: '
    pin = gets.to_i
  
    if banco.autenticar(nombre, pin)
      # Bucle de opciones después de autenticación
      loop do
        puts 'Por favor, elija una de estas opciones:'
        puts '1. Sacar dinero'
        puts '2. Terminar sesión.'
        opcion = gets.chomp
  
        case opcion
        when '1'
          print 'Introduce cantidad a sacar: '
          cantidad = gets.to_i
          banco.sacar_dinero(nombre, cantidad)
        when '2'
          puts 'Saliendo del sistema.'
          break
        else
          puts 'Opción incorrecta. Por favor, introduzca otra opción.'
        end
      end
    else
      puts 'Usuario no autenticado. Por favor, introduzca nombre y pin correctos.'
    end
  end
  
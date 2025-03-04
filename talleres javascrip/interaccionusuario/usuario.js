function obtener() {
            let a = prompt('Escriba sus nombres completos:');
            let b = prompt('Escriba sus apellidos completos:');
            let c = prompt('Escriba su profesión:');
            let d = parseInt(prompt('Escriba su año de nacimiento:'));
            let e = 2025 - d;
            
            alert('El señor(@)'+ a + ' trabaja en ' + c + ' ' + b + ' y el tiene ' + e + ' años');
        }

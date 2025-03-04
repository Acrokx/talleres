function Resultados() {
    // Primer ejemplo con valores booleanos
    let a = true;
    let b = false;
    console.log(a && b); // Debería imprimir false

    // Segundo ejemplo con valores numéricos
    a = 2;
    b = 3;
    let c = 4;
    let d = 10;

    console.log(a == b && c < d);  // Debería imprimir false (a == b es falso y c < d es verdadero)
    console.log(!(a == b) && c > d);  // Debería imprimir true (!(a == b) es verdadero, y c > d es verdadero)
}
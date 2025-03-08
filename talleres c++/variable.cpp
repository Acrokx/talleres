#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 4;

    // Multiplication
    cout << "La primera variable es: " << a << endl;
    cout << "El signo de la operacion es: * " << endl;
    cout << "La segunda variable es: " << b << endl;
    int c = a * b;
    cout << "El resultado es: " << c << endl;
    cout << "El tipo de la variable c es: " << typeid(c).name() << endl << endl;

    // Division
    cout << "La primera variable es: " << a << endl;
    cout << "El signo de la operacion es: / " << endl;
    cout << "La segunda variable es: " << b << endl;
    c = a / b;
    cout << "El resultado es: " << c << endl;
    cout << "El tipo de la variable c es: " << typeid(c).name() << endl << endl;

    // Addition
    cout << "La primera variable es: " << a << endl;
    cout << "El signo de la operacion es: + " << endl;
    cout << "La segunda variable es: " << b << endl;
    c = a + b;
    cout << "El resultado es: " << c << endl;
    cout << "El tipo de la variable c es: " << typeid(c).name() << endl << endl;

    // Subtraction
    cout << "La primera variable es: " << a << endl;
    cout << "El signo de la operacion es: - " << endl;
    cout << "La segunda variable es: " << b << endl;
    c = a - b;
    cout << "El resultado es: " << c << endl;
    cout << "El tipo de la variable c es: " << typeid(c).name() << endl << endl;

    // Exponentiation (Power)
    cout << "La primera variable es: " << a << endl;
    cout << "El signo de la operacion es: ** " << endl;
    cout << "La segunda variable es: " << b << endl;
    c = pow(a, b); // Using the pow function for exponentiation
    cout << "El resultado es: " << c << endl;
    cout << "El tipo de la variable c es: " << typeid(c).name() << endl << endl;

    // Modulo
    cout << "La primera variable es: " << a << endl;
    cout << "El signo de la operacion es: % " << endl;
    cout << "La segunda variable es: " << b << endl;
    c = a % b;
    cout << "El resultado es: " << c << endl;
    cout << "El tipo de la variable c es: " << typeid(c).name() << endl;

    return 0;
}

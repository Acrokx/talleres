#include <iostream>
using namespace std;

int main() {
    // First part
    bool a = true;
    bool b = false;
    cout << (a && b) << endl;  // Prints 0 (false) because a is true and b is false

    // Second part
    int x = 2;
    int y = 3;
    int z = 4;
    int w = 10;
    cout << ((x == y) && (z < w)) << endl;  // Prints 0 (false) because x != y and z < w

    // Third part
    cout << (!(x == y) && (z > w)) << endl;  // Prints 0 (false) because x != y but z is not greater than w

    return 0;
}

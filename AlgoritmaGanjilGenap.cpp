#include <iostream>

int main() {

          int angka;

          std::cout << "Masukkan Angka : " << std::endl;
          std::cin >> angka;
          if (angka % 2 == 0 && angka / 2 != 0) {
                    std::cout << "Angka " << angka << " adalah angka genap";
          } else if (angka % 2 != 0) {
                    std::cout << "Angka " << angka << " adalah angka ganjil";
          } else if (angka == 0) {
                    std::cout << "Angka " << angka << " adalah netral, bukan ganjil atau genap";
          } else {
                    std::cout << "Bukan bilangan ganjil, genap, atau netral";
          }
}

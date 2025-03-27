#include <iostream> 
#include <string>
// GPT memberikan saya tantangan untuk membuat program kasir sederhana
int main() {
   //Gudang Toko
   std::string barangMinyak = "Minyak";
   std::string barangBeras = "Beras";
   int jumlahMinyak = 10;  
   int jumlahBeras = 20;
   int hargaMinyak = 20000;
   int hargaBeras = 10000;
   int struk = 0;
   //UserExperience
   std::string keranjang1;
   std::string keranjang2;
   int valueData = 0;
   int totalPembayaran1 = 0;
   int totalPembayaran2 = 0;
   std::string checkAns;
   //Eksekusi
   std::cout << "=====Program Kasir Sederhana=====" << std::endl;
   std::cout << "Katalog Barang \n 1. Minyak \n 2. Beras" << std::endl;
   std::cout << "Masukkan Nama Barang : " << std::endl;
   std::cin >> keranjang1;
   std::cout << "Masukkan Jumlah Barang : " << std::endl;
   std::cin >> valueData;
   if (jumlahMinyak == 0 && jumlahBeras == 0) {
      std::cout << "Maaf barang habis" << std::endl;
      return 0;
   if (keranjang1 == "Minyak") {
      totalPembayaran1 += hargaMinyak * valueData;
      std::cout << keranjang1 << "|" << hargaMinyak << "|" << valueData << " = " << totalPembayaran1 << std::endl;
      jumlahMinyak -= valueData;
      } else if (keranjang1 == "Beras") {
         totalPembayaran1 += hargaBeras * valueData;
         std::cout << keranjang1 << "|" << hargaBeras << "|" << valueData << " = " << totalPembayaran1 << std::endl;
         jumlahBeras -= valueData;
         } else {
                  std::cout << "Error";
                  return 0;
               }   
   std::cout << "Ingin Menambah Barang? \n A. Ya \n B. Tidak \n : " << std::endl;
   std::cin >> checkAns;
   if (checkAns == "A" || checkAns == "a" || checkAns == "YA" || checkAns == "ya" || checkAns == "Ya") {
      std::cout << "Masukkan Nama Barang : " << std::endl;
      std::cin >> keranjang2;
      std::cout << "Masukkan Jumlah Barang : " << std::endl;
      std::cin >> valueData;
      if (jumlahMinyak == 0 && jumlahBeras == 0) {
         std::cout << "Maaf barang habis" << std::endl;
         return 0; }
      if (keranjang2 == "Minyak") {
         totalPembayaran2 += hargaMinyak * valueData;
         std::cout << keranjang2 << "|" << hargaMinyak << "|" << valueData << " = " << totalPembayaran2 << std::endl;
         jumlahMinyak -= valueData;
         } else if (keranjang2 == "Beras") {
            totalPembayaran2 += hargaBeras * valueData;
            std::cout << keranjang2 << "|" << hargaBeras << "|" << valueData << " = " << totalPembayaran2 << std::endl;
            jumlahBeras -= valueData;
            } else {
               std::cout << "Error";
               return 0;
            }     
      struk = totalPembayaran1 + totalPembayaran2; 
      std::cout << "Total Pembayarannya adalah " << struk << std::endl;
   } else if (checkAns == "B" || checkAns == "b" || checkAns == "TIDAK" || checkAns == "tidak" || checkAns == "Tidak") {
      std::cout << "Total Pembayarannya adalah " << totalPembayaran1 << std::endl;
   }
}         

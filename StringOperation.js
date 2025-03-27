// 1. Operasi string
let dataString = "ABCDE"; 
let dataCharacter = dataString.charAt(0);
console.log(`character pada index 0 = ${dataCharacter}`); //mengambil data string n-1?
dataCharacter = dataString.charAt(1);
console.log(`character pada index 1 = ${dataCharacter}`); //mengambil data string n-2?
dataCharacter = dataString.charAt(2);
console.log(`character pada index 2 = ${dataCharacter}`); //mengambil data string n-3?
dataCharacter = dataString.charAt(3);
console.log(`character pada index 3 = ${dataCharacter}`); //mengambil data string n-4?
dataCharacter = dataString.charAt(4);
console.log(`character pada index 4 = ${dataCharacter}`); //mengambil data string n-5?

// 2. Menyambung String 
let namaDepan = "Hariono";
let namaBelakang = "Simatupang";

let namaLengkap = namaDepan.concat(' ', namaBelakang);
console.log(namaLengkap);

// 3. Mengambil Index pada String (Kemunculan Pertama)
console.log(namaLengkap.indexOf('H')); 
console.log(namaLengkap.indexOf('a'));
console.log(namaLengkap.indexOf('B'));
console.log(namaLengkap.indexOf('o'));
console.log(namaLengkap.indexOf('i'));

// 4. Mengambil substring
let namaDepan_5_13 = namaDepan.substring(5, 13);
console.log(namaDepan_5_13);
console.log(namaBelakang.substring(6, 34));

// 5. Slice
let namaSlice1 = namaBelakang.slice(3, 8);
console.log(namaSlice1)
let namaSlice2 = namaBelakang.slice(8, 3); // jadi kosong
console.log(namaSlice2)

// 6. Replace                  #nama awal   #nama yang mau diubah
namaDepan = namaDepan.replace('Hariono','Darmawan');
console.log(namaDepan);
let namaBaru = namaLengkap.replace('Hariono Simatupang','Memet');
console.log(namaBaru);

// 7. toUpperCase
namaUpper = namaDepan.toUpperCase();
console.log(namaUpper)

// 8. toLowerCase
namaLower = namaUpper.toLowerCase();
console.log(namaLower);

// 9. Extract data number
let integerBiner = '0010';
console.log(typeof angkaBiner); // outputnya masih string
let stringBiner = parseInt(integerBiner);
console.log(typeof stringBiner,'datanya adalah', stringBiner);


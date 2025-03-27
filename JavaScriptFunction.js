function greet(nama) { //harus ada variabel di function
          console.log("Selamat datang, " + nama);
}
greet("Matthew");
//setiap menjalankan tidak perlu console.log jika di function
//sudah ada console.log

function data(name, faculty) {
          console.log("Selamat datang kembali, " + name + "!");
          console.log("Faculty of " + faculty);
}

data("Matthew", "Computer Science");
function sumData() {
          let result = 0;
          for (let i = 0; i < arguments.length; i++) {
                    result += arguments[i]
          }
          return result;
}
sumData();

const hello = function (name) {
          console.log("Hello " + name);
}

function callTwice(func) {
          func("Sandra");
          func("Dewi");
}

callTwice(hello);

function loopCall(func, count) {
          for (let i = 0; i < count; i++) {
                    func(i);
          }
}
loopCall(hello, 5);

//Immediately Invoked Function Expression
//tidak memmangil function diluar bracket

// function ageRange(min, max) {
//           return function (personAge) {
//                     return personAge <= min && personAge >= max;
//           }
// }

// const stillChild = ageRange(0, 12);
// const isTeen = ageRange(13, 24);
// const isAdult = ageRange(24, 45);

//IIFE version

const stillChild = (function (min, max) {
          return function (personAge) {
                    return personAge <= min && personAge >= max;
          };
})(0, 12);

const isTeen = (function (min, max) {
          return function (personAge) {
                    return personAge <= min && personAge >= max;
          };
})(13, 24);

const isAdult = (function (min, max) {
          return function (personAge) {
                    return personAge <= min && personAge >= max;
          };
})(24, 45);

function bilanganPrima(n) {
          for (let i = 2; i < n; i++) {
                    if (n % i == 0) {
                              return false;
                    }
          }
          return true;
}

function showBilanganPrima(max) {
          for (let i = 2; i <= max; i++) {
                    if (bilanganPrima(i)) {
                              console.log(i);
                    }
          }
}

showBilanganPrima(100);



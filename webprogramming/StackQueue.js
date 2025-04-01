// Stack with push and pop 
let number = [1, 2, 3, 4, 5, 6];
console.log('There are ' + pop + ' pop number');
console.log('1st poping ' + number.pop());
console.log(number);
console.log('2nd poping ' + number.pop());
console.log(number);
console.log('3rd poping ' + number.pop());
console.log(number);
console.log('4th poping ' + number.pop());
console.log(number);
console.log('5th poping ' + number.pop());
console.log(number);

const SYPS = ["Matthew, Dear"];
console.log('There are ' + SYPS + ' people');
SYPS.push('Jovano'); //jika sudah konstanta tidak perlu lagi menggunakan const. Cukup sekali saja di awal!
console.log(SYPS);
SYPS.push('Raka');
console.log(SYPS);

// Queue with shift and unshift

let dufanQueue = ['regularTrack:Budi', 'regularTrack:Roro']
console.log('Antrian Saat Ini' + dufanQueue);
console.log('Sedang Bermain' + firstnameData);
const firstnameData = dufanQueue.shift();
console.log('Antrian Saat Ini' + dufanQueue);
console.log('Sedang Bermain' + firstnameData);

const jatimParkQueue = ['regularTrack:Anton', 'regularTrack:Musa']
console.log('Antrian Saat Ini' + jatimParkQueueQueue);
console.log(jatimParkQueue.unshift('fasTrack:RapihAmat'))
console.log('Antrian Saat Ini' + jatimParkQueueQueue);

// Slice Technicque
const deretPrima = [2, 3, 5, 7, 11, 13, 17];
console.log(deretPrima.slice(1)) // 2
console.log(deretPrima.slice(3, 5)) // 2
console.log(deretPrima.slice(0, 3)) // 2

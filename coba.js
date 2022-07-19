// // Cara Menjalankan satu file Javascript lewat Node JS
// // Menggunakan Terminal
// console.log('Hello World!');

// const nama = 'Puteri Husnul';
// console.log(nama);

// cara Menjalankan > 1 file menggunakan module.export & require
function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

// variabel
const PI = 3.14;

// Objek 2 property dan 1 method
const mahasiswa = {
  nama: "Puteri Husnul",
  umur: 17,
  cetakMhs() {
    return `Halo! nama saya ${this.nama}, saya berumur ${this.umur} tahun.`;
  },
};

// Class, instansiasi nya menggunakan new
class Orang {
  constructor() {
    console.log("Objek orang telah dibuat!!");
  }
}

module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;
module.exports.Orang = Orang;

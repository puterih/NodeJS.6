// // Cara Menjalankan satu file Javascript lewat Node JS
// // Menggunakan Terminal
// console.log('Hello WPU!');

// // CARA MENGEKSEKUSI JS LEWAT NODE
// // memanggil dari ambil parameter
// const cetakNama = (nama) => `Hi, Nama saya ${nama}`;
// // Tidak memakai {} dan return karena hanya sebaris ekspresinya
// console.log(cetakNama("Puteri Husnul"));

// // memanggil dari ambil variabel
// const nama = "Puteri Husnul";
// const cetakNama = (nama) => `Hi, Nama saya ${nama}`;
// // Tidak memakai {} dan return karena hanya sebaris ekspresinya
// console.log(cetakNama(nama));

/**
 * Node JS memakai module system
node js menganut sesuatu yang disebut dengan sistem module, yang dianggap 1 file itu adalah 1 module. jadi tidak bisa langsung diakses oleh module yg lain meskipun sudah require.

* Cara Menjalankan > 1 file menggunakan module.export & require
agar module lain bisa di akses/ isi file nya bisa di pakai file dimana pun, gunakan module.exports
tetapi require nya harus di simpan kedalam sebuah variabel
 */

// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); //third party module(npm module) -> akan ada di dalam folder node_modules

const coba = require("./coba");
console.log(coba.cetakNama("Puteri Husnul"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());

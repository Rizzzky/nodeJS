function hitungKomisiDanUangJasa(pendapatan) {
  let uangJasa;
  let komisi;

  if (pendapatan <= 200000) {
    uangJasa = 10000;
    komisi = pendapatan * 0.1;
  } else if (pendapatan <= 500000) {
    uangJasa = 20000;
    komisi = pendapatan * 0.15;
  } else {
    uangJasa = 30000;
    komisi = pendapatan * 0.2;
  }

  return {
    uangJasa,
    komisi,
  };
}

const pendapatanHariIni = 600000; // Ganti dengan pendapatan yang sesuai
const hasilPerhitungan = hitungKomisiDanUangJasa(pendapatanHariIni);

console.log(`Pendapatan Hari Ini: Rp. ${pendapatanHariIni}`);
console.log(`Uang Jasa: Rp. ${hasilPerhitungan.uangJasa}`);
console.log(`Komisi: Rp. ${hasilPerhitungan.komisi}`);

// app/page.js
export default function Home() {
  return (
    <main>
      <h1>Selamat Datang!</h1>
      <p>Ini adalah halaman utama website mahasiswa.</p>
      <p>Silakan pilih halaman yang ingin dikunjungi:</p>

      <ul>
        <li><a href="/about">Detail Mahasiswa</a></li>
        <li><a href="/profile">Profile Mahasiswa</a></li>
        <li><a href="/detail">Kontak Mahasiswa</a></li>
      </ul>
    </main>
  );
}
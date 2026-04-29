# 📝 Jawaban — 01. React vs Next.js

| Info | Detail |
|------|--------|
| **Nama** | Muhammad Aksan |
| **NIM** | 105841107223 |
| **Halaman** | 01. React vs Next.js |
| **Tanggal** | 29 April 2026, 16.34 |

---

## 📝 Kuis Singkat

### 1. Next.js adalah...

**Jawaban:** Framework React untuk membangun aplikasi web modern dengan fitur lengkap seperti routing, SSR, dan API.

### 2. Mana yang TIDAK perlu di-install manual di Next.js?

**Jawaban:** React Router

### 3. Saat install Next.js, agar menggunakan JavaScript (bukan TypeScript), kita harus pilih...

**Jawaban:** No pada pilihan TypeScript

### 4. Apakah komponen React bisa dipakai di Next.js?

**Jawaban:** Ya, komponen React bisa langsung digunakan di Next.js

### 5. Sebutkan minimal 3 fitur yang Next.js berikan di atas React biasa!

**Jawaban:** Routing otomatis, Server Side Rendering (SSR), API Routes, Image Optimization, SEO lebih baik

---

## ✏️ Jawaban Latihan

### Latihan 1 — Halaman Utama

// app/page.js
export default function Home() {
  return (
    <main>
      <h1>Selamat Datang!</h1>
      <p>Ini adalah halaman utama website mahasiswa.</p>
      <p>Silakan pilih halaman yang ingin dikunjungi:</p>

      <ul>
        <li><a href="/about">Detail Mahasiswa</a></li>
        <li><a href="/mahasiswa">Profile Mahasiswa</a></li>
        <li><a href="/detail">Kontak Mahasiswa</a></li>
      </ul>
    </main>
  );
}

### Latihan 2 — Halaman About

// app/about/page.js
export default function About() {
  return (
    <main>
      <h1>Detail Mahasiswa</h1>

      <p><strong>Nama:</strong> Muhammad Aksan</p>
      <p><strong>NIM:</strong> 105841107223</p>
      <p><strong>Jurusan:</strong> Teknik Informatika</p>
      <p><strong>Fakultas:</strong> Fakultas Teknik</p>
      <p><strong>Universitas:</strong> Universitas Muhammadiyah Makassar</p>

      <a href="/">Kembali ke Home</a>
    </main>
  );
}

### Latihan 3 — Tantangan: Bandingkan Routing

Pada Next.js, sistem routing sudah otomatis berdasarkan struktur folder yang ada di dalam folder app/ atau pages/. Misalnya jika kita membuat file app/about/page.js, maka halaman tersebut otomatis dapat diakses melalui URL /about tanpa perlu menambahkan konfigurasi routing secara manual. Next.js juga tidak memerlukan instalasi library tambahan seperti React Router karena fitur routing sudah tersedia secara bawaan. Sedangkan pada React biasa, routing harus dibuat secara manual menggunakan library tambahan seperti React Router. Developer harus mengatur sendiri path URL menggunakan komponen seperti BrowserRouter, Routes, dan Route, serta harus menginstall package react-router-dom terlebih dahulu. Jadi, Next.js lebih praktis dan cepat untuk digunakan karena routing sudah otomatis, sedangkan React biasa lebih fleksibel tetapi membutuhkan konfigurasi tambahan.

---

## 📊 Ringkasan

| Metrik | Nilai |
|--------|-------|
| Total dijawab | 0 / 8 |
| Skor kuis | 0 / 4 (0%) |
| Latihan terisi | 0 / 3 |

---

_Dibuat otomatis oleh Sistem Kuis Pertemuan 00_

// --- 1. SELEKSI ELEMEN DOM ---
const elInput = document.getElementById("input-tugas");
const btnTambah = document.getElementById("btn-tambah");
const wadahDaftar = document.getElementById("daftar-tugas");

// --- 2. FUNGSI UTAMA: TAMBAH TUGAS BARU ---
function tambahTugasBaru() {
    const teksTugas = elInput.value.trim();

    // Validasi: Cegah submit jika input kosong
    if (teksTugas === "") {
        alert("Ketikkan sesuatu terlebih dahulu agar tidak kosong! ⚠️");
        return;
    }

    // A. Membuat Elemen Dasar 'li' Secara Dinamis
    const itemBaru = document.createElement("li");
    itemBaru.classList.add("todo-item");

    // B. Menyusun Struktur Konten Internal Li Menggunakan InnerHTML
    itemBaru.innerHTML = `
        <span class="todo-text">${teksTugas}</span>
        <button class="btn-hapus">❌</button>
    `;

    // C. Pemasangan Event Listener Langsung ke Elemen Baru yang Baru Lahir
    
    // Fitur Klik 1: Klik area boks untuk menandai tugas selesai (Toggle Class Done)
    itemBaru.addEventListener("click", function(event) {
        // Cegah pemicuan jika yang diklik sebenarnya adalah tombol hapus silang
        if (event.target.classList.contains("btn-hapus")) return;
        
        itemBaru.classList.toggle("done");
    });

    // Fitur Klik 2: Klik tombol silang untuk menghapus elemen dari daftar halaman
    const btnHapus = itemBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function() {
        itemBaru.remove();
    });

    // D. Masukkan Elemen 'li' Baru ke Dalam Elemen Induk 'ul' di Halaman Web
    wadahDaftar.appendChild(itemBaru);

    // E. Bersihkan Kolom Input dan Kembalikan Fokus Kursor
    elInput.value = "";
    elInput.focus();
}

// --- 3. PASANG EVENT LISTENER BAWAAN PADA ELEMEN LAMA (CONTOH AWAL) ---
// Bagian ini mendeteksi interaksi pada item bawaan yang ditulis langsung di HTML asli
const itemAwal = document.querySelector(".todo-item");
if (itemAwal) {
    itemAwal.addEventListener("click", function(e) {
        if (!e.target.classList.contains("btn-hapus")) {
            itemAwal.classList.toggle("done");
        }
    });
    
    itemAwal.querySelector(".btn-hapus").addEventListener("click", function() {
        itemAwal.remove();
    });
}

// --- 4. PEMICU UTAMA (TRIGGER) ---
btnTambah.addEventListener("click", tambahTugasBaru);

// Akses Kenyamanan Keyboard: Tekan Enter untuk menambah tugas
elInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        tambahTugasBaru();
    }
});

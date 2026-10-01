// Fungsi ketika tombol "Pesan Sekarang" diklik
function pesanSekarang() {
  const menuSection = document.getElementById('menu');
  menuSection.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk menambahkan item ke keranjang dan memunculkan animasi Toast
function tambahKeKeranjang(namaItem) {
  const toast = document.getElementById('toast');
  
  // Ubah teks toast
  toast.innerText = `🛒 ${namaItem} telah ditambahkan!`;
  
  // Tampilkan Toast
  toast.classList.add('show');
  
  // Sembunyikan Toast setelah 3 detik
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Efek animasi tambahan saat scroll (Opsional / Interaktif)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#ffffff';
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
  }
});
document.getElementById('check-in-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil data dari form check-in
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let checkInDate = document.getElementById('check-in-date').value;

    // Menyimpan data check-in
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('checkInDate', checkInDate);

    // Menampilkan data check-in
    document.getElementById('info-name').textContent = 'Nama Pemesan: ' + name;
    document.getElementById('info-phone').textContent = 'Nomor HP: ' + phone;
    document.getElementById('info-check-in').textContent = 'Check-in: ' + checkInDate;

    // Menyembunyikan form check-in dan menampilkan tombol cetak
    document.getElementById('check-in-form').style.display = 'none';
    document.getElementById('print-slip').style.display = 'block';

    // Mengosongkan form check-in
    document.getElementById('check-in-form').reset();
});

document.getElementById('check-out-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil data dari form check-out
    let checkOutDate = document.getElementById('check-out-date').value;
    let paymentProof = document.getElementById('payment-proof').files[0]?.name;

    // Menyimpan data check-out
    sessionStorage.setItem('checkOutDate', checkOutDate);
    sessionStorage.setItem('paymentProof', paymentProof);

    // Menampilkan data check-out
    document.getElementById('info-check-out').textContent = 'Check-out: ' + checkOutDate;
    document.getElementById('info-payment-proof').textContent = 'Bukti Pembayaran: ' + paymentProof;

    // Mengosongkan form check-out
    document.getElementById('check-out-form').reset();
});

document.getElementById('print-slip').addEventListener('click', function() {
    window.print(); // Fungsi untuk membuka dialog print
});

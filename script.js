document.getElementById("btn").addEventListener("click", function () {
	let nama = document.getElementById("Nama").value;
	let kelas = document.getElementById("Kelas").value;
	let tentang = document.getElementById("tentang").value;
	let alamat = document.getElementById("alamat").value;

	alert("Haloo " + nama);
	alert("Dari kelas " + kelas);
	alert("Alamat: " + alamat);
	alert("Tentang kamu: " + tentang);
});

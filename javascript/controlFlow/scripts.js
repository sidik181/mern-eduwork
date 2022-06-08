let nilai = prompt(`Input nilai:
(10-100)`);

nilai = Number(nilai);

if (nilai >= "80" && nilai <= 100) {
	alert("Nilai anda A")
} else if (nilai >= 70 && nilai <= 79) {
	alert("Nilai anda B")
} else if (nilai >= 60 && nilai <= 69) {
	alert("Nilai anda C")
} else if (nilai >= 50 && nilai <= 59) {
	alert("Nilai anda D")
} else if (nilai >= 0 && nilai <= 49) {
	alert("Nilai anda E")
} else {
	alert("Input yang anda masukkan salah!")
}


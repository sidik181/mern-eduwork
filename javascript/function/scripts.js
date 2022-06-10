alert(`Selamat datang di game tebak angka.
Game dimainkan oleh 2 Player. Player diminta untuk
menebak angka dari 1 - 3. Tiap player memiliki
kesempatan menebak sebanyak 5 kali. Player yang berhasil
menebak terbanyak yang akan menang. Selamat Bermain!`);

let player1 = 0;
let player2 = 0;
let chance = 1;
let stop = true;


while (stop) {
  p1 = parseInt(prompt("player 1: Silakan masukkan angka."));
  p2 = parseInt(prompt("player 2: Silakan masukkan angka."));

  let GuessNumber = guessNumber();
  let valid = validation(p1, p2);
  if (!valid) {
    stop = window.confirm("Ulang?");
  } else {
    if (p1 !== GuessNumber && p2 !== GuessNumber) {
      alert("Semua player tidak ada yang benar.");
    } else {
      if (p1 === GuessNumber) {
        alert("Player 1 Win");
        player1++;
      }
      if (p2 === GuessNumber) {
        alert("Player 2 Win");
        player2++;
      }
    }

    alert(`
		Angka tebakan adalah: ${GuessNumber}
		-----------------------------------------------
		* Skor Player 1: ${player1}
		* Skor Player 2: ${player2}`);

    chance++;
    if (chance <= 5) {
      stop = window.confirm("Kesempatan " + chance + ". Lanjut?");
      if (!stop) {
        if (player1 > player2) {
          alert("Selamat Player 1 MENANG!");
          stop = false;
        } else if (player1 < player2) {
          alert("Selamat Player 2 MENANG!");
          stop = false;
        } else {
          alert("Pertandingan Seri");
          chance = 1;
          player1 = 0;
          player2 = 0;
          stop = window.confirm("Main lagi?");
        }
      }
    } else {
      if (player1 > player2) {
        alert("Selamat Player 1 MENANG!");
        stop = false;
      } else if (player1 < player2) {
        alert("Selamat Player 2 MENANG!");
        stop = false;
      } else {
        alert("Pertandingan Seri");
        chance = 1;
        player1 = 0;
        player2 = 0;
        stop = window.confirm("Main lagi?");
      }
    }
  }
}

function validation(player1, player2) {
  if (player1 === player2) {
    alert("Angka tebakan sama. Pilih angka lain");
    return false;
  }

  if (player1 < 1 || player2 < 1) {
    alert("Angka tebakan tidak boleh kurang dari 1");
    return false;
  }

  if (player1 > 3 || player2 > 3) {
    alert("Angka tebakan tidak boleh lebih dari 3");
    return false;
  }

  if (isNaN(player1) || isNaN(player2)) {
    alert("Salah satu pemain belum menebak angka");
    return false;
  }

  return true;
}

function guessNumber() {
  const range = [1, 2, 3];
  let isNotRange = true;
  while (isNotRange) {
    let random = Math.floor(Math.random() * 10);
    let rangeNumber = range.find((r) => r === random);
    if (rangeNumber) {
      isNotRange = false;
      return random;
    }
  }
}
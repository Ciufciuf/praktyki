function calculator() {
	let num1 = parseInt(document.getElementById('pole1').value);
	let num2 = parseInt(document.getElementById('pole2').value);
	let wybor = parseInt(document.getElementById('pole3').value);
	let wynik = document.getElementById('wynik');

	switch (wybor) {
		case 1:
			wynik.innerHTML = num1 + num2;
			break;
		case 2:
			wynik.innerHTML = num1 - num2;
			break;
		case 3:
			if (num1 === 0 || num2 === 0) {
				wynik.innerHTML = 'nie dziel przez 0 parówo';
			} else {
				wynik.innerHTML = num1 / num2;
			}
			break;
		case 4:
			wynik.innerHTML = num1 * num2;
			break;
		default:
			wynik.innerHTML = 'wpisz good liczbe';
	}
}

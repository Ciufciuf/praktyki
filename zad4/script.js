function bubble(arr) {
	arr = arr.split('');
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if (arr[j] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr.join('');
}

function anagram(text1, text2) {
	if (text1.length != text2.length) {
		return false;
	}

	text1 = bubble(text1);
	text2 = bubble(text2);

	for (let i = 0; i < text1.length; i++) {
		if (text1[i] != text2[i]) {
			return false;
		}
	}

	return true;
}

function sprawdz() {
	const text1 = document.getElementById('text').value;
	const text2 = document.getElementById('text2').value;
	const wynik = document.getElementById('wynik');

	const wynik2 = anagram(text1, text2) ? 'są anagramami' : 'nie są anagramami';
	wynik.innerText = wynik2;
}

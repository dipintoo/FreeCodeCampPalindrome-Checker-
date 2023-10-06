// STEP //

// 1. Bersihkan input string (str) dari non-word karakter. Setelah di bersihkan, ubah semua huruf ke lowercase
// 2. Buat variabel baru yang berisi reverse dari input
// 3. Bandingkan input dengan reverse apakah sama atau tidak. Jika sama return true jika tidak return false

function palindrome(str) {
	const cleaningStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	const reversedStr = cleaningStr.split("").reverse().join("");
	return cleaningStr === reversedStr;
}

console.log(palindrome("1 eye for of 1 eye.")); // Output: false
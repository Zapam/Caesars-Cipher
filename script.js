let input = document.querySelector(".input");
let button = document.querySelector(".check-button");
let result = document.querySelector(".result");

function rot13() {
	let value = input.value;
	let ans = "";
	if (value == "") {
		ans = "Please enter a text to convert TO ROT13.";
    result.innerHTML = ans;
		return;
	} else {
		for (let i = 0; i < value.length; i++) {
			let char = value[i];
			let ascii = char.charCodeAt();
			if (ascii >= 65 && ascii <= 77) {
				ans += String.fromCharCode(ascii + 13);
			} else if (ascii >= 78 && ascii <= 90) {
				ans += String.fromCharCode(ascii - 13);
			} else {
				ans += String.fromCharCode(ascii);
			}
		}
    result.innerHTML = `Your Text Converted to ROT13 is: <span class='text-amber-700 font-bold'>'${ans}'</span>`;

  result.classList.remove("opacity-0");
    result.classList.add("opacity-100");
	}
	
}

button.addEventListener("click", rot13);
input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		rot13();
	}
});

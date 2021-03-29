var keyboard = document.getElementById("keyboard");
var keyboardButtons = document.getElementsByTagName("button");
var keyboardInput = document.getElementById("textarea");

function keypress() {
	for (var i = 0; i < keyboard.length; i++) {
		keyboard[i].onclick = function () {
			var value = this.textContent;
			switch (value) {
				case "Back Space":
					deleteChar();
					break;
				case "Caps Lock":
					changeCaps();
					break;
				case "Shift":
					shiftCaps();
					break;
				case "OK":
					submitForm();
					break;
				case "Enter":
					buttonClick("\r\n");
					break;
				case "Space":
					buttonClick(" ");
					break;
				default:
					buttonClick(value);
			}
		};
	}
}

function deleteChar() {
	keyboardInput.value = keyboardInput.value.slice(0, -1);
}

function shiftCaps() {
	keyboard.classList.add("shift-caps");
}

function changeCaps() {
	keyboard.classList.toggle("change-caps");
}

function submitForm() {
	alert(keyboardInput.value);
	keyboardInput.value = "";
	startPosition = 0;
	endPosition = 0;
}
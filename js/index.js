Init();

function Init() {
	const whoButton = document.getElementById("who");
	const whatButton = document.getElementById("what");
	const projectButton = document.getElementById("projects");
	const callsButton = document.getElementById("calls");
	const logButton = document.getElementById("log");

	if (whoButton) {
		whoButton.addEventListener("click", function () {
			window.scrollTo({ left: 1550, behavior: "smooth" });
		});
	}

	if (whatButton) {
		whatButton.addEventListener("click", function () {
			window.scrollTo({ left: 2300, behavior: "smooth" });
		});
	}

	if (projectButton) {
		projectButton.addEventListener("click", function () {
			window.scrollTo({ left: 3550, behavior: "smooth" });
		});
	}

	if (callsButton) {
		callsButton.addEventListener("click", function () {
			window.scrollTo({ left: 1550, behavior: "smooth" });
		});
	}

	if (logButton) {
		logButton.addEventListener("click", function () {
			window.scrollTo({ left: 3000, behavior: "smooth" });
		});
	}
}

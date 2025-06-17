Init();

function Init() {
	const whoButton = document.getElementById("who");
	const whatButton = document.getElementById("what");
	const projectButton = document.getElementById("projects");

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
}

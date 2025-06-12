const logMood = document.querySelector("#log-mood");
const listMood = document.querySelector("#list-mood");
const lastMoodName = document.querySelector("#last-mood-name");
const lastMoodImg = document.querySelector("#last-mood-img");
const logForm = document.querySelector("#log-form");
const body = document.body;
const main = document.main;

logMood.addEventListener("click", (e) => {
	e.preventDefault();
	const modal = createModal();
	body.appendChild(createModal());
});

function createModal() {
	const modal = document.createElement("div");
	const logForm = document.createElement("form");
	const btnClose = document.createElement("btn");
	const imgClose = document.createElement("img");
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	const firstLabel = document.createElement("label");
	const firstInput = document.createElement("input");
	const firstH5 = document.createElement("h5");
	const secondLabel = document.createElement("label");
	const secondInput = document.createElement("input");
	const secondH5 = document.createElement("h5");
	const thirdLabel = document.createElement("label");
	const thirdInput = document.createElement("input");
	const thirdH5 = document.createElement("h5");
	const fourthLabel = document.createElement("label");
	const fourthInput = document.createElement("input");
	const fourthH5 = document.createElement("h5");
	const fiveLabel = document.createElement("label");
	const fiveInput = document.createElement("input");
	const fiveH5 = document.createElement("h5");
	const btnLogMood = document.createElement("button");
	const h4 = document.createElement("h4");

	modal.classList.add("modal");
	logForm.classList.add("log-form");
	btnClose.classList.add("btn", "text");
	h2.classList.add("text-preset-2");
	h3.classList.add("text-preset-3");
	firstH5.classList.add("text-preset-5");
	secondH5.classList.add("text-preset-5");
	thirdH5.classList.add("text-preset-5");
	fourthH5.classList.add("text-preset-5");
	fiveH5.classList.add("text-preset-5");
	btnLogMood.classList.add("btn", "block", "blue-600", "neutral-o-text");
	h4.classList.add("text-preset-4");

	imgClose.src = "./assets/close";
	imgClose.alt = "close button";

	firstInput.setAttribute("type", "radio");
	firstInput.setAttribute("name", "mood");
	firstInput.setAttribute("value", "very-happy");
	secondInput.setAttribute("type", "radio");
	secondInput.setAttribute("name", "mood");
	secondInput.setAttribute("value", "happy");
	thirdInput.setAttribute("type", "radio");
	thirdInput.setAttribute("name", "mood");
	thirdInput.setAttribute("value", "neutral");
	fourthInput.setAttribute("type", "radio");
	fourthInput.setAttribute("name", "mood");
	fourthInput.setAttribute("value", "sad");
	fiveInput.setAttribute("type", "radio");
	fiveInput.setAttribute("name", "mood");
	fiveInput.setAttribute("value", "very-sad");
	btnLogMood.setAttribute("type", "submit");

	h2.textContent = "Log your mood";
	h3.textContent = "How was your mood today";
	firstH5.textContent = "Very Happy";
	secondH5.textContent = "Happy";
	thirdH5.textContent = "Neutral";
	fourthH5.textContent = "Sad";
	fiveH5.textContent = "Very Sad";
	btnLogMood.textContent = "Log Mood";

	modal.appendChild(logForm);
	logForm.appendChild(btnClose);
	btnClose.appendChild(imgClose);
	logForm.appendChild(h2);
	logForm.appendChild(h3);
	logForm.appendChild(firstLabel);
	firstLabel.appendChild(firstInput);
	firstLabel.appendChild(firstH5);
	logForm.appendChild(secondLabel);
	secondLabel.appendChild(secondInput);
	secondLabel.appendChild(secondH5);
	logForm.appendChild(thirdLabel);
	thirdLabel.appendChild(thirdInput);
	thirdLabel.appendChild(thirdH5);
	logForm.appendChild(fourthLabel);
	fourthLabel.appendChild(fourthInput);
	fourthLabel.appendChild(fourthH5);
	logForm.appendChild(fiveLabel);
	fiveLabel.appendChild(fiveInput);
	fiveLabel.appendChild(fiveH5);
	logForm.appendChild(btnLogMood);
	btnLogMood.appendChild(h4);

	btnClose.addEventListener("click", () => {
		modal.remove();
	});

	btnLogMood.addEventListener("click", (e) => {
		e.preventDefault();
        modal.remove();
	});

	return modal;
}

// function createLastMood() {
//     const sectionMood = document.createElement("sectino");
// 	const lastMoodDiv = document.createElement("div");
// 	const lastMoodH3 = document.createElement("h3");
// 	const lastMoodH2 = document.createElement("h2");
// 	const lastMoodImg = document.createElement("img");
//     const listMood = document.createElement("div");

//     sectionMood.classList.add("dashboard");
// 	lastMoodDiv.classList.add("last-mood");
// 	lastMoodH3.classList.add("text-preset-4");
// 	lastMoodH2.classList.add("text-preset-2");
//     listMood.classList.add("list-mood");

// 	lastMoodH2.setAttribute("id", "last-mood-name");
// 	lastMoodImg.setAttribute("id", "last-mood-img");
//     listMood.setAttribute("id", "list-mood");

// 	lastMoodImg.src = "";
// 	lastMoodImg.alt = "";

// 	lastMoodH3.textContent = "Last mood";

//     sectionMood.appendChild(lastMoodDiv);
// 	lastMoodDiv.appendChild(lastMoodH3);
// 	lastMoodDiv.appendChild(lastMoodH2);
// 	lastMoodDiv.appendChild(lastMoodImg);
//     sectionMood.appendChild(listMood);

//     return sectionMood; 
// }

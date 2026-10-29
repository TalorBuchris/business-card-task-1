// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

let body = document.querySelector("body");
let form = document.querySelector("form");
let nameInput = document.querySelector("#name-input");
let jobInput = document.querySelector("#job-input");
let emailInput = document.querySelector("#email-input");
let bioInput = document.querySelector("#bio-input");
let colorSelect = document.querySelector("#color-select");
let bioCounter = document.querySelector("#bio-left");
let counter = document.querySelector(".counter");
let themeBtn = document.querySelector("#theme-btn");
let resetBtn = document.querySelector("#reset-btn");

console.log(nameInput.value, jobInput.value, emailInput.value, bioInput.value, colorSelect.value);

// השדות בכרטיס
let avatar = document.querySelector("#avatar")
let cardName = document.querySelector("#card-name");
let cardJob = document.querySelector("#card-job");
let cardEmail = document.querySelector("#card-email");
let cardBio = document.querySelector("#card-bio");

// תוכן ברירת מחדל
const displayAvatar = avatar.innerHTML;
const displayCardName = cardName.innerHTML;
const displayCardJob = cardJob.innerHTML;
const displayCardEmail = cardEmail.innerHTML;
const displayCardBio = cardBio.innerHTML;
const themeBtnText = themeBtn.value;

console.log("BBBBBBBBB" + displayAvatar, displayCardName, displayCardJob, displayCardEmail, displayCardBio);

// הוספת האזנה לאירועים
nameInput.addEventListener("input", changeNameInput);
jobInput.addEventListener("input", changeJobInput);
emailInput.addEventListener("input", changeEmailInput);
bioInput.addEventListener("input", changeBioInput);
colorSelect.addEventListener("change", changeColorSelect);
themeBtn.addEventListener("click", toggleDarkMode);
resetBtn.addEventListener("click", resetPage)


// פונקציות לשינוי התוכן בכרטיס בעת שינוי
function changeNameInput() {
    if (!nameInput.value.trim()) {
        cardName.textContent = displayCardName;
        avatar.textContent = displayAvatar;
    }
    else {
        let name = nameInput.value.trim();
        cardName.textContent = name;
        avatar.textContent = name[0].toUpperCase();
    }
}
function changeJobInput() {
    cardJob.textContent = !jobInput.value.trim() ? displayCardJob : jobInput.value.trim();
}
function changeEmailInput() {
    cardEmail.textContent = !emailInput.value.trim() ? displayCardEmail : emailInput.value.trim();
}
function changeBioInput() {
    cardBio.textContent = !bioInput.value.trim() ? displayCardBio : bioInput.value.trim();
    let chars = (80 - bioInput.value.length);
    bioCounter.textContent = chars;
    counter.classList.toggle("warning", chars <= 10);
}

// החלפת צבע לאווטר ולמסגרת הכרטיס
function changeColorSelect() {
    let card = document.querySelector("#card");
    avatar.style.backgroundColor = colorSelect.value;
    card.style.borderColor = colorSelect.value;
}

// הוספת מצב כהה
function toggleDarkMode() {
    body.classList.toggle("dark");
    themeBtn.textContent = body.classList.contains("dark") ? "Light mode" : "Dark mode";
}

// איפוס הדף
function resetPage() {
    form.reset();

    changeNameInput();
    changeJobInput();
    changeEmailInput();
    changeBioInput();
    changeColorSelect();
    if (body.classList.contains("dark"))
        toggleDarkMode();
}
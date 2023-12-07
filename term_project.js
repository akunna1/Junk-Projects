// JavaScript to handle tab switching
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const formTab = document.getElementById('formTab');
const description = document.getElementById('description');

// Function to set tab1 as active and show description
function activateTab1() {
    tab1.classList.add('active');
    tab2.classList.remove('active');
    formTab.classList.remove('active');
    description.style.display = 'block';
}

// Function to set tab2 as active and hide description
function activateTab2() {
    tab1.classList.remove('active');
    tab2.classList.add('active');
    formTab.classList.add('active');
    description.style.display = 'none';
}

// Initial setup: Activate tab1 by default
activateTab1();

// Event listeners for tab clicks
tab1.addEventListener('click', () => {
    activateTab1();
});

tab2.addEventListener('click', () => {
    activateTab2();
});

// Save the active tab state to sessionStorage
tab1.addEventListener('click', () => {
    sessionStorage.setItem('activeTab', 'tab1');
});

tab2.addEventListener('click', () => {
    sessionStorage.setItem('activeTab', 'tab2');
});

// Check for the active tab state in sessionStorage on page load
window.addEventListener('load', () => {
    const activeTab = sessionStorage.getItem('activeTab');
    if (activeTab === 'tab2') {
        activateTab2();
    }
});


// Current Enrollment Dropdown Menu
function show_current_enrollment_Details() {
    var current_enrollment_Dropdown = document.getElementById("current_enrollment_Dropdown");
    var current_enrollment_Details = document.getElementById("current_enrollment_Details");

    if (current_enrollment_Dropdown.value === "Yes") {
        current_enrollment_Details.style.display = "block";
    } else {
        current_enrollment_Details.style.display = "none";
    }
}

// Validating Link
function validateLink(inputId) {
    var linkInput = document.getElementById(inputId); // Getting the input element
    var inputValue = linkInput.value.trim(); // Getting the entered value

    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/; // Regular expression to match a URL pattern

    if (urlPattern.test(inputValue)) {   // Testing if the entered value matches the URL pattern
        alert("Valid link format!");
    } else {
        alert("Invalid link format. Please enter a valid URL.");
    }
}

// Today's Date
  // Getting the current date
  const today = new Date();

  // Extracting the year, month, and day components
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because months are zero-based
  const day = String(today.getDate()).padStart(2, '0');

  // Formating the date as YYYY/MM/DD
  const formattedDate = `${year}/${month}/${day}`;

  // Setting the formatted date as the input value
  document.getElementById('date').value = formattedDate;

// Enabling the Submit Button
// Function to check if all required fields are filled
function checkFormValidity() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const homeNumber = document.getElementById('homeNumber').value;
    const streetName = document.getElementById('streetName').value;
    const city = document.getElementById('city').value;
    const usState = document.getElementById('usState').value;
    const zipCode = document.getElementById('zipCode').value;


    const degreeType = document.getElementById('degreeType').value;
    const major = document.getElementById('major').value;
    const uni_name = document.getElementById('uni_name').value;
    const gradDate = document.getElementById('gradDate').value;
    const current_employer = document.getElementById('current_employer').value;
    const current_job_title = document.getElementById('current_job_title').value;
    const current_job_duration = document.getElementById('current_job_duration').value;
    const skills = document.getElementById('skills').value;
    const certs = document.getElementById('certs').value;
    const resume = document.getElementById('resume').value;
    const cover_letter = document.getElementById('cover_letter').value;
    const affirmation1 = document.getElementById('affirmation1').value;
    const fullname = document.getElementById('fullname').value;

    // Enabling or disabling the submit button based on form validity
    const submitBtn = document.getElementById('submitBtn');
    if (firstName && lastName && dob && gender && phoneNumber && email && homeNumber && streetName && city
        && usState && zipCode && degreeType && major && uni_name && gradDate && current_employer && current_job_title 
        && current_job_duration && skills && certs && resume && cover_letter && affirmation1 && fullname) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// Event listeners for form inputs
document.getElementById('firstName').addEventListener('input', checkFormValidity);
document.getElementById('lastName').addEventListener('input', checkFormValidity);
document.getElementById('dob').addEventListener('input', checkFormValidity);
document.getElementById('gender').addEventListener('input', checkFormValidity);
document.getElementById('phoneNumber').addEventListener('input', checkFormValidity);
document.getElementById('email').addEventListener('input', checkFormValidity);
document.getElementById('homeNumber').addEventListener('input', checkFormValidity);
document.getElementById('streetName').addEventListener('input', checkFormValidity);
document.getElementById('city').addEventListener('input', checkFormValidity);
document.getElementById('usState').addEventListener('input', checkFormValidity);
document.getElementById('zipCode').addEventListener('input', checkFormValidity);
document.getElementById('degreeType').addEventListener('input', checkFormValidity);
document.getElementById('major').addEventListener('input', checkFormValidity);
document.getElementById('uni_name').addEventListener('input', checkFormValidity);
document.getElementById('gradDate').addEventListener('input', checkFormValidity);
document.getElementById('current_employer').addEventListener('input', checkFormValidity);
document.getElementById('current_job_title').addEventListener('input', checkFormValidity);
document.getElementById('current_job_duration').addEventListener('input', checkFormValidity);
document.getElementById('skills').addEventListener('input', checkFormValidity);
document.getElementById('certs').addEventListener('input', checkFormValidity);
document.getElementById('resume').addEventListener('input', checkFormValidity);
document.getElementById('cover_letter').addEventListener('input', checkFormValidity);
document.getElementById('affirmation1').addEventListener('input', checkFormValidity);
document.getElementById('fullname').addEventListener('input', checkFormValidity);

// Initial form validation check
checkFormValidity();

// 1) Email and Form Submission validation
const form = document.querySelector('form');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Creating arrays of email inputs and error elements
const emailInputs = [
    document.getElementById('email'),
    document.getElementById('email_1'),
    document.getElementById('email_2')
];

const errorElements = [
    document.getElementById('emailError'),
    document.getElementById('emailError_1'),
    document.getElementById('emailError_2')
];

function validateEmail(email) {
    return emailPattern.test(email);
}

function handleSubmit(event) {
    event.preventDefault();

    // Iterate through email inputs and error elements
    for (let i = 0; i < emailInputs.length; i++) {
        const email = emailInputs[i].value;
        const errorElement = errorElements[i];

        errorElement.textContent = validateEmail(email) ? '' : 'Please enter a valid email address.';
        errorElement.style.color = 'red';
    }
}

form.addEventListener('submit', handleSubmit);


// 2) Dual Enrollment Additional Information in 'Student Category'
const studentCategory = document.getElementById('studentCategory');
const alternateSchoolInfo = document.getElementById('alternateSchoolInfo');

studentCategory.addEventListener('change', function () {
    alternateSchoolInfo.style.display = studentCategory.value === 'Dual Enrollment' ? 'block' : 'none';
});

// 3) 'Student Category' to 'Citizenship and Residency'
const studentCategorySelect = document.getElementById('studentCategory');
const citizenshipStatusSelect = document.getElementById('status');
const errorMessage = document.getElementById('error-message');

studentCategorySelect.addEventListener('change', updateErrorMessage);
citizenshipStatusSelect.addEventListener('change', updateErrorMessage);

function updateErrorMessage() {
    const studentCategory = studentCategorySelect.value;
    const citizenshipStatus = citizenshipStatusSelect.value;
    const domesticCategories = ['Domestic (In State)', 'Domestic (Out of State)'];
    const internationalCategories = ['International Student', 'Other (Specify)'];

    errorMessage.style.display = 
        (domesticCategories.includes(studentCategory) && internationalCategories.includes(citizenshipStatus)) ||
        (studentCategory === 'International' && (
            citizenshipStatus === 'DACA Recipient' || citizenshipStatus === 'Other (Specify)' ||
            citizenshipStatus === 'Dual Citizenship' || citizenshipStatus === 'Permanent Resident (Green Card Holder)' ||
            citizenshipStatus === 'Refugee/Asylee' || citizenshipStatus === 'Undocumented' ||
            citizenshipStatus === 'U.S. Citizen')
        ) ? 'block' : 'none';
}

// 4) US state selection in 'Citizenship and Residency'
const country1Select = document.getElementById('country1');
const usStateSection = document.getElementById('usStateSection');

country1Select.addEventListener('change', function () {
    usStateSection.style.display = country1Select.value === 'United States' ? 'block' : 'none';
});

// Initialize the display based on the initial selection
usStateSection.style.display = country1Select.value === 'United States' ? 'block' : 'none';

// 5) Asking for non-American Citizenship in 'Citizenship and Residency'
const statusCategory = document.getElementById('status');
const alternateCountryInfo = document.getElementById('country2Div');

statusCategory.addEventListener('change', function () {
    const triggerOptions = [
        'Dual Citizenship',
        'International Student',
        'Other (Specify)',
        'Permanent Resident (Green Card Holder)',
        'Refugee/Asylee',
        'Undocumented'
    ];

    alternateCountryInfo.style.display = triggerOptions.includes(statusCategory.value) ? 'block' : 'none';
});

// 6) Asking for Visa Status
const visaStatusDiv = document.getElementById('visaStatus');

statusCategory.addEventListener('change', function () {
    visaStatusDiv.style.display = statusCategory.value === 'International Student' ? 'block' : 'none';
});


// 7) Asking for Green Card Upload for Permanent Residents
document.addEventListener('DOMContentLoaded', function () {
    const statusSelect2 = document.getElementById('status');
    const greenCardInput = document.getElementById('greenCardDiv');

    statusSelect2.addEventListener('change', function () {
        greenCardInput.style.display = statusSelect2.value === 'Permanent Resident (Green Card Holder)' ? 'block' : 'none';
    });
});

// 8) Felony Conviction question
function showConvictionDetails() {
    var convictionDropdown = document.getElementById("convictionDropdown");
    var convictionDetails = document.getElementById("convictionDetails");

    if (convictionDropdown.value === "Yes") {
        convictionDetails.style.display = "block";
    } else {
        convictionDetails.style.display = "none";
    }
}

// 9) Misdemeanor Conviction question
function showConviction1Details() {
    var conviction1Dropdown = document.getElementById("conviction1Dropdown");
    var conviction1Details = document.getElementById("conviction1Details");

    if (conviction1Dropdown.value === "Yes") {
        conviction1Details.style.display = "block";
    } else {
        conviction1Details.style.display = "none";
    }
}


// 10) Parole Conviction question
function showConviction2Details() {
    var conviction2Dropdown = document.getElementById("conviction2Dropdown");
    var conviction2Details = document.getElementById("conviction2Details");

    if (conviction2Dropdown.value === "Yes") {
        conviction2Details.style.display = "block";
    } else {
        conviction2Details.style.display = "none";
    }
}

// 11) School Disciplinary Action
function showConviction3Details() {
    var conviction3Dropdown = document.getElementById("conviction3Dropdown");
    var conviction3Details = document.getElementById("conviction3Details");

    if (conviction3Dropdown.value === "Yes") {
        conviction3Details.style.display = "block";
    } else {
        conviction3Details.style.display = "none";
    }
}

// 12) Validating Link
function validateLink() {
    var linkInput = document.getElementById("linkInput"); // Getting the input element
    var inputValue = linkInput.value.trim(); // Getting the entered value

    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/; // Regular expression to match a URL pattern

    if (urlPattern.test(inputValue)) {   // Testing if the entered value matches the URL pattern
        alert("Valid link format!");
    } else {
        alert("Invalid link format. Please enter a valid URL.");
    }
}

// 13) Word Limit Validation for Prompt 1
function checkWordCount() {
    var textarea = document.getElementById("prompt1"); // Getting the textarea element
    var text = textarea.value; // Getting the text content from the textarea
    var words = text.split(/\s+/);  // Splitting the text into words

    var wordCount = words.length; // Counting the number of words
    
    if (wordCount > 800) { // Checking if the word count exceeds the limit (800 words)
        alert("You have exceeded the maximum word limit (800 words). Please shorten your response."); 

        var truncatedText = words.slice(0, 800).join(" "); // Truncating the text to 800 words
        textarea.value = truncatedText;  // Updating the textarea with the truncated text
    }
}

// 14) Word Limit Validation for Prompt 2 (activities)
function checkWordCount() {
    var textarea2 = document.getElementById("activities"); // Getting the textarea element
    var text2 = textarea2.value; // Getting the text content from the textarea
    var words2 = text2.split(/\s+/);  // Splitting the text into words

    var wordCount2 = words2.length; // Counting the number of words
    
    if (wordCount2 > 650) { // Checking if the word count exceeds the limit (650 words)
        alert("You have exceeded the maximum word limit (650 words). Please shorten your response."); 

        var truncatedText2 = words2.slice(0, 650).join(" "); // Truncating the text to 650 words
        textarea2.value = truncatedText2;  // Updating the textarea with the truncated text
    }
}

// 15) Saving form data to session storage
function saveFormData() {
    const formData = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        areaCode: document.getElementById("areaCode").value,
        numDigits: document.getElementById("numDigits").value,
        email: document.getElementById("email").value,
        homeNumber: document.getElementById("homeNumber").value,
        UnitNumber: document.getElementById("UnitNumber").value,
        streetName: document.getElementById("streetName").value,
        HSName: document.getElementById("HSName").value,
        prompt1: document.getElementById("prompt1").value,
        activities: document.getElementById("activities").value
    };
    sessionStorage.setItem("formData", JSON.stringify(formData));
}

function loadFormData() {  // Loading form data from session storage
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
        const formData = JSON.parse(storedData);
        document.getElementById("firstName").value = formData.firstName;
        document.getElementById("middleName").value = formData.middleName;
        document.getElementById("lastName").value = formData.lastName;
        document.getElementById("areaCode").value = formData.areaCode;
        document.getElementById("numDigits").value = formData.numDigits;
        document.getElementById("email").value = formData.email;
        document.getElementById("homeNumber").value = formData.homeNumber;
        document.getElementById("UnitNumber").value = formData.UnitNumber;
        document.getElementById("streetName").value = formData.streetName;
        document.getElementById("HSName").value = formData.HSName;
        document.getElementById("prompt1").value = formData.prompt1;
        document.getElementById("activities").value = formData.activities;
    }
}

document.getElementById("applicationForm").addEventListener("submit", saveFormData);

window.addEventListener("load", loadFormData); // Loading saved form data when the page loads

//16) Application Review
    function scrollToFormStart() {  // Function to scroll to the top of the form section
        const formSection = document.getElementById('applicationForm'); // ID of the form section
        formSection.scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById('editButton').addEventListener('click', function () { // Event listener for the "Review Application" button
        scrollToFormStart(); // Scroll to the beginning of the form
    });


// 17) Fee Waiver Section
function feeWaiver() {
    var waiverDropdown = document.getElementById("waiver");
    var waiverDetails = document.getElementById("waiverDetails");

    if (waiverDropdown.value === "Yes") {
        waiverDetails.style.display = "block";
    } else {
        waiverDetails.style.display = "none";
    }
    if (waiverDropdown.value === "No") {
        waiverDetails1.style.display = "block";
    } else {
        waiverDetails1.style.display = "none";
    }
}

// 18) Enabling the Submit Button
// Function to check if all required fields are filled
function checkFormValidity() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const SSN = document.getElementById('SSN').value;
    const areaCode = document.getElementById('areaCode').value;
    const numDigits = document.getElementById('numDigits').value;
    const email = document.getElementById('email').value;
    const homeNumber = document.getElementById('homeNumber').value;
    const streetName = document.getElementById('streetName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const country = document.getElementById('country').value;

    const firstName_1 = document.getElementById('firstName_1').value;
    const lastName_1 = document.getElementById('lastName_1').value;
    const dob_1 = document.getElementById('dob_1').value;
    const gender_1 = document.getElementById('gender_1').value;
    const relationship_1 = document.getElementById('relationship_1').value;
    const SSN_1 = document.getElementById('SSN_1').value;
    const areaCode_1 = document.getElementById('areaCode_1').value;
    const numDigits_1 = document.getElementById('numDigits_1').value;
    const email_1 = document.getElementById('email_1').value;
    const homeNumber_1 = document.getElementById('homeNumber_1').value;
    const streetName_1 = document.getElementById('streetName_1').value;
    const city_1 = document.getElementById('city_1').value;
    const state_1 = document.getElementById('state_1').value;
    const zipCode_1 = document.getElementById('zipCode_1').value;
    const country_1 = document.getElementById('country_1').value;

    const firstName_2 = document.getElementById('firstName_2').value;
    const lastName_2 = document.getElementById('lastName_2').value;
    const dob_2 = document.getElementById('dob_2').value;
    const gender_2 = document.getElementById('gender_2').value;
    const relationship_2 = document.getElementById('relationship_2').value;
    const SSN_2 = document.getElementById('SSN_2').value;
    const areaCode_2 = document.getElementById('areaCode_2').value;
    const numDigits_2 = document.getElementById('numDigits_2').value;
    const email_2 = document.getElementById('email_2').value;
    const homeNumber_2 = document.getElementById('homeNumber_2').value;
    const streetName_2 = document.getElementById('streetName_2').value;
    const city_2 = document.getElementById('city_2').value;
    const state_2 = document.getElementById('state_2').value;
    const zipCode_2 = document.getElementById('zipCode_2').value;
    const country_2 = document.getElementById('country_2').value;

    const studentCategory = document.getElementById('studentCategory').value;
    const status = document.getElementById('status').value;
    const country1 = document.getElementById('country1').value;
    const HSName = document.getElementById('HSName').value;
    const HSNumber = document.getElementById('HSNumber').value;
    const streetName_4 = document.getElementById('streetName_4').value;
    const city_4 = document.getElementById('city_4').value;
    const state_4 = document.getElementById('state_4').value;
    const zipCode_4 = document.getElementById('zipCode_4').value;
    const country_4 = document.getElementById('country_4').value;
    const grad = document.getElementById('grad').value;
    const testsDocuments = document.getElementById('testsDocuments').value;
    const term = document.getElementById('term').value;
    const degreeType = document.getElementById('degreeType').value;
    const major = document.getElementById('major').value;
    const threes = document.getElementById('threes').value;
    const rec = document.getElementById('rec').value;
    const appType = document.getElementById('appType').value;
    const convictionDropdown = document.getElementById('convictionDropdown').value;
    const conviction1Dropdown = document.getElementById('conviction1Dropdown').value;
    const conviction2Dropdown = document.getElementById('conviction2Dropdown').value;
    const conviction3Dropdown = document.getElementById('conviction3Dropdown').value;
    const affirmation1 = document.getElementById('affirmation1').value;
    const affirmation2 = document.getElementById('affirmation2').value;
    const affirmation3 = document.getElementById('affirmation3').value;
    const affirmation4 = document.getElementById('affirmation4').value;
    const affirmation5 = document.getElementById('affirmation5').value;
    const affirmation6 = document.getElementById('affirmation6').value;
    const affirmation7 = document.getElementById('affirmation7').value;
    const authenticity = document.getElementById('authenticity').value;
    const fullname = document.getElementById('fullname').value;
    const waiver = document.getElementById('waiver').value;

    // Enabling or disabling the submit button based on form validity
    const submitBtn = document.getElementById('submitBtn');
    if (firstName && lastName && dob && gender && SSN && areaCode && numDigits && email && homeNumber && streetName && city
        && state && zipCode && country && firstName_1 && lastName_1 && dob_1 && gender_1 && relationship_1 && SSN_1
        && areaCode_1 && numDigits_1 & email_1 && homeNumber_1 && streetName_1 && city_1 && state_1 && zipCode_1 
        && country_1 && firstName_2 && lastName_2 && dob_2 && gender_2 && relationship_2 && SSN_2
        && areaCode_2 && numDigits_2 & email_2 && homeNumber_2 && streetName_2 && city_2 && state_2 && zipCode_2
        && country_2 && studentCategory && status && country1 && HSName && HSNumber && streetName_4 &&
        city_4 && state_4 && zipCode_4 && country_4 && grad && testsDocuments && term && degreeType && major
        && threes && rec && appType && convictionDropdown && conviction1Dropdown && conviction2Dropdown && 
        conviction3Dropdown && affirmation1 && affirmation2 && affirmation3 && affirmation4 && affirmation5
        && affirmation6 && affirmation7 && authenticity && fullname && waiver) {
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
document.getElementById('SSN').addEventListener('input', checkFormValidity);
document.getElementById('areaCode').addEventListener('input', checkFormValidity);
document.getElementById('numDigits').addEventListener('input', checkFormValidity);
document.getElementById('email').addEventListener('input', checkFormValidity);
document.getElementById('homeNumber').addEventListener('input', checkFormValidity);
document.getElementById('streetName').addEventListener('input', checkFormValidity);
document.getElementById('city').addEventListener('input', checkFormValidity);
document.getElementById('state').addEventListener('input', checkFormValidity);
document.getElementById('zipCode').addEventListener('input', checkFormValidity);
document.getElementById('country').addEventListener('input', checkFormValidity);

document.getElementById('firstName_1').addEventListener('input', checkFormValidity);
document.getElementById('lastName_1').addEventListener('input', checkFormValidity);
document.getElementById('dob_1').addEventListener('input', checkFormValidity);
document.getElementById('gender_1').addEventListener('input', checkFormValidity);
document.getElementById('relationship_1').addEventListener('input', checkFormValidity);
document.getElementById('SSN_1').addEventListener('input', checkFormValidity);
document.getElementById('areaCode_1').addEventListener('input', checkFormValidity);
document.getElementById('numDigits_1').addEventListener('input', checkFormValidity);
document.getElementById('email_1').addEventListener('input', checkFormValidity);
document.getElementById('homeNumber_1').addEventListener('input', checkFormValidity);
document.getElementById('streetName_1').addEventListener('input', checkFormValidity);
document.getElementById('city_1').addEventListener('input', checkFormValidity);
document.getElementById('state_1').addEventListener('input', checkFormValidity);
document.getElementById('zipCode_1').addEventListener('input', checkFormValidity);
document.getElementById('country_1').addEventListener('input', checkFormValidity);

document.getElementById('firstName_2').addEventListener('input', checkFormValidity);
document.getElementById('lastName_2').addEventListener('input', checkFormValidity);
document.getElementById('dob_2').addEventListener('input', checkFormValidity);
document.getElementById('gender_2').addEventListener('input', checkFormValidity);
document.getElementById('relationship_2').addEventListener('input', checkFormValidity);
document.getElementById('SSN_2').addEventListener('input', checkFormValidity);
document.getElementById('areaCode_2').addEventListener('input', checkFormValidity);
document.getElementById('numDigits_2').addEventListener('input', checkFormValidity);
document.getElementById('email_2').addEventListener('input', checkFormValidity);
document.getElementById('homeNumber_2').addEventListener('input', checkFormValidity);
document.getElementById('streetName_2').addEventListener('input', checkFormValidity);
document.getElementById('city_2').addEventListener('input', checkFormValidity);
document.getElementById('state_2').addEventListener('input', checkFormValidity);
document.getElementById('zipCode_2').addEventListener('input', checkFormValidity);
document.getElementById('country_2').addEventListener('input', checkFormValidity);

document.getElementById('studentCategory').addEventListener('input', checkFormValidity);
document.getElementById('status').addEventListener('input', checkFormValidity);
document.getElementById('country1').addEventListener('input', checkFormValidity);
document.getElementById('HSName').addEventListener('input', checkFormValidity);
document.getElementById('HSNumber').addEventListener('input', checkFormValidity);
document.getElementById('streetName_4').addEventListener('input', checkFormValidity);
document.getElementById('city_4').addEventListener('input', checkFormValidity);
document.getElementById('state_4').addEventListener('input', checkFormValidity);
document.getElementById('zipCode_4').addEventListener('input', checkFormValidity);
document.getElementById('country_4').addEventListener('input', checkFormValidity);
document.getElementById('grad').addEventListener('input', checkFormValidity);
document.getElementById('testsDocuments').addEventListener('input', checkFormValidity);
document.getElementById('term').addEventListener('input', checkFormValidity);
document.getElementById('degreeType').addEventListener('input', checkFormValidity);
document.getElementById('major').addEventListener('input', checkFormValidity);
document.getElementById('threes').addEventListener('input', checkFormValidity);
document.getElementById('rec').addEventListener('input', checkFormValidity);
document.getElementById('appType').addEventListener('input', checkFormValidity);
document.getElementById('convictionDropdown').addEventListener('input', checkFormValidity);
document.getElementById('conviction1Dropdown').addEventListener('input', checkFormValidity);
document.getElementById('conviction2Dropdown').addEventListener('input', checkFormValidity);
document.getElementById('conviction3Dropdown').addEventListener('input', checkFormValidity);
document.getElementById('affirmation1').addEventListener('input', checkFormValidity);
document.getElementById('affirmation2').addEventListener('input', checkFormValidity);
document.getElementById('affirmation3').addEventListener('input', checkFormValidity);
document.getElementById('affirmation4').addEventListener('input', checkFormValidity);
document.getElementById('affirmation5').addEventListener('input', checkFormValidity);
document.getElementById('affirmation6').addEventListener('input', checkFormValidity);
document.getElementById('affirmation7').addEventListener('input', checkFormValidity);
document.getElementById('authenticity').addEventListener('input', checkFormValidity);
document.getElementById('fullname').addEventListener('input', checkFormValidity);
document.getElementById('waiver').addEventListener('input', checkFormValidity);


// Initial form validation check
checkFormValidity();


// 19) Payment Section (might have to move this to server side code)


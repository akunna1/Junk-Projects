// 1) Function to open the specified tab
function openTab(tabId) {
    // Hides all tab content
    var tabcontents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    // Shows the selected tab content
    document.getElementById(tabId).style.display = "block";

    // Stores the active tab in session storage
    sessionStorage.setItem("activeTab", tabId);
}

// Checking if there is a stored active tab and open it on page load
window.onload = function () {
    var activeTab = sessionStorage.getItem("activeTab");

    // If there is no stored active tab (first visit), open the 'aboutTab' by default
    if (!activeTab) {
        openTab('aboutTab');
    } else {
        // Otherwise, open the stored active tab
        openTab(activeTab);
    }
}

// 2) Navigation buttons
  let currentContainer = 1; // Initialize with the first set of containers

  function changePhoto(step) {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");

    // Hide the current container
    if (currentContainer === 1) {
      container1.style.display = "none";
    } else {
      container2.style.display = "none";
    }

    // Update the current container index
    currentContainer += step;

    // Wrap around to the first set of containers if needed
    if (currentContainer < 1) {
      currentContainer = 2;
    } else if (currentContainer > 2) {
      currentContainer = 1;
    }

    // Show the new current container
    if (currentContainer === 1) {
      container1.style.display = "inline-block";
    } else {
      container2.style.display = "inline-block";
    }
  }


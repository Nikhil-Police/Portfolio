// Function to open the certificate in a modal
function openCertificate(certificateUrl) {
    const modal = document.getElementById("certificateModal");
    const certificateFrame = document.getElementById("certificateFrame");
  
    // Set the iframe source to the certificate URL
    certificateFrame.src = certificateUrl;
  
    // Display the modal
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeCertificate() {
    const modal = document.getElementById("certificateModal");
    const certificateFrame = document.getElementById("certificateFrame");
  
    // Clear the iframe source
    certificateFrame.src = "";
  
    // Hide the modal
    modal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside the modal content
  window.onclick = function (event) {
    const modal = document.getElementById("certificateModal");
    if (event.target === modal) {
      closeCertificate();
    }
  };
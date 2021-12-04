// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that opens make report cover options
var rcBtn = document.getElementById("reportCoverBtn");

// Get the button that cancel report
var rcCancelBtn = document.getElementById("rcCancelBtn");

// Get the button that cancel report
var rcBtnCont = document.getElementById("muReportBtns");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  updatePhotoEmpty.style.display = "none";
  updatePhotoFilled.style.display = "flex";
  reportCoverBtn.classList.add("btn-secondary");
  reportCoverBtn.classList.remove("btn-secondary-disabled");
  reportCoverBtn.disabled = false;
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on make report button open make report cover options
rcBtn.onclick = function() {
  updateReportCover.style.display = "flex";
  muReportBtns.style.display = "flex";
  updatePhotoFilled.style.display = "none";
}


// When the user clicks on the cancel button return to added photos
rcCancelBtn.onclick = function() {
  updatePhotoFilled.style.display = "flex";
  updateReportCover.style.display = "none";
  muReportBtns.style.display = "none";

}


// When the user clicks on the cancel button return to added photos
rcSaveBtn.onclick = function() {
  updatePhotoFilled.style.display = "flex";
  updateReportCover.style.display = "none";
  muReportBtns.style.display = "none";

}

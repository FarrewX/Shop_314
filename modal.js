// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function closeModalIfClickedOutside(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  closeModal2IfClickedOutside(event);
  closeModalIfClickedOutside(event);

}

var modal2 = document.getElementById("mybuy");
var buy = document.getElementById("buy");
var cl = document.getElementsByClassName("cl")[0];
buy.onclick = function() {
  modal2.style.display = "block";
}
cl.onclick = function() {
  modal2.style.display = "none";
}
function closeModal2IfClickedOutside(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

function cancelfunction(){
  modal2.style.display = "none";
}


function confirmfunction(){
  Swal.fire(
    'สั่งซื้อสำเร็จ',
    'You clicked the button!',
    'success'
  )
  modal2.style.display = "none";
  
}

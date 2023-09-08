var myOffcanvas = document.getElementById('myOffcanvas');
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
var myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
  alert("Add item")
});
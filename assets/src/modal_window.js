const modal = document.getElementById("myModal");

const openButton = document.getElementById("modalBtn");

const closeButton = document.getElementsByClassName("closeBtn")[0];

openButton.onclick = () => modal.style.display = "block";
closeButton.onclick = () => modal.style.display = "none";
document.onclick = e => e.target === modal ? modal.style.display = "none" : null;

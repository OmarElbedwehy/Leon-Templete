document.getElementById("toggle").onclick = function() {
  document.getElementById("nav-links").style.display = 'flex';
  document.getElementById('toggle').style.display = 'none';
  document.getElementById('close').style.display = 'block';
}

document.getElementById('close').onclick = function() {
  document.getElementById('toggle').style.display = 'flex';
  document.getElementById("nav-links").style.display = 'none';
  document.getElementById('close').style.display = 'none';
}

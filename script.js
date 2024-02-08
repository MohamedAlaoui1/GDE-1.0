const container = document.getElementById("container");
const popup = document.getElementById("popup");
const readBtn = document.getElementById("read-btn");
const closeBtn = document.getElementById("close");
const toJournal = document.querySelectorAll(".toJournal_btn");
const header = document.querySelector(".nav_bar");
const gdelogo = document.querySelector(".GDE_logo");
const nava = document.querySelectorAll(".colordecider");

function changeColor(color) {
  for (let i = 0; i < nava.length; i++) {
    nava[i].style.color = color;
  }
}

readBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
  container.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
  container.classList.toggle("active");
});

document.onclick = function (e) {
  if (!popup.contains(e.target) && e.target !== readBtn) {
    popup.classList.remove("active");
    container.classList.remove("active");
  }
};
toJournal.forEach(function (btn) {
  let num = btn.getAttribute("id");
  btn.addEventListener("click", () => {
    let pdfFilePath = `PDFS/J${num.slice(2)}.pdf`;

    window.open(pdfFilePath, "_blank");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  gdelogo.classList.toggle("gdemeasure", window.scrollY > 0);

  if (window.scrollY > 0) {
    changeColor("#f0f0f0");
  } else {
    changeColor("#fffcdf");
  }
});

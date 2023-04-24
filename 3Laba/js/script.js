

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};



let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".box-container .box").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});



(function () {
  "use strict";

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -1230);
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
})();


let dialog = document.querySelector("dialog");

let popUP = parseInt(localStorage.getItem("popu")) || 1;

function opDialog() {
  dialog.close();
  popUP = popUP + 1;
  localStorage.setItem("popu", popUP);
}

let closeDialog = document.getElementById("closeDialog");
let closeeDialog = document.getElementById("closeeDialog");

function showDialog() {
  dialog.show();
}
closeDialog.addEventListener("click", closDialog);

function closDialog() {
  dialog.close();
}

closeeDialog.addEventListener("click", opDialog);

if (popUP == 1) {
  window.onload = showDialog();
}



let delay_popup = 10000;
let delay_popup1 = 15000;
setTimeout(
  "document.getElementById('bg_popup').style.display='block'",
  delay_popup
);
setTimeout(
  "document.getElementById('close').style.display='block'",
  delay_popup1
);


let laptops = [
    {
      name: "Ноутбук Acer Nitro 5 AN515-57 (NH.QESEU.00E) FullHD Black",
      information:
        "intel UHD graphics + NVIDIA GeForce RTX 3050 Ti 4Гб | 8 ГБ | HDD | 256 ГБ | Без ОС",
      photo: "img/1.jpg",
    },
    {
      name: "Ноутбук Acer Predator Helios 300 ",
      information:
        "PH317-56 17.3QHD IPS 165Hz/Intel i7-12700H/32/1024F/NVD3080-8/Lin (NH.QGREU.005)",
      photo: "img/2.jpg",
    },
    {
      name: "Ноутбук Acer Predator Helios 300 PH315-55 (NH.QGPEU.002)",
      information:
        "nVidia, RTX 3060, 6.144 ГБ, DDR5 32 ГБ, SSD 1000 ГБ",
      photo: "img/3.jpg",
    },
    {
      name: "Ноутбук Acer Swift Air SFA16-41-R4UN (NX.KABEU.004)",
      information:
        "AMD, AMD Radeon™ Graphics, Оперативна пам'ять: LPDDR5 16 ГБ,Жорсткий диск: 512 ГБ",
      photo: "img/4.png",
    },
    {
      name: "Ноутбук Acer Swift 3 SF314-511 (NX.ABLEU.00E)",
      information: "Дисплей: 14, 1920x1080 (Full HD),Оперативна пам'ять: LPDDR4 8 ГБ, Жорсткий диск: SSD 256 ГБ. ",
      photo: "img/5.jpg",
    },
    {
      name: "Ноутбук Acer Aspire 3 A315-59G (NX.K6WEU.006)",
      information:
        "Дисплей: 14, 1920x1080 (Full HD),Оперативна пам'ять: LPDDR4 8 ГБ, Жорсткий диск: SSD 256 ГБ ",
      photo: "img/6.jpg",
    },
    {
      name: "Ноутбук Acer Swift Air SFA16-41-R4UN",
      information:
        "AMD, AMD Radeon™ Graphics, Оперативна пам'ять: LPDDR5 16 ГБ,Жорсткий диск: 512 ГБ",
      photo: "img/2.jpg",
    },
    {
      name: "Ноутбук Acer Swift Air SFA16-41-R4UN",
      information:
        "nVidia, RTX 3060, 6.144 ГБ, DDR5 32 ГБ, SSD 1000 ГБ",
      photo: "img/1.jpg",
    },
    {
      name: "Ноутбук Acer Aspire 3 A315-59G (NX.K6WEU.006)",
      information: "Intel Core i5 | Десятиядерный | MX550 | 8 ГБ | 512 ГБ | Linux",
      photo: "img/7.jpg",
    },
    {
      name: "Ноутбук Acer Swift 3 SF314-511 (NX.ABLEU.00E)",
      information:
        "Дисплей: 1920x1080 (Full HD),Оперативна пам'ять: LPDDR4 8 ГБ, Жорсткий диск: SSD 256 ГБ.",
      photo: "img/5.jpg",
    },
];

let i = 0;
function loadLaptops() {
  let elem = document.getElementById("laptops");
  let n = Number(document.getElementById("number").value);
  if (n > i) {
    for (; i < n; i++) {
      let div = document.createElement("div");
      div.className = "laptops";
      div.innerHTML = `<img src=${laptops[i].photo}></img>`;
      div.innerHTML += `<h3 class="laptops_name">${laptops[i].name}</h3>`;
      div.innerHTML += `<p class="additional">${laptops[i].information}</p`;
      elem.prepend(div);
    }
  } else if (n < i) {
    let b = i - n;
    i = n;
    console.log(i);
    for (; b > 0; b--) {
      var laptop = document.querySelector(".laptops");
      laptop.removeChild(laptop.firstChild);
    }
  }
}
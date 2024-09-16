let pic11 = document.getElementById("pic1-1");
let pic12 = document.getElementById("pic1-2");
let pic13 = document.getElementById("pic1-3");
let pic21 = document.getElementById("pic2-1");
let pic22 = document.getElementById("pic2-2");
let pic23 = document.getElementById("pic2-3");
let pic31 = document.getElementById("pic3-1");
let pic32 = document.getElementById("pic3-2");
let pic33 = document.getElementById("pic3-3");

let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");

function change_1st_row() {
  //   console.log("clicked");
  if (image1.src == pic11.src) {
    if (Math.floor(Math.random() * 2)) {
      image1.src = pic21.src;
    } else {
      image1.src = pic31.src;
    }
  } else if (image1.src == pic21.src) {
    if (Math.floor(Math.random() * 2)) {
      image1.src = pic11.src;
    } else {
      image1.src = pic31.src;
    }
  } else if (image1.src == pic31.src) {
    if (Math.floor(Math.random() * 2)) {
      image1.src = pic11.src;
    } else {
      image1.src = pic21.src;
    }
  }

  win_check();
}

function change_2nd_row() {
  if (image2.src == pic12.src) {
    if (Math.floor(Math.random() * 2)) {
      image2.src = pic22.src;
    } else {
      image2.src = pic32.src;
    }
  } else if (image2.src == pic22.src) {
    if (Math.floor(Math.random() * 2)) {
      image2.src = pic12.src;
    } else {
      image2.src = pic32.src;
    }
  } else if (image2.src == pic32.src) {
    if (Math.floor(Math.random() * 2)) {
      image2.src = pic12.src;
    } else {
      image2.src = pic22.src;
    }
  }

  win_check();
}

function change_3rd_row() {
  if (image3.src == pic13.src) {
    if (Math.floor(Math.random() * 2)) {
      image3.src = pic23.src;
    } else {
      image3.src = pic33.src;
    }
  } else if (image3.src == pic23.src) {
    if (Math.floor(Math.random() * 2)) {
      image3.src = pic13.src;
    } else {
      image3.src = pic33.src;
    }
  } else if (image3.src == pic33.src) {
    if (Math.floor(Math.random() * 2)) {
      image3.src = pic13.src;
    } else {
      image3.src = pic23.src;
    }
  }

  win_check();
}

function win_check() {
  if (
    (image1.src == pic11.src &&
      image2.src == pic12.src &&
      image3.src == pic13.src) ||
    (image1.src == pic21.src &&
      image2.src == pic22.src &&
      image3.src == pic23.src) ||
    (image1.src == pic31.src &&
      image2.src == pic32.src &&
      image3.src == pic33.src)
  ) {
    alert("You win!");
  }
}
